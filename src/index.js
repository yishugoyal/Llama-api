export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  try {
    let userMessage = "";

    if (req.method === "GET") {
      userMessage = req.query.q || "Hello!";
    } else if (req.method === "POST") {
      userMessage = req.body.q || "Hello!";
    } else {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const payload = {
      model: "meta-llama/Llama-3.1-8B-Instruct:fireworks-ai",
      messages: [{ role: "user", content: userMessage }]
    };

    const hfResponse = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    if (!hfResponse.ok) {
      const errorText = await hfResponse.text();
      return res.status(500).json({
        error: errorText,
        model: "Llama-3.1-8B",
        dev: "YishuGoyal_CGC"
      });
    }

    const data = await hfResponse.json();
    const message = data?.choices?.[0]?.message?.content || "No response.";

    return res.status(200).json({
      reply: message,
      dev: "YishuGoyalCGC"
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message,
      dev: "YishuGoyalCGC"
    });
  }
}
