* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f2fe, #f8fafc);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.main-container {
  width: 1200px;
  height: 600px;
  background: #fff;
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.img-container {
  width: 50%;
  position: relative;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}
.img-container::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55));
}

.img-container h1 {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  width: 80%;
}

.signup-container {
  width: 50%;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #715e44;
}

.signup-container h1 {
  font-size: 3.2rem;
  color: white;
  margin-bottom: 15px;
  text-transform: capitalize;
}

.toggle-buttons,
.user-type {
  display: flex;
  gap: 12px;
  margin-bottom: 15px;
}

.toggle-buttons button,
.user-type button {
  border: none;
  padding: 10px 22px;
  border-radius: 10px;
  background: #e2e8f0;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  transition: 0.3s;
}
.toggle-buttons button:hover,
.user-type button:hover {
  transform: translateY(-2px);
}

.active {
  background: #1d2c33 !important;
  color: white;
}

form {
  width: 100%;
  max-width: 450px;
  display: none;
  flex-direction: column;
  gap: 12px;
  background: white;
  padding: 20px;
  border-radius: 18px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

form.active {
  display: flex;
}

input,
textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #dbe4ee;
  border-radius: 10px;
  font-size: 14px;
  background: #f8fafc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #0ea5e9;
  background: white;
}

textarea {
  resize: none;
}

input[type="file"] {
  background: #f8fafc;
  cursor: pointer;
}

button[type="submit"] {
  width: 100%;
  padding: 12px;

  border: none;
  border-radius: 10px;

  background: #0ea5e9;
  color: white;

  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

button[type="submit"]:hover {
  background: #0284c7;
}

.pass-link {
  text-align: right;
}

.pass-link a {
  text-decoration: none;
  color: white;
}

.pass-link a:hover {
  color: gold;
}

.scrollable {
  max-height: 500px;
  overflow-y: auto;
  padding-right: 8px;
}

.scrollable::-webkit-scrollbar {
  width: 6px;
}

.scrollable::-webkit-scrollbar-thumb {
  background: #0ea5e9;
  border-radius: 20px;
}

.hidden {
  display: none;
}

@media (max-width: 992px) {
  .main-container {
    flex-direction: column;
    height: auto;
  }

  .img-container,
  .signup-container {
    width: 100%;
  }

  .img-container {
    height: 300px;
  }

  .img-container h1 {
    font-size: 2rem;
  }

  .signup-container {
    padding: 25px;
  }

  .signup-container h1 {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .toggle-buttons,
  .user-type {
    flex-direction: column;
    width: 100%;
  }

  .toggle-buttons button,
  .user-type button {
    width: 100%;
  }

  .img-container h1 {
    font-size: 1.5rem;
  }
}

.hidden {
  display: none;
}

#forgotPasswordForm {
  display: flex;
  flex-direction: column;
}

#verifyOtpForm {
  flex-direction: column;
}
.pass-link a {
  color: white;
}
.pass-link a {
  color: #0ea5e9;
  font-weight: 600;
  cursor: pointer;
}

.pass-link a:hover {
  color: #0284c7;
}
#backToLogin {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background: #e2e8f0;
  font-weight: 600;
}

#backToLogin:hover {
  background: #cbd5e1;
}
