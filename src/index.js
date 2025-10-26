var index_default = {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }
    try {
      let userMessage = "";
      if (request.method === "GET") {
        const url = new URL(request.url);
        userMessage = url.searchParams.get("q") || "Hello!";
      } else if (request.method === "POST") {
        const body = await request.json();
        userMessage = body.q || "Hello!";
      }
      const payload = {
        model: "meta-llama/Llama-3.1-8B-Instruct:fireworks-ai",
        messages: [
          {
            role: "user",
            content: userMessage
          }
        ]
      };
      const hfResponse = await fetch("https://router.huggingface.co/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!hfResponse.ok) {
        const errorText = await hfResponse.text();
        return new Response(
          JSON.stringify({
            error: errorText,
            model: "Llama-3.1-8B",
            dev: "YishuGoyal_CGC"
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            }
          }
        );
      }
      const data = await hfResponse.json();
      const message = data?.choices?.[0]?.message?.content || "No response.";
      return new Response(
        JSON.stringify({
          reply: message,
          dev: "YishuGoyalCGC"
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    } catch (err) {
      return new Response(
        JSON.stringify({
          error: err.message,
          dev: "YishuGoyalCGC"
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }
  }
};
export { index_default as default };
