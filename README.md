# 🌍 TalkLoop – Language Learning & Practice Platform

**TalkLoop** is an interactive platform for language learners. Users can select their **native** and **target (learning)** languages during onboarding, then connect with others for **real-time chat and video conversations** to practice language skills.

---

## 🎯 Key Features

- 🌐 Select native and learning languages during onboarding
- 🧑‍🤝‍🧑 Match and connect with users who are learning your language
- 📨 Real-time 1-on-1 chat using **Stream Chat API**
- 🎥 High-quality video/audio calls using **Stream Call API**
- 🔒 JWT-based authentication with protected routes
- 🗂️ Friend request system
- 🎨 Beautiful UI with Tailwind CSS and daisyUI
- ⚡ Fast frontend built with Vite + React

---

## 🛠️ Tech Stack

### Frontend:
- React (Vite)
- React Router DOM
- React Query
- Zustand (State Management)
- Tailwind CSS + daisyUI
- Axios

### Backend:
- Node.js + Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- Cloudinary (for user profile images)
- dotenv (Environment variables)

---

## 📡 Chat & Video Calling Services

### 🔄 Real-Time Messaging
- **Stream Chat API** powers our chat experience
- Feature-rich with message formatting, timestamps, and emojis
- Tokens generated securely via backend

### 🎥 Audio/Video Calling
- **Stream Call API** enables crystal-clear video/audio calling
- One-on-one calling built into the user interface
- Easy integration with frontend components

---

## 🧭 App Flow

1. **User lands on the onboarding page**
2. **Chooses their Native Language** (e.g., Hindi, Spanish)
3. **Chooses their Learning Language** (e.g., English, French)
4. Gets matched with people who speak the learning language as their native language
5. Can send friend requests, chat, and call other users

---
