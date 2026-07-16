function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");
}
window.onload = function () {
  fetchlawyerdata();
};

function fetchlawyerdata() {
  fetch("/api/lawyer/get-lawyerdata", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data || !data.enrollmentId) {
        console.error("Enrollment ID not found");
        return;
      }

      document.getElementById("lawyername-display").innerText =
        data.name || "N/A";
      document.querySelector(".adv-name").innerText =
        "Adv. " + (data.name || "");
      document.getElementById("lawyeremail-display").innerText =
        data.email || "N/A";
      document.getElementById("lawyerphone-display").innerText =
        data.phone || "N/A";
      document.getElementById("lawyerexperience-display").innerText =
        data.experience || "N/A";
      document.getElementById("lawyerpracticeArea-display").innerText =
        data.practiceArea || "N/A";
      document.getElementById("lawyerbio-display").innerText =
        data.bio || "N/A";

      document.getElementById("lawyername-input").value = data.name || "";
      document.getElementById("lawyeremail-input").value = data.email || "";
      document.getElementById("lawyerphone-input").value = data.phone || "";
      document.getElementById("lawyertexperience-input").value =
        data.experience || "";
      document.getElementById("lawyerpracticeArea-input").value =
        data.practiceArea || "";
      document.getElementById("lawyerbio-input").value = data.bio || "";

      if (data.photo) {
        let photoElement = document.getElementById("clientphoto-display");
        photoElement.src = data.photo;
        photoElement.style.display = "block";
      }

      fetchLawyerFeedback(data.enrollmentId);
      fetchNotifications(data.enrollmentId);
    })
    .catch((error) => console.error("Error fetching client data:", error));
}

document
  .getElementById("clientphoto-display")
  .addEventListener("click", function () {
    let infoPanel = document.getElementById("lawyer-info");
    infoPanel.classList.toggle("show");
  });

function enablebioupate() {
  const bioDisplay = document.getElementById("lawyerbio-display");
  const bioInput = document.getElementById("lawyerbio-input");
  const saveBtn = document.getElementById("save-bio");
  const updateBtn = document.getElementById("update-bio");

  bioInput.style.display = "block";
  saveBtn.style.display = "inline";
  bioInput.value = bioDisplay.innerText;
  bioDisplay.style.display = "none";
}

function enableEdit() {
  document.getElementById("lawyername-display").style.display = "none";
  document.getElementById("lawyername-input").style.display = "inline";

  document.getElementById("lawyeremail-display").style.display = "none";
  document.getElementById("lawyeremail-input").style.display = "inline";

  document.getElementById("lawyerphone-display").style.display = "none";
  document.getElementById("lawyerphone-input").style.display = "inline";

  document.getElementById("lawyerexperience-display").style.display = "none";
  document.getElementById("lawyertexperience-input").style.display = "inline";

  document.getElementById("lawyerpracticeArea-display").style.display = "none";
  document.getElementById("lawyerpracticeArea-input").style.display = "inline";

  document.querySelector("button[onclick='enableEdit()']").style.display =
    "none";
  document.getElementById("save-btn").style.display = "inline";
}

function saveProfile() {
  const updatedData = {
    name: document.getElementById("lawyername-input").value,
    email: document.getElementById("lawyeremail-input").value,
    phone: document.getElementById("lawyerphone-input").value,
    experience: document.getElementById("lawyertexperience-input").value,
    practiceArea: document.getElementById("lawyerpracticeArea-input").value,
    bio: document.getElementById("lawyerbio-input").value,
  };

  fetch("/api/lawyer/update-lawyerdata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Profile updated successfully!");

      document.getElementById("lawyername-display").innerText =
        updatedData.name;
      document.getElementById("lawyeremail-display").innerText =
        updatedData.email;
      document.getElementById("lawyerphone-display").innerText =
        updatedData.phone;
      document.getElementById("lawyerexperience-display").innerText =
        updatedData.experience;
      document.getElementById("lawyerpracticeArea-display").innerText =
        updatedData.practiceArea;
      document.getElementById("lawyerbio-display").innerText = updatedData.bio;

      // Show Display & Hide Input Fields
      document.getElementById("lawyername-display").style.display = "inline";
      document.getElementById("lawyeremail-display").style.display = "inline";
      document.getElementById("lawyerphone-display").style.display = "inline";
      document.getElementById("lawyerexperience-display").style.display =
        "inline";
      document.getElementById("lawyerpracticeArea-display").style.display =
        "inline";
      document.getElementById("lawyerbio-display").style.display = "inline";

      document.getElementById("lawyername-input").style.display = "none";
      document.getElementById("lawyeremail-input").style.display = "none";
      document.getElementById("lawyerphone-input").style.display = "none";
      document.getElementById("lawyertexperience-input").style.display = "none";
      document.getElementById("lawyerpracticeArea-input").style.display =
        "none";
      document.getElementById("lawyerbio-input").style.display = "none";

      // Hide Save button & Show Update button
      document.getElementById("save-btn").style.display = "none";
      document.querySelector("button[onclick='enableEdit()']").style.display =
        "inline";
    })
    .catch((error) => console.error("Error updating client data:", error));
}

function fetchLawyerFeedback(enrollmentId) {
  fetch(`/api/get-feedbacks/${enrollmentId}`)
    .then((response) => response.json())
    .then((feedbacks) => {
      const feedbackSection = document.getElementById("feedbacks");
      feedbackSection.innerHTML = "";

      if (feedbacks.length === 0) {
        feedbackSection.innerHTML = "<p>No feedback available</p>";
        return;
      }

      feedbacks.forEach((feedback, index) => {
        const feedbackDiv = document.createElement("div");
        feedbackDiv.classList.add("feedback-entry");
        feedbackDiv.style.animationDelay = `${index * 0.2}s`;

        feedbackDiv.innerHTML = `
      <div class="feedback-container">
          <img src="${
            feedback.clientPhoto
          }" alt="Client Photo" class="feedback-img">
          <div class="client-info">
            <p class="client-name">${feedback.clientName}</p>
            <small class="feedback-time">${new Date(
              feedback.createdAt,
            ).toLocaleString()}</small>
          </div>
          <p class="feedback-text">${feedback.feedback}</p>
      </div>
    `;

        feedbackSection.appendChild(feedbackDiv);
      });
    })
    .catch((error) => console.error("Error fetching feedback:", error));
}

async function fetchNotifications(enrollmentId) {
  try {
    const response = await fetch(`/api/lawyer/notifications/${enrollmentId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch notifications");
    }
    const notifications = await response.json();
    console.log("Fetched Notifications:", notifications);

    const container = document.getElementById("clientrequest");
    if (notifications.length === 0) {
      container.innerHTML = "<p>No client requests available</p>";
      return;
    }

    container.innerHTML = notifications
      .map(
        (notification) => `
      <div class="notification">
        <p><strong>Client Name:</strong> ${notification.clientName}</p>
        <p><strong>Email:</strong> ${notification.clientEmail}</p>
        <p><strong>Phone:</strong> ${notification.clientPhone}</p>
        <p><strong>Reason:</strong> ${notification.reason}</p>
        <div class="notification-buttons">
          <button onclick="acceptRequest('${notification._id}', '${notification.clientEmail}')">
            Accept
          </button>
          <button onclick="rejectRequest('${notification._id}')">Reject</button>
        </div>
      </div>
    `,
      )
      .join("");
  } catch (error) {
    console.error("Error fetching notifications:", error);
  }
}
async function getLoggedInLawyerEnrollmentId() {
  const res = await fetch("/api/lawyer/get-lawyerdata", {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();
  return data.enrollmentId;
}

async function acceptRequest(notificationId, clientEmail) {
  try {
    // Accept the request first
    const acceptResponse = await fetch(
      `/api/notifications/accept/${notificationId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientEmail }),
      },
    );

    if (!acceptResponse.ok) {
      alert("Failed to accept request.");
      return;
    }

    const emailResponse = await fetch("/api/send-acceptance-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientEmail,
        enrollmentId: await getLoggedInLawyerEnrollmentId(),
      }),
    });

    if (emailResponse.ok) {
      alert("Request accepted and email sent to client.");
      location.reload();
    } else {
      alert("Request accepted, but failed to send email.");
    }
  } catch (error) {
    console.error("Error processing acceptance:", error);
  }
}

async function rejectRequest(notificationId, clientEmail) {
  try {
    const rejectResponse = await fetch(
      `/api/notifications/reject/${notificationId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientEmail }),
      },
    );

    if (!rejectResponse.ok) {
      alert("Failed to reject request.");
      return;
    }

    const emailResponse = await fetch("/api/send-rejection-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientEmail,
        enrollmentId: await getLoggedInLawyerEnrollmentId(),
      }),
    });

    if (emailResponse.ok) {
      alert("Request rejected and email sent to client.");
      location.reload();
    } else {
      alert("Request rejected, but failed to send rejection email.");
    }
  } catch (error) {
    console.error("Error rejecting request:", error);
  }
}

document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    await fetch("logout", {
      method: "POST",
      credentials: "include",
    });
    localStorage.removeItem("user");
    window.location.replace("index.html");
  } catch (err) {
    console.error(err);
  }
});
