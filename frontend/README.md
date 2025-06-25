# 🎨 Doctor Slot Management System — Frontend (React)

This is the **React-based frontend** for the **Advanced Doctor Slot Management System**, a fullstack project designed to manage doctor availability, patient appointments, and smart slot recommendations.

> 🔗 **Backend Repository:** [advance-level-doctor-slot-management-backend](https://github.com/Ishrz/advance-level-doctor-slot-management-backend)

---

## 🚀 Features

✅ Doctor Info Display  
✅ Slot Booking (Available/Locked/Blocked)  
✅ Bulk Slot Creation (Admin)  
✅ Block Date / Mark Unavailability  
✅ View Locked Slots  
✅ Smart Slot Recommendation (AI logic from backend)  
✅ Admin Control Panel  
✅ Dashboard & Summary Cards *(Optional/Future)*

---

## 🛠️ Tech Stack

| Layer     | Tech                             |
|-----------|----------------------------------|
| Frontend  | React                            |
| UI        | Bootstrap 5, Flatpickr Calendar  |
| HTTP      | Axios                            |
| Icons     | Bootstrap Icons, Emoji           |

---

## 📁 Project Structure

```bash
frontend/
├── public/
├── src/
│   ├── pages/
│   │   ├── BookingPage.js
│   │   ├── CreateSlotPage.js
│   │   ├── RecommendationPage.js
│   │   ├── BlockDatePage.js
│   │   ├── LockedSlotsPage.js
│   │   └── AdminControlsPage.js
│   ├── components/
│   │   ├── DoctorCard.js
│   │   ├── SlotSelector.js
│   │   ├── CreateSlotForm.js
│   │   ├── SlotTable.js
│   │   └── SummaryCard.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md



📦 Installation
1. Clone this repo
bash
Copy
Edit
git clone https://github.com/Ishrz/advance-level-doctor-slot-management-frontend.git
cd advance-level-doctor-slot-management-frontend
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the frontend server
bash
Copy
Edit
npm start
The app runs at: http://localhost:3000


🔗 Backend API Integration
This frontend is designed to work with the Spring Boot backend.

📍 API base URL:


http://127.0.0.1:8080/api/v1/slot-management

Ensure the backend is running locally before testing features like booking, blocking, or recommendations.