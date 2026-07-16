document.getElementById("search").addEventListener("click", function () {
  window.location.href = "./auth.html";
});
document.getElementById("search").addEventListener("click", function () {
  window.location.href = "./auth.html";
});
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu when a nav item is clicked
document.querySelectorAll("nav a, nav button").forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", () => {
  console.log("clicked");
  nav.classList.toggle("active");
});

// Mobile dropdowns
document.querySelectorAll(".dropdown > a").forEach((item) => {
  item.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.parentElement.classList.toggle("active");
    }
  });
});

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });

  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add("active");

  const navbarHeight = 80;

  const y =
    selectedSection.getBoundingClientRect().top +
    window.pageYOffset -
    navbarHeight;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const ipcContainer = document.getElementById("ipc-container-ipc");
  const searchInput = document.getElementById("search-ipc");
  fetch("ipcs.json")
    .then((response) => response.json())
    .then((data) => {
      displayIPC(data);

      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filteredData = data.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.section.toLowerCase().includes(query) ||
            String(item.Section).includes(query),
        );
        displayIPC(filteredData);
      });
    })
    .catch((error) => {
      ipcContainer.innerHTML = `<p>Error loading data: ${error.message}</p>`;
    });

  function displayIPC(data) {
    ipcContainer.innerHTML = data
      .map(
        (item) => `
        <div class="card-ipc">
          <h2>Section: ${item.section}</h2>
          <p><strong>Name:</strong> ${item.name}</p>
          <p><strong>Description:</strong> ${item.description}</p>
          <p><strong>Punishment:</strong> ${item.punishment}</p>
        </div>`,
      )
      .join("");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const crpcContainer = document.getElementById("crpc-container");
  const searchInput = document.getElementById("search-crpc");
  fetch("crpc.json")
    .then((response) => response.json())
    .then((data) => {
      displayCRPC(data);

      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filteredData = data.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.section.toLowerCase().includes(query),
        );
        displayCRPC(filteredData);
      });
    })
    .catch((error) => {
      ipcContainer.innerHTML = `<p>Error loading data: ${error.message}</p>`;
    });
  function displayCRPC(data) {
    crpcContainer.innerHTML = data
      .map(
        (item) => `
        <div class="card-crpc">
          <h2>Section :${item.section}</h2>
          <p><strong>Name:</strong> ${item.name}</p>
          <p><strong>Description:</strong>${item.description}</p>
         
        </div>`,
      )
      .join("");
  }
});
