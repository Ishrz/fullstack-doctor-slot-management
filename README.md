# 🏥 Doctor Slot Management System – Fullstack App

An **advanced fullstack web application** for managing doctor appointment slots, availability, and smart AI-based slot recommendations.

Built using:
- **Backend:** Spring Boot + PostgreSQL
- **Frontend:** React + Bootstrap
- **API Layer:** Secure RESTful architecture

> 🔗 Backend Code: [`/backend`](./backend)  
> 🔗 Frontend Code: [`/frontend`](./frontend)  
> 🔗 Deployed Demo: _[Coming Soon]_  

---

## 📸 Preview

![Preview](https://via.placeholder.com/800x400?text=Doctor+Slot+Management+System)

---

## 🧩 Key Features

### 🧑‍⚕️ Doctor / Patient Functionality
- 📅 View available & locked slots
- 🔒 Book appointments
- 🧠 AI-powered smart slot recommendation

### 🛠️ Admin Controls
- 📦 Bulk slot creation
- 🚫 Mark dates unavailable
- 🔒 Lock or delete slots
- 🔓 View and manage blocked/locked slots

---

## 🛠️ Tech Stack

| Layer        | Tech                           |
|--------------|--------------------------------|
| Frontend     | React, Bootstrap, Flatpickr    |
| Backend      | Spring Boot (Java 17)          |
| Database     | PostgreSQL                     |
| HTTP Client  | Axios                          |
| Build Tools  | Maven (backend), npm (frontend) |

---

## 🗃️ Database Setup

### 📦 PostgreSQL (Used for persistence)

**Connection Info (from `application.properties`):**

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/doctor_slot_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
🔸 Create the database manually in pgAdmin or psql:

sql

CREATE DATABASE doctor_slot_db;

Make sure your credentials match those in the backend config file.

📁 Folder Structure

fullstack-doctor-slot-management/
├── backend/      # Spring Boot backend (REST API + PostgreSQL)
├── frontend/     # React frontend (UI)
└── README.md     # You're here!

📦 Local Setup
🔧 Backend

cd backend
./mvnw spring-boot:run
Runs at: http://localhost:8080

Make sure PostgreSQL is running and DB is configured.

🎨 Frontend

cd frontend
npm install
npm start
Runs at: http://localhost:3000

🔗 API Overview
All APIs are exposed via:

POST http://localhost:8080/api/v1/slot-management
Action	Description
CREATE_SLOTS	Bulk slot generation
BLOCK_DATE	Mark date(s) unavailable
BOOK_SLOT	Book a specific slot
LOCK_SLOT	Temporarily lock a slot
DELETE_SLOTS	Delete selected slot(s)
GET_SLOTS	Fetch slots by date
RECOMMEND_SLOT	AI-driven slot recommendation

🧠 Future Enhancements
🔐 User authentication (JWT, role-based)

📲 Responsive mobile view

📊 Admin dashboard with analytics

☁️ Deployment: Netlify (Frontend) + Render (Backend)

🤝 Author & Maintainer
🧑‍💻 📁 GitHub: @Ishrz

📄 License
MIT License © 2025 – Ishrz