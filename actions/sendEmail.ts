"use server";

import React from "react";
import { Resend } from "resend";

import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    }
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    }
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "javierortizmi@gmail.com",
      subject: `New message from ${senderEmail}`,
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail as string,
        message: message as string,
      }), 
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }  

  return {
    data,
  };
};
