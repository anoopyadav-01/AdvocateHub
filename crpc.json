let selectedLawyer = null;
let feedbackLawyerId = null;
let clientData = {};

function openModal(event) {
  const button = event.currentTarget;
  const lawyerData = button.getAttribute("data-lawyer");

  try {
    selectedLawyer = JSON.parse(lawyerData);

    document.getElementById("name").value = clientData.name || "";
    document.getElementById("email").value = clientData.email || "";
    document.getElementById("phone").value = clientData.phone || "";

    document.getElementById("contactFormModal").style.display = "block";
  } catch (error) {
    console.error("Error parsing lawyer data:", error);
  }
}

function closeModal() {
  document.getElementById("contactFormModal").style.display = "none";

  if (selectedLawyer) {
    const feedbackButton = document.getElementById(
      `feedback-${selectedLawyer._id}`,
    );
    if (feedbackButton) {
      feedbackButton.style.display = "block";
    }
  }
}
document
  .getElementById("contactForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const reason = document.getElementById("reason").value;

    if (!selectedLawyer) {
      alert("No lawyer selected!");
      return;
    }

    const response = await fetch("/api/contact-lawyer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientName: name,
        clientEmail: email,
        clientPhone: phone,
        reason,
        lawyerEnrollmentId: selectedLawyer.enrollmentId,
      }),
    });

    const result = await response.json();
    alert(result.message);

    if (response.ok) {
      closeModal();
    }
  });

//feedback

function openFeedbackModal(lawyerId, enrollmentId) {
  feedbackLawyerId = lawyerId;
  document.getElementById("clientFeedbackEnrollmentId").value = enrollmentId;
  document.getElementById("feedbackFormModal").style.display = "block";
}

// Close Feedback Modal
function closeFeedbackModal() {
  document.getElementById("feedbackFormModal").style.display = "none";
}
document
  .getElementById("feedbackForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const feedback = document.getElementById("feedback").value;
    const clientName = document.getElementById("clientFeedbackName").value;
    const clientPhoto = document.getElementById("clientFeedbackPhoto").value;

    if (!feedbackLawyerId) {
      alert("No lawyer selected for feedback!");
      return;
    }

    try {
      const response = await fetch("/api/submit-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lawyerId: feedbackLawyerId,
          feedback,
          clientName,
          clientPhoto,
          createdAt: new Date().toISOString(),
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Feedback submitted successfully!");
        closeFeedbackModal();
      } else {
        alert("Failed to submit feedback: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred while submitting feedback.");
    }
  });

//fetch lawyer and filter

let filters = {
  state: "",
  city: "",
  experience: "",
  language: "",
  practiceArea: "",
};

const MAX_BIO_LENGTH = 100;

async function fetchAndDisplayAdvocates() {
  try {
    const response = await fetch("/api/lawyer");
    const advocates = await response.json();

    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        (!filters.state || advocate.state === filters.state) &&
        (!filters.city || advocate.city === filters.city) &&
        (!filters.experience ||
          Number(advocate.experience) >= Number(filters.experience)) &&
        (!filters.language ||
          (advocate.languages || []).includes(filters.language)) &&
        (!filters.practiceArea ||
          (Array.isArray(advocate.practiceArea)
            ? advocate.practiceArea.includes(filters.practiceArea)
            : advocate.practiceArea
                .split(",")
                .map((area) => area.trim())
                .includes(filters.practiceArea)))
      );
    });

    const container = document.getElementById("lawyersContainer");

    container.innerHTML = filteredAdvocates
      .map((lawyer) => {
        const shortBio =
          lawyer.bio.length > MAX_BIO_LENGTH
            ? lawyer.bio.slice(0, MAX_BIO_LENGTH)
            : lawyer.bio;

        return `
<div class="card">
  <div class="photo">
    <img src="${lawyer.photo}" alt="${lawyer.name}">
  </div>

  <div class="card-content">
    <div class="card-header">${lawyer.name}</div>
    <div class="card-location">${lawyer.city}</div>
    <div class="card-experience">${lawyer.experience} years experience</div>
    <div class="card-state">${lawyer.state}</div>
  </div>

  <div class="third">
    <div class="card-practice">
      <strong>Practice area & skills:</strong><br/>
      ${lawyer.practiceArea}

      <div>
        <strong>Bio:</strong><br/>
        <div class="bio" id="bio-${lawyer._id}">
          ${shortBio}
          ${
            lawyer.bio.length > MAX_BIO_LENGTH
              ? `<span class="ellipsis" onclick="toggleBio('${lawyer._id}', '${lawyer.bio.replace(/'/g, "&apos;")}')">...</span>`
              : ""
          }
        </div>
      </div>
    </div>

    <div class="btns">
      <button
        class="but contact-now"
        data-lawyer='${JSON.stringify(lawyer).replace(/'/g, "&apos;")}'
        onclick="openModal(event)">
        Contact Now
      </button>

      <button
        class="but feedback-now"
        id="feedback-${lawyer._id}"
        style="display:none;"
        onclick="openFeedbackModal('${lawyer._id}', '${lawyer.enrollmentId}')">
        Feedback
      </button>
    </div>
  </div>
</div>
`;
      })
      .join("");
  } catch (error) {
    console.error("Error fetching advocates:", error);
  }
}

function toggleBio(id, fullBio) {
  const bioElement = document.getElementById(`bio-${id}`);
  const shortBio = fullBio.slice(0, MAX_BIO_LENGTH);
  const isShort = bioElement.innerHTML.includes("...");

  if (isShort) {
    bioElement.innerHTML = fullBio;
  } else {
    bioElement.innerHTML =
      shortBio +
      `<span class="ellipsis" onclick="toggleBio('${id}', '${fullBio.replace(
        /'/g,
        "&apos;",
      )}')">
  ...
</span>`;
  }
}

fetchAndDisplayAdvocates();
window.onload = function () {
  fetchclientdata();
};

function fetchclientdata() {
  fetch("/get-clientdata", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      clientData = data;

      document.getElementById("clientname-display").innerText =
        data.name || "N/A";
      document.getElementById("clientemail-display").innerText =
        data.email || "N/A";
      document.getElementById("clientphone-display").innerText =
        data.phone || "N/A";

      document.getElementById("clientname-input").value = data.name || "";
      document.getElementById("clientemail-input").value = data.email || "";
      document.getElementById("clientphone-input").value = data.phone || "";

      document.getElementById("clientFeedbackName").value = data.name || "";
      document.getElementById("clientFeedbackPhoto").value = data.photo || "";

      // Fixing the photo setting issue
      let photoElement = document.getElementById("clientphoto-display");
      if (photoElement && data.photo) {
        photoElement.src = data.photo;
        photoElement.style.display = "block";
      }
    })
    .catch((error) => console.error("Error fetching client data:", error));
}

//upadte client detail
function enableEdit() {
  document.getElementById("clientname-display").style.display = "none";
  document.getElementById("clientname-input").style.display = "inline";

  document.getElementById("clientemail-display").style.display = "none";
  document.getElementById("clientemail-input").style.display = "inline";

  document.getElementById("clientphone-display").style.display = "none";
  document.getElementById("clientphone-input").style.display = "inline";

  document.getElementById("save-btn").style.display = "inline";
}

function saveProfile() {
  const updatedData = {
    name: document.getElementById("clientname-input").value,
    email: document.getElementById("clientemail-input").value,
    phone: document.getElementById("clientphone-input").value,
  };

  fetch("/update-clientdata", {
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

      document.getElementById("clientname-display").innerText =
        updatedData.name;
      document.getElementById("clientemail-display").innerText =
        updatedData.email;
      document.getElementById("clientphone-display").innerText =
        updatedData.phone;

      document.getElementById("clientname-display").style.display = "inline";
      document.getElementById("clientemail-display").style.display = "inline";
      document.getElementById("clientphone-display").style.display = "inline";

      document.getElementById("clientname-input").style.display = "none";
      document.getElementById("clientemail-input").style.display = "none";
      document.getElementById("clientphone-input").style.display = "none";

      document.getElementById("save-btn").style.display = "none";
    })
    .catch((error) => console.error("Error updating client data:", error));
}

document
  .getElementById("clientphoto-display")
  .addEventListener("click", function (event) {
    let infoPanel = document.getElementById("client-info");
    infoPanel.classList.toggle("show");
    event.stopPropagation();
  });

document.addEventListener("click", function (event) {
  let infoPanel = document.getElementById("client-info");
  let profileImage = document.getElementById("clientphoto-display");

  if (!infoPanel.contains(event.target) && event.target !== profileImage) {
    infoPanel.classList.remove("show");
  }
});

document.getElementById("select-state").addEventListener("change", (event) => {
  filters.state = event.target.value;
  fetchAndDisplayAdvocates();
});

document.getElementById("select-city").addEventListener("change", (event) => {
  filters.city = event.target.value;
  fetchAndDisplayAdvocates();
});

document
  .getElementById("select-experience")
  .addEventListener("change", (event) => {
    filters.experience = event.target.value;
    fetchAndDisplayAdvocates();
  });

document
  .getElementById("select-language")
  .addEventListener("change", (event) => {
    filters.language = event.target.value;
    fetchAndDisplayAdvocates();
  });

document.getElementById("practice-area").addEventListener("change", (event) => {
  filters.practiceArea = event.target.value;
  fetchAndDisplayAdvocates();
});
document.querySelector(".reset-btn").addEventListener("click", () => {
  filters = {
    state: "",
    city: "",
    experience: "",
    language: "",
    practiceArea: "",
  };

  document.getElementById("select-state").selectedIndex = 0;
  document.getElementById("select-city").selectedIndex = 0;
  document.getElementById("select-experience").selectedIndex = 0;
  document.getElementById("select-language").selectedIndex = 0;
  document.getElementById("practice-area").selectedIndex = 0;

  fetchAndDisplayAdvocates();
});

fetchAndDisplayAdvocates();
document.getElementById("logoutBtn").addEventListener("click", function () {
  fetch("/api/logout", {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .then(() => {
      localStorage.clear();
      sessionStorage.clear();
      window.location.replace("index.html");
    })
    .catch((err) => {
      console.error("Logout failed", err);
      alert("Logout failed. Please try again.");
    });
});
