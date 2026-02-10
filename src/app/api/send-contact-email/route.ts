import { NextResponse } from "next/server";
import resend from "@/lib/resend";
import ContactFormEmail from "@/components/emails/ContactFormEmail";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email to your support team
    const { data, error } = await resend.emails.send({
      from: "HealthCare Contact Form <no-reply@resend.dev>",
      to: ["amanrai2002acr@gmail.com"], // Your email
      replyTo: email, // User's email for easy reply
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({
        name,
        email,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully", emailId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}