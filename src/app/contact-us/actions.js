// src/app/contact-us/actions.js
"use server";

import db from "@/lib/db";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

async function sendEmails(contactData) {
    const { name, email, phone, contact_reason, message } = contactData;

    try {
        // 1. Send email to Admin
        await transporter.sendMail({
            from: `"${process.env.NEXT_PUBLIC_APP_NAME}" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            subject: `New Inquiry: ${contact_reason} from ${name}`,
            text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nReason: ${contact_reason}\nMessage: ${message}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Reason:</strong> ${contact_reason}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        // 2. Send thank you email to User
        await transporter.sendMail({
            from: `"${process.env.NEXT_PUBLIC_APP_NAME}" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Thank you for contacting ${process.env.NEXT_PUBLIC_APP_NAME}`,
            text: `Hi ${name},\n\nThank you for reaching out to us regarding "${contact_reason}". We have received your message and our team will get back to you shortly.\n\nBest Regards,\n${process.env.NEXT_PUBLIC_APP_NAME}`,
            html: `
                <h3>Hi ${name},</h3>
                <p>Thank you for reaching out to us regarding <strong>"${contact_reason}"</strong>.</p>
                <p>We have received your message and our team will get back to you shortly.</p>
                <br/>
                <p>Best Regards,<br/>${process.env.NEXT_PUBLIC_APP_NAME}</p>
            `,
        });

        return true;
    } catch (error) {
        console.error("Email sending error:", error);
        return false;
    }
}

export async function submitContactForm(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const contact_reason = formData.get("contact_reason");
    const message = formData.get("message");

    // Basic validation (mimicking the jQuery rules)
    if (!name || name.length < 2) {
        return { success: 0, message: "Please enter your name (min 2 characters)" };
    }
    if (!email || !email.includes("@")) {
        return { success: 0, message: "Please enter a valid email address" };
    }
    if (!phone || phone.length > 10) {
        return { success: 0, message: "Please enter a valid phone number (max 10 digits)" };
    }
    if (!contact_reason) {
        return { success: 0, message: "Please select a reason for contact" };
    }
    if (!message) {
        return { success: 0, message: "Please enter your message" };
    }

    try {
        const created_by = 1;
        const created_on = new Date().toISOString().slice(0, 19).replace('T', ' '); // YYYY-MM-DD HH:MM:SS

        const [result] = await db.execute(
            "INSERT INTO contact_master (name, email, phone, contact_reason, message, created_by, created_on) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [name, email, phone, contact_reason, message, created_by, created_on]
        );

        if (result.affectedRows > 0) {
            // Send emails after successful DB insertion
            await sendEmails({ name, email, phone, contact_reason, message });

            return { success: 1, message: "Your Message sent successfully !" };
        } else {
            return { success: 0, message: "Error add data." };
        }
    } catch (error) {
        console.error("Database error:", error);
        return { success: 0, message: "Error add data." };
    }
}
