// pages/api/send-email.js

import { sendEmail } from "@/lib/send-email";

export default async function handler(req: any, res: any) {
  if (!process.env.CLIENT_EMAIL_ADDRESS || !process.env.RECAPTCHA_SECRET_KEY) {

    return res.status(500).json({ message: 'Erro ao enviar a mensagem.', details: 'Variable not set' });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);

    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { name, email, phone, subject, message, token } = req.body;
    const secret = process.env.RECAPTCHA_SECRET_KEY;

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    // Verifica token com o Google
    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`,
      }
    );

    const data = await verifyRes.json();

    if (!data.success || data.score < 0.5) {
      return res.status(400).json({ message: 'Não foi possível validar o recaptcha.' })
    }

    const htmlContent = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h3 style="color: #333;">Nova mensagem de Contato</h3>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Celular (WhatsApp):</strong> ${phone}</p>
                <p><strong>Assunto:</strong> ${subject}</p>
                <hr style="border: 0; border-top: 1px solid #eee;">
                <h4>Mensagem:</h4>
                <div style="padding: 15px; background-color: #f9f9f9; border: 1px solid #eee;">
                    ${message}
                </div>
            </div>
        `;

    await sendEmail({
      to: process.env.CLIENT_EMAIL_ADDRESS,
      subject: `[Contato - GRM Sociedade de Advogados] ${subject}`,
      html: htmlContent,
    });

    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });

  } catch (error: any) {
    console.error('Erro ao enviar e-mail com SendGrid:', error);

    const errorMessage = error.response && error.response.body && error.response.body.errors
      ? error.response.body.errors.map((e: any) => e.message).join('; ')
      : 'Erro desconhecido do SendGrid.';

    return res.status(500).json({ message: 'Erro ao enviar a mensagem.', details: errorMessage });
  }
}