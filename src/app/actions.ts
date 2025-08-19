"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export async function sendEmail(data: FormData) {
  try {
    const { name, company, email, phone, message } = data;

    await resend.emails.send({
      from: "HZ Company <onboarding@resend.dev>",
      to: ["hzcompanyteam@gmail.com"],
      subject: `Новая заявка от ${name} (${company})`,
      text: `
        Имя: ${name}
        Компания: ${company}
        Email: ${email}
        Телефон: ${phone}
        Сообщение: ${message}
      `,
    });

    return { success: true };
  } catch (error: unknown) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send email" };
  }
}
