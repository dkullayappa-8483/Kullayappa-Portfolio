const allowedMethods = ['POST'];

export default async function handler(request, response) {
  try {
    if (!allowedMethods.includes(request.method)) {
      response.setHeader('Allow', allowedMethods);
      return response.status(405).json({ error: 'Method not allowed.' });
    }

    const { name, email, message } = request.body || {};
    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return response.status(400).json({ error: 'Please provide a valid name, email, and message.' });
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL || !process.env.RESEND_FROM) {
      return response.status(500).json({ error: 'Contact service is not configured yet.' });
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM,
        to: [process.env.CONTACT_EMAIL],
        reply_to: email,
        subject: `Portfolio enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      let providerMessage = '';
      try {
        const providerResult = await resendResponse.json();
        providerMessage = providerResult.message || providerResult.name || '';
      } catch {
        providerMessage = '';
      }
      console.error('Resend rejected contact email:', resendResponse.status, providerMessage);
      return response.status(502).json({
        error: providerMessage
          ? `Resend rejected the message: ${providerMessage}`
          : 'Resend rejected the message. Check your sender, recipient, and API key settings.',
      });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return response.status(500).json({ error: 'The contact service is temporarily unavailable.' });
  }
}
