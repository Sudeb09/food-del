# 🍔 Food-Del — MERN Food Ordering App

**Food-Del** is a full-stack food ordering web application built with the **MERN stack**, featuring secure **JWT authentication**, **Stripe payment integration**, and an **admin dashboard** for order and product management.

🔗 **Live Demo**: [https://food-del-frontend-y3di.onrender.com](https://food-del-frontend-y3di.onrender.com)

> ⚠️ **Note for Visitors:** This is a demo project. Please **do not make real payments**. The Stripe integration is in **test mode only**.
>
> 💳 You can use the following **Stripe test card**:
> 
> - **Card Number**: 4000 0003 6000 0006 
> - **Expiry**: Any future date (e.g. 12/34)  
> - **CVC**: Any 3 digits (e.g. 123)  
> - **Postal Code**: Any 4-digit Australian postcode (e.g. 2000)

---

## 🚀 Tech Stack

- **Frontend**: React 
- **Backend**: Node.js + Express  
- **Database**: MongoDB  
- **Auth**: JWT  
- **Payments**: Stripe API

---

## ✨ Key Features

- 🔐 JWT-based signup/login (User & Admin)
- 🛒 Cart system with Stripe checkout
- 📦 Order history tracking
- 🧑‍🍳 Admin: Add/edit/delete products, manage orders
- 📱 Fully responsive design

---

## 🔧 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/Sudeb09/food-del.git && cd food-del

# Backend
cd backend && npm install && npm run server

# Frontend (User)
cd ../frontend && npm install && npm run dev

# Admin Panel
cd ../admin && npm install && npm run dev
💡 Add a .env file in /backend with:

MONGODB_URL=your_mongodb_uri

JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_key

👨‍💻 Author
Made with ❤️ by Sudeb Paul
