import { render } from '@react-email/render';
import EmailTemplate from '@/emails/template';  // your email component

export async function GET() {
  const html = await render(<EmailTemplate />, { pretty: true });

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}