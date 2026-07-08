# ⚖️ AdvocateHub

AdvocateHub is a full-stack lawyer management and legal services platform that connects users with advocates. The platform allows lawyers to create and manage their profiles, while users can browse advocate information and access legal services.

Built using **Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript**.

---

## 🚀 Features

- 🔐 User Authentication and Authorization
- 👨‍⚖️ Lawyer Registration and Profile Management
- 📂 File Upload Functionality
- 🔍 Search and Browse Advocates
- 📧 Email Notifications
- 🗄️ MongoDB Database Integration
- 🌐 Responsive User Interface
- 🔒 Secure Password Hashing using Bcrypt
- ⚡ RESTful APIs with Express.js

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Other Packages
- bcryptjs
- multer
- cors
- dotenv
- nodemailer

---

## 📁 Project Structure

```text
AdvocateHub/
│
├── All_logos/
│   └── Images and project assets
│
├── uploads/
│   └── Uploaded advocate documents and profile photos
│
├── Models/
│   ├── Advocate.js
│   ├── Client.js
│   └── User.js
│
├── Routes/
│   ├── advocateRoutes.js
│   ├── clientRoutes.js
│   └── authRoutes.js
│
├── Middleware/
│   └── Authentication and authorization middleware
│
├── client.html
├── advocate.html
├── login.html
├── signup.html
├── index.html
│
├── client.css
├── advocate.css
├── login.css
├── style.css
│
├── client.js
├── advocate.js
├── login.js
├── script.js
│
├── server.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/anoopyadav-01/AdvocateHub.git
cd AdvocateHub
```

### Install Dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Application

Start the server using:

```bash
npm start
```

or

```bash
node server.js
```

The application will run on:

```text
http://localhost:5000
```

---

## 📸 Key Modules

### 👨‍⚖️ Advocate Module
- Advocate Registration
- Profile Management
- Document Upload
- Experience & Practice Area Management
-connect to client'

### 👤 Client Module
- User Registration & Login
- Browse Advocates
- Search & Filter Lawyers
- Contact Lawyers

### 📧 Notification Module
- Email Notifications
- Account Updates
- Inquiry Notifications

### 🔒 Security Module
- Password Hashing using Bcrypt
- Authentication & Authorization
- Secure API Endpoints

---

## 🌟 Future Enhancements

- Video Consultation
- Lawyer Rating & Review System
- Legal Blog & Articles
- Payment Gateway Integration
- AI-Based Lawyer Recommendation System

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## 📂 GitHub Repository

https://github.com/anoopyadav-01/AdvocateHub.git

---

## 👨‍💻 Author

**Anoop Yadav**

Computer Science Student  
Full Stack Web Developer



