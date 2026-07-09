# 🏫 StudentHub (School Management System API)

A RESTful **School Management System API** built using **Node.js**, **Express.js**, and **MongoDB**. This backend application provides secure authentication and APIs to manage students, teachers, and dashboard statistics. The project follows RESTful architecture and is designed to integrate with any frontend application.

---

## 🚀 Features

- 🔐 User Authentication (JWT)
- 👤 User Registration & Login
- 🛡️ Protected Routes
- 👨‍🎓 Student Management
  - Add Student
  - Get All Students
  - Update Student
  - Delete Student
- 👩‍🏫 Teacher Management
  - Add Teacher
  - Get All Teachers
  - Update Teacher
  - Delete Teacher
- 📊 Dashboard Statistics
  - Total Students
  - Total Teachers
  - Total Users
- 📷 Image Upload using Multer
- ⚡ RESTful API Architecture
- ❗ Error Handling & Validation
- 🗄️ MongoDB Database Integration

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| Node.js | JavaScript Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | NoSQL Database |
| Mongoose | MongoDB Object Modeling |
| JWT | Authentication & Authorization |
| bcryptjs | Password Hashing |
| Multer | Image Upload |
| dotenv | Environment Variable Management |
| Postman | API Testing |

---

## 📁 Project Structure

```text
School-Management-System/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── uploads/
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/vaishnavi-0311/School-Management.git
```

### 2️⃣ Navigate to the Project Folder

```bash
cd School-Management
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Create a `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5️⃣ Start the Server

```bash
npm start
```

or (for development)

```bash
npm run dev
```

The server will run at:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Students

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get student by ID |
| POST | `/api/students` | Add a new student |
| PUT | `/api/students/:id` | Update student |
| DELETE | `/api/students/:id` | Delete student |

### Teachers

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/teachers` | Get all teachers |
| POST | `/api/teachers` | Add a new teacher |
| PUT | `/api/teachers/:id` | Update teacher |
| DELETE | `/api/teachers/:id` | Delete teacher |

### Dashboard

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard` | Get total students, teachers, and users |

---

## 🔒 Authentication

This API uses **JSON Web Token (JWT)** for secure authentication.

After successful login, include the token in the request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 🧪 API Testing

All APIs were tested using **Postman**.

### Tested Functionalities

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Student CRUD Operations
- ✅ Teacher CRUD Operations
- ✅ Dashboard API
- ✅ Image Upload
- ✅ Protected Routes
- ✅ Error Handling

---

## 📚 What I Learned

This project helped me gain hands-on experience in:

- Building RESTful APIs using Express.js
- Designing MongoDB databases with Mongoose
- Implementing JWT Authentication
- Password Hashing using bcryptjs
- CRUD Operations
- Middleware Implementation
- File Upload using Multer
- Backend Project Structure
- API Testing with Postman
- Environment Variable Management

---

## 👩‍💻 Author

**Vaishnavi**

- GitHub: https://github.com/vaishnavi-0311

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub!