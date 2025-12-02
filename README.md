Skill Swap Manager

A platform that allows users to exchange skills instead of money! Users can list skills they can teach, discover skills they want to learn, and connect with others for mutually beneficial swaps. Built with MERN Stack (MongoDB, Express.js, React, Node.js).

Features

✔️ User Authentication (JWT)
✔️ Add & Manage Skills
✔️ Search & Filter Skills
✔️ Request & Manage Skill Swaps
✔️ Matching System for Skill Exchange
✔️ User Profile & Settings
✔️ Fully API-driven Architecture
✔️ Responsive UI with Modern Design

Project Structure

skill-swap-manager/
├── client/                 # Frontend (React App)
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── Auth/
│       │   ├── Skills/
│       │   └── Layout/
│       ├── context/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       ├── App.jsx
│       └── main.jsx
│
├── server/                 # Backend (Node.js + Express)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── .gitignore
├── README.md
└── package.json


🛠️ Tech Stack
Frontend

React + Vite

Context API / Redux

Axios

TailwindCSS (optional customization)

Backend

Node.js + Express.js

MongoDB + Mongoose

JWT Authentication

Bcrypt Password Hashing

⚙️ Installation & Setup
🔧 Prerequisites

Make sure you have installed:

Node.js (v16+)

MongoDB (Local or Atlas Cloud)

🖥️ Clone the repo
git clone https://github.com/yourusername/skill-swap-manager.git
cd skill-swap-manager

📌 Backend Setup
cd server
npm install


Create a .env file inside server/:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_key
PORT=5000


Run backend:

npm start

🌐 Frontend Setup
cd client
npm install


Create .env file inside client/:

VITE_API_URL=http://localhost:5000/api/v1


Run frontend:

npm run dev

🚦 API Endpoints Overview
Feature	Method	Endpoint
Register	POST	/api/v1/auth/register
Login	POST	/api/v1/auth/login
Get Skills	GET	/api/v1/skills
Add Skill	POST	/api/v1/skills
Swap Requests	CRUD APIs	/api/v1/swaps
🧠 Matching Engine (Planned Enhancement)

Suggest users based on complementary skills

Skill rating system

AI-based smart matching (optional future upgrade)

🤝 Contributing

Contributions are welcome!
Feel free to fork this repository and submit PRs.

📜 License

This project is licensed under the MIT License.