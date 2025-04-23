# 🚗 Car Rental App

A fully responsive and modern **Car Rental Application** built using the **MERN Stack** with **Firebase Authentication** and **Tailwind CSS**. The app includes real-time car listings, an integrated map, filtering options, booking features, a loan calculator, and a sleek user interface optimized for all screen sizes.

## 🌐 Live Demo

🔗 

## ✨ Features

- 🔐 Firebase Authentication (Login/Register)
- 📱 Fully responsive UI with Tailwind CSS
- 🚗 Car listing with filtering (by type, brand, price, etc.)
- 🗺️ Built-in map integration (for pickup/drop locations)
- 🧾 Car description and details page
- 📆 Car booking functionality
- 🧮 Loan calculator for financing plans
- 🎨 Clean, modern, and mobile-first UI

## 🧰 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Auth
- **Map**: Mapbox / Google Maps API _(whichever you use)_
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend)

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/car-rental-app.git

2. Navigate into the project directory
cd car-rental-app

3. Install frontend dependencies
cd client
npm install

4. Install backend dependencies
cd ../server
npm install

5. Set up environment variables
Create a .env file in the server directory with:
env
MONGO_URI=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
JWT_SECRET=your_jwt_secret_key

6. Run the backend server
npm run dev

7. Run the frontend
Open a new terminal:
cd client
npm run dev
Then visit: http://localhost:5173

📂 Folder Structure
├── client/               # React + Tailwind frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│   └── public/
├── server/               # Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
├── .env
├── README.md
