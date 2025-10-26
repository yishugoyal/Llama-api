# 🦙 LLaMA 3.1 (8B) API

A lightweight, **serverless API** for interacting with **Meta LLaMA 3.1 8B Instruct** via the **Hugging Face Inference API**, deployed on **Cloudflare Workers**.

> Developed by [Yishu Goyal](https://yishu.vercel.app)
> 🚀 Live Demo: [API URL](https://your-worker-url/)

---

## 🌟 Features

* ✅ Supports both `GET` and `POST` HTTP methods
* 🧠 Integrates **LLaMA 3.1 8B Instruct** model via Hugging Face
* ⚡ Serverless, fast, and scalable using **Cloudflare Workers**
* 🔐 Secure API key management through **environment variables**
* 💬 Returns **JSON-formatted** responses with developer tag
* 🧩 Error handling with clear messages

---

## 📦 Project Structure

```
llama3.1-api/
│
├── src/
│   └── index.js        
├── .gitignore          
├── LICENSE             
├── README.md          
└── package.json        
```

---

## 🚀 Quick Start

### 1. GET Request

```
https://your-worker-url/?q=Hello%20LLaMA
```

### 2. POST Request

```bash
curl -X POST https://your-worker-url/ \
  -H "Content-Type: application/json" \
  -d '{"q": "Explain quantum computing in simple terms"}'
```

### 3. Sample Response

```json
{
  "reply": "Quantum computing uses qubits...",
  "dev": "YishuGoyalCGC"
}
```

---

## 🛠️ Deployment

1. **Install Wrangler CLI**

```bash
npm install -g wrangler
```

2. **Login**

```bash
wrangler login
```

3. **Set Environment Variable**

```bash
wrangler secret put HF_API_KEY
```

4. **Publish**

```bash
npx wrangler publish
```

---

## 🔒 Security Best Practices

* Never commit your **Hugging Face API key** to GitHub
* Always use environment variables (`env.HF_API_KEY`)
* License your code to protect your ownership

---

## 📄 License

**All Rights Reserved © 2025 — Yishu Goyal**

This project is owned by **Yishu Goyal**.
Unauthorized copying, modification, distribution, or use is strictly prohibited.

---

## 👨‍💻 Author

**Yishu Goyal**

* 🌐 [Portfolio](https://yishu-portfolio.vercel.app)
* 💼 [LinkedIn](https://linkedin.com/in/yishugoyal)
* 💻 [GitHub](https://github.com/yishugoyal)
* ✉️ [Email](mailto:yishugoyalbth@gmail.com)

---

## 💡 Use Cases

* Chatbots & AI assistants
* Microservices backend for LLMs
* Prototyping conversational AI tools
* Educational / demo purposes
