# 🤖 AI-Powered Chat App 💬

A fun and interactive full-stack AI chatbot application built with React (Vite) on the frontend and Node.js/Express with MongoDB and Hugging Face integration on the backend!

![Chat App](https://i.imgur.com/b5DPUmI.png)

## ✨ Features

- 🧠 Real-time AI chat via Hugging Face API
- 📱 Responsive React frontend built with Vite
- 🔄 CORS-enabled Express backend
- 🗄️ MongoDB integration for data persistence
- ⚡ Asynchronous message handling

## 🌐 Live Demo

- 🖥️ Frontend: [https://ai-chatbot-frontend-lwk2.onrender.com](https://ai-chatbot-frontend-lwk2.onrender.com)
- ⚙️ Backend: [https://ai-chatbot-aauo.onrender.com](https://ai-chatbot-aauo.onrender.com)

## 🚀 Getting Started

### 📋 Prerequisites

- 📦 Node.js (v14 or newer)
- 🔧 npm or yarn
- 🍃 MongoDB account (for database)
- 🤗 Hugging Face account (for API key)

### 🔧 Backend Setup

1. Navigate to the backend folder:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   HF_API_KEY=your_huggingface_api_key
   ```

4. Start the development server:
   ```
   npm run dev
   ```

🎉 The backend will be available at `http://localhost:5000`.

### 💻 Frontend Setup

1. Navigate to the frontend folder:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. (Optional) Create a `.env` file:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```
   
   Alternatively, you can hardcode the API URL in your frontend code:
   ```javascript
   axios.post('http://localhost:5000/api/chat', {...})
   ```

4. Start the development server:
   ```
   npm run dev
   ```

🎯 The frontend will be available at `http://localhost:5173`.


## 🔍 Troubleshooting

- ❓ **"Cannot GET /api/chat"**: Verify that your API base URL is correct in the frontend code
- 🚫 **CORS error**: Ensure that your backend has CORS middleware enabled with `app.use(cors())`
- ⚠️ **Error responses**: Check the Render logs for potential backend crashes or errors
- 🔌 **Connection issues**: Verify MongoDB connection string and Hugging Face API key



## 👏 Acknowledgments

- ⚛️ [React](https://reactjs.org/) - Frontend library
- ⚡ [Vite](https://vitejs.dev/) - Frontend build tool
- 🚂 [Express](https://expressjs.com/) - Backend framework
- 🍃 [MongoDB](https://www.mongodb.com/) - Database
- 🤗 [Hugging Face](https://huggingface.co/) - AI model provider
- 🖥️ [Render](https://render.com/) - Deployment platform
