import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { writeClient } from "@/sanity/lib/write-client";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, whatsapp, skills } = await req.json();

    if (!name || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Name, email, and WhatsApp number are required." },
        { status: 400 }
      );
    }

    // Save to Sanity
    await writeClient.create({
      _type: "volunteer",
      name,
      email,
      whatsapp,
      skills: skills || "",
      submittedAt: new Date().toISOString(),
    });

    // Send email notification to admin
    await resend.emails.send({
      from: "HOOT Africa <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL!,
      subject: `New Volunteer Application — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #166294;">New Volunteer Application</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">WhatsApp</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${whatsapp}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Skills</td>
              <td style="padding: 10px 0;">${skills || "Not provided"}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #888; font-size: 13px;">
            Submitted on ${new Date().toLocaleString("en-NG", { timeZone: "Africa/Lagos" })}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Volunteer submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
