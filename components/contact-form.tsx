"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 2000)
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
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-tertiary mb-2">
          Celular (WhatsApp)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-tertiary placeholder-tertiary/50 focus:outline-none focus:ring-2 focus:ring-secondary"
          placeholder="(11) 99999-9999"
        />
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
          <option value="terceiroSetor">Terceiro Setor</option>
          <option value="empresarial">Empresarial</option>
          <option value="trabalhista">Trabalhista e Sindical</option>
          <option value="previdenciario">Previdenciário</option>
          <option value="civil">Cível</option>
          <option value="administrativo">Administrativo</option>
          <option value="outro">Outro</option>
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
        />
      </div>

      <button
        type="submit"
        className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${submitted
            ? "bg-secondary/50 text-primary cursor-not-allowed"
            : "bg-secondary text-primary hover:bg-secondary/90"
          }`}
        disabled={submitted}
      >
        {submitted ? "Mensagem Enviada!" : "Enviar Mensagem"}
      </button>
    </form>
  )
}
