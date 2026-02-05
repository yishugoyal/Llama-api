# 🦙 LLaMA 3.1 (8B) API

A lightweight, **serverless API** for interacting with **Meta LLaMA 3.1 8B Instruct** via the **Hugging Face Inference API**, deployed on **Cloudflare Workers**.

> Developed by [Yishu Goyal](https://yishu.vercel.app)
> 🚀 Live Demo: [https://llama.yuvigoyal4.workers.dev/](https://llama.yishugoyal.workers.dev/?q=) 

---

## 🌟 Features

* ✅ Supports both `GET` and `POST` HTTP methods
* 🧠 Integrates **LLaMA 3.1 8B Instruct** model via Hugging Face
* ⚡ Serverless, fast, and scalable using **Cloudflare Workers**
* 🔐 Secure API key management via **environment variables**
* 💬 Returns **JSON-formatted** responses with developer signature
* 🧩 Robust error handling with clear messages

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
https://llama.yuvigoyal4.workers.dev/?q=Hello%20LLaMA
```

### 2. POST Request

```bash
curl -X POST https://llama.yuvigoyal4.workers.dev/ \
  -H "Content-Type: application/json" \
  -d '{"q": "Explain quantum computing in simple terms"}'
```

### 3. Sample Response

```json
{
  "reply": "Quantum computing uses qubits...",
  "model":"Llama-3.1-8B",
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

This project is the intellectual property of **Yishu Goyal**.
Unauthorized copying, modification, distribution, or use is strictly prohibited.

---

## 🧑‍💻 Developer
**Yishu Goyal**  
🌐 Portfolio: [yishu.vercel.app](https://yishu.vercel.app)  
💼 LinkedIn: [linkedin.com/in/yishugoyal](https://linkedin.com/in/yishugoyal)  
🐙 GitHub: [github.com/yishugoyal](https://github.com/yishugoyal)  
📧 Email: [yishugoyalbth@gmail.com](mailto:yishugoyalbth@gmail.com)

---

## 💡 Use Cases

* Chatbots & AI assistants
* Microservices backend for LLMs
* Prototyping conversational AI tools
* Educational / demo purposes

