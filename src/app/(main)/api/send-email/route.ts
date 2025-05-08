import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

// You can secure this endpoint with your own CAPTCHA, rate-limiting, etc.

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, serviceInterest, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
        status: 400,
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'Jabal Builders <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO || 'alimalikali1928@gmail.com'],
      subject: 'New Message from Jabal Builders Website Contact Form ',
      react: EmailTemplate({
        name,
        email,
        phone,
        serviceInterest,
        message,
      }) as React.ReactElement,
    });

    if (error) {
      console.error('Email sending failed:', error);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (err) {
    console.error('Server Error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
