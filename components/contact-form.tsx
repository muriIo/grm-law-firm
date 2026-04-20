"use client"

import type React from "react";

import { useEffect, useState } from "react";
import PhoneInput from './inputs';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)
    throw new Error('Turnstile site key not found');

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    const container = document.querySelector('#cf-turnstile-container');

    if (!container)
      return;

    window.turnstile.render(container, {
      sitekey: siteKey,
      appearance: 'always',
      theme: 'dark',
      callback: onTurnstileSuccess,
      'expired-callback': onTurnstileExpired,
      'error-callback': onTurnstileError,
    });
  }, []);


  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePhoneChange = (e: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: e,
    }))
  }

  const validateForm = () => {
    const keys = Object.keys(formData);

    for (const key of keys) {
      const value = formData[key as keyof ContactFormData];

      if (value && value.trim() != "") {
        formData[key as keyof ContactFormData] = value.trim();

        continue;
      }

      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading)
      return;

    if (!validateForm())
      return;

    try {
      setIsLoading(true);

      if (!token) throw new Error('Turnstile token not found');

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, token }),
      });

      await response.json();

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    } finally {
      const container = document.querySelector('#cf-turnstile-container');

      if (container) {
        window.turnstile.reset(container);
      }

      setIsLoading(false);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
        setSubmitted(false);
      }, 2000);
    }

  }

  const onTurnstileSuccess = (token: string) => {
    console.log("Turnstile success:", token);
    setToken(token);
  }
  const onTurnstileError = (errorCode: string) => {
    console.error("Turnstile error:", errorCode);
    setToken(null);
  }
  const onTurnstileExpired = () => {
    console.warn("Turnstile token expired");
    setToken(null);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-tertiary mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-tertiary placeholder-tertiary/50 focus:outline-none focus:ring-2 focus:ring-secondary"
          placeholder="Seu nome completo"
          maxLength={300}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-tertiary mb-2">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-tertiary placeholder-tertiary/50 focus:outline-none focus:ring-2 focus:ring-secondary"
          placeholder="seu@email.com"
          maxLength={300}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-tertiary mb-2">
          Celular (WhatsApp)
        </label>
        <PhoneInput value={formData.phone} onChange={handlePhoneChange} />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-tertiary mb-2">
          Assunto
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          <option value="">Selecione um assunto</option>
          <option value="Terceiro Setor">Terceiro Setor</option>
          <option value="Empresarial">Empresarial</option>
          <option value="Trabalhista">Trabalhista e Sindical</option>
          <option value="Previdenciário">Previdenciário</option>
          <option value="Cível">Cível</option>
          <option value="Administrativo">Administrativo</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-tertiary mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-tertiary placeholder-tertiary/50 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
          placeholder="Descreva sua dúvida ou necessidade..."
          maxLength={500}
        />
      </div>

      <div className='flex justify-center items-center' id="cf-turnstile-container"></div>

      <button
        type="submit"
        className={`cursor-pointer w-full px-6 py-3 rounded-lg font-semibold transition-colors ${isLoading
          ? "bg-secondary/50 text-primary cursor-not-allowed"
          : "bg-secondary text-primary hover:bg-secondary/90"
          }`}
        disabled={isLoading}
      >
        {isLoading ? 'Enviando...' : submitted ? "Mensagem Enviada!" : "Enviar Mensagem"}
      </button>
    </form>
  )
}
