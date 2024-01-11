"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")

  if(!validateString(senderEmail, 500)){
    return {
      error: "E-mail de remetente inválido"
    }
  }
  if(!validateString(message, 5000)){
    return {
      error: "Mensagem de remetente inválido"
    }
  }

  let data
  try {
      data = await resend.emails.send({
        from: "Contato do Portfolio <onboarding@resend.dev>",
        to: "gabriel.hneus@gmail.com",
        subject: "Mensagem do formulário de contato",
        reply_to: senderEmail as string,
        react: React.createElement(ContactFormEmail, {
          message: message as string,
          senderEmail: senderEmail as string
        })
      })
    
  } catch (error: unknown){
      return{
        error: getErrorMessage(error)
      }
     }

  return {
    data
  }
}