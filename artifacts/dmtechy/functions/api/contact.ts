const ADMIN_EMAIL = "info@dmtechy.com";

export async function onRequestPost(context: any) {
  const RESEND_API_KEY = context.env.RESEND_API_KEY;

  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const body = await context.request.json() as any;
    const { name, email, phone, message } = body;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "DMTechy <info@dmtechy.com>",
        to: [ADMIN_EMAIL],
        subject: `New inquiry from ${name}`,
        reply_to: email,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#000;padding:20px;border-radius:8px 8px 0 0;">
              <h1 style="color:white;margin:0;">New Inquiry - DMTechy</h1>
            </div>
            <div style="background:#f9f9f9;padding:24px;border:1px solid #eee;border-radius:0 0 8px 8px;">
              <p><b>Name:</b> ${name}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Phone:</b> ${phone}</p>
              <p><b>Message:</b> ${message}</p>
            </div>
          </div>`,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return new Response(JSON.stringify({ error: err }), {
        status: 500,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
