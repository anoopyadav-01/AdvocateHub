window.addEventListener("pageshow", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.reset();
  }
});
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const clientBtn = document.getElementById("clientBtn");
const lawyerBtn = document.getElementById("lawyerBtn");
const clientForm = document.getElementById("clientForm");
const lawyerForm = document.getElementById("lawyerForm");
const loginForm = document.getElementById("loginForm");
const userTypeButtons = document.getElementById("userTypeButtons");
const userRoleInfo = document.getElementById("userRoleInfo");
const formHeading = document.querySelector(".signup-container h1");
const forgotPasswordLink = document.getElementById("forgotPasswordLink");
const forgotPasswordContainer = document.getElementById(
  "forgotPasswordContainer",
);
const backToLogin = document.getElementById("backToLogin");
const toggleButtons = document.querySelector(".toggle-buttons");

loginBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
  clientForm.classList.remove("active");
  lawyerForm.classList.remove("active");
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
  userTypeButtons.classList.add("hidden");
  formHeading.textContent = "Login";
});

signupBtn.addEventListener("click", () => {
  loginForm.classList.remove("active");
  clientForm.classList.add("active");
  lawyerForm.classList.remove("active");
  clientBtn.classList.add("active");
  lawyerBtn.classList.remove("active");
  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
  userTypeButtons.classList.remove("hidden");
  formHeading.textContent = "Signup";
});

clientBtn.addEventListener("click", () => {
  clientForm.classList.add("active");
  lawyerForm.classList.remove("active");

  clientBtn.classList.add("active");
  lawyerBtn.classList.remove("active");
});

lawyerBtn.addEventListener("click", () => {
  lawyerForm.classList.add("active");
  clientForm.classList.remove("active");
  lawyerBtn.classList.add("active");
  clientBtn.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", () => {
  loginForm.classList.add("active");
  clientForm.classList.remove("active");
  lawyerForm.classList.remove("active");
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
  userTypeButtons.classList.add("hidden");
  formHeading.textContent = "Login";
});

clientForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(clientForm);
  try {
    const response = await fetch("/api/signup/client", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    alert(result.message);
    if (response.ok) {
      loginBtn.click();
    }
  } catch (err) {
    alert(`Failed to submit form: ${err.message}`);
  }
});

lawyerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(lawyerForm);
  try {
    const response = await fetch("/api/signup/lawyer", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    alert(result.message);
    if (response.ok) {
      loginBtn.click();
    }
  } catch (err) {
    alert(`Failed to submit form: ${err.message}`);
  }
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(loginForm);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      if (result.token) {
        localStorage.setItem("token", result.token);
      }

      if (result.role) {
        localStorage.setItem("role", result.role);
      }

      switch (result.role) {
        case "client":
          window.location.href = result.redirectUrl || "/client.html";
          break;

        case "lawyer":
          window.location.href = result.redirectUrl || "/lawyers.html";
          break;

        case "admin":
          window.location.href = result.redirectUrl || "/admin.html";
          break;

        default:
          userRoleInfo.classList.remove("hidden");
          userRoleInfo.innerHTML = "<h2>Unknown Role</h2>";
      }
    } else {
      alert(result.message || "Login failed. Please try again.");
    }
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
});
document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    fetch("/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        message.textContent = data.message;
        document.getElementById("verifyOtpForm").style.display = "block";
      })
      .catch((error) => {
        message.textContent = "Error: " + error.message;
      });
  });

document
  .getElementById("verifyOtpForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const otp = document.getElementById("otp").value;
    const newPassword = document.getElementById("newPassword").value;
    const otpMessage = document.getElementById("otpMessage");

    fetch("/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp, newPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        otpMessage.textContent = data.message;

        console.log("Response Data:", data);
        if (data.success) {
          console.log("Redirecting to auth.html");
          setTimeout(() => {
            window.location.href = "auth.html";
          }, 1500);
        }
      })
      .catch((error) => {
        otpMessage.textContent = "Error: " + error.message;
        console.error("Error:", error);
      });
  });

forgotPasswordLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("active");
  clientForm.classList.remove("active");
  lawyerForm.classList.remove("active");
  toggleButtons.classList.add("hidden");
  userTypeButtons.classList.add("hidden");
  forgotPasswordContainer.classList.remove("hidden");
  formHeading.textContent = "Forgot Password";
});

backToLogin.addEventListener("click", () => {
  forgotPasswordContainer.classList.add("hidden");
  loginForm.classList.add("active");
  toggleButtons.classList.remove("hidden");
  userTypeButtons.classList.add("hidden");
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
  formHeading.textContent = "Login";
});
