<!-- 🔥 Animated Header -->
<h1 align="center">🏡 StaySphere</h1>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&pause=1000&color=00C2FF&center=true&vCenter=true&width=800&lines=Full-Stack+Accommodation+Platform;Node.js+%7C+Express+%7C+MongoDB;MVC+Architecture+%7C+REST+APIs;Authentication+%7C+Cloudinary+Integration" />
</p>

---

## 🚀 Overview

StaySphere is a **full-stack accommodation booking platform** built using **Node.js, Express, MongoDB, and EJS** following the **MVC architecture**.

The platform allows users to browse accommodations, create listings, upload images, and securely manage sessions through authentication and authorization.

---

## ✨ Features

- 🏡 Accommodation Listing Platform  
- 🔐 Secure User Authentication & Session Management  
- 📡 10+ RESTful APIs for CRUD Operations  
- ☁️ Image Upload using Multer & Cloudinary  
- ⚡ Optimized Backend Data Handling  
- 🧠 MVC Architecture for Scalability  
- 📱 Responsive UI for Better User Experience  

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,js,html,css,git,github" />
</p>

---

## 📚 Core Functionalities

### 🔐 Authentication
- User Signup & Login  
- Secure Session Handling  
- Logout Functionality  
- Authorization Middleware  

---

### 🏡 Listings Management
- Create accommodation listings  
- Read & explore listings  
- Update listing details  
- Delete listings  

---

### ☁️ Media Upload
- Image upload using Multer  
- Cloudinary integration for scalable cloud storage  

---

## 📁 Project Structure

    StaySphere/
    │
    ├── controllers/ # Business logic
    ├── models/ # MongoDB schemas
    ├── routes/ # API & route handlers
    ├── middleware/ # Authentication & validation
    ├── views/ # EJS templates
    ├── public/ # Static assets
    ├── utils/ # Utility functions
    ├── cloudConfig/ # Cloudinary configuration
    │
    ├── app.js # Express app configuration
    ├── package.json
    └── .env

---

## 📡 REST API Endpoints

### 🏡 Listings

| Method | Endpoint | Description |
|--------|---------|------------|
| GET | `/listings` | Get all listings |
| GET | `/listings/:id` | Get single listing |
| POST | `/listings` | Create new listing |
| PUT | `/listings/:id` | Update listing |
| DELETE | `/listings/:id` | Delete listing |

---

### 🔐 Authentication

| Method | Endpoint | Description |
|--------|---------|------------|
| GET | `/signup` | Render signup page |
| POST | `/signup` | Register user |
| GET | `/login` | Render login page |
| POST | `/login` | Authenticate user |
| GET | `/logout` | Logout user |

---

## 🔒 Authentication Flow

  ```
    User Login → Session Created
            ↓
    Protected Route Access
            ↓
    Authentication Middleware Validates User
            ↓
    Access Granted / Redirected
    
  ```
    
---

## 🧠 How It Works

- User signs up or logs in
- Session gets created securely
- User can create or manage listings
- Images uploaded via Multer
- Cloudinary stores uploaded media
- MongoDB stores listing & user data
- Dynamic pages rendered using EJS

---

## 📈 Project Highlights

- 🚀 Built using scalable MVC architecture
- 📡 Developed 10+ RESTful APIs
- 🔐 Implemented secure authentication system
- ☁️ Integrated cloud media storage
- ⚡ Optimized backend data flow

---

## 🔮 Future Enhancements

- 💳 Online Booking & Payments
- ⭐ Reviews & Ratings System
- 📍 Interactive Maps Integration
- 🔔 Email Notifications

---

## 🌐 Deployed Link

- Live: https://staysphere-9soz.onrender.com/

---

## ⚙️ Installation

  ```
    git clone https://github.com/Sohan-hub11/StaySphere.git
    cd StaySphere
    npm install
    npm start
  ```
---

## 👨‍💻 Author

Made with ❤️ by [Sohan Samanta](https://github.com/Sohan-hub11)

---

⭐ If you found this helpful, give it a **star** and consider contributing!
