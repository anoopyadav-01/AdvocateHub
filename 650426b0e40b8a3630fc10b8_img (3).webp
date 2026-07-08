const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

if (!token || role !== "admin") {
  window.location.href = "auth.html";
}
function showSection(sectionId) {
  document.getElementById("pendingLawyersSection").style.display = "none";
  document.getElementById("allLawyersSection").style.display = "none";
  document.getElementById("allClientsSection").style.display = "none";
  document.getElementById(sectionId).style.display = "block";
}
async function fetchPendingLawyers() {
  const response = await fetch("/api/admin/pending-lawyers");
  const lawyers = await response.json();
  const container = document.getElementById("pendingLawyers");

  container.innerHTML = `
    <table border="1">
        <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Experience</th>
            <th>Practice Area</th>
            <th>Enrollment ID</th> <!-- Added Enrollment ID -->
            <th>Actions</th>
        </tr>
        ${lawyers
          .map(
            (lawyer) => `
                <tr>
                    <td><img src="${lawyer.photo}" alt="Lawyer Photo" width="50" height="50"></td>
                    <td>${lawyer.name}</td>
                    <td>${lawyer.email}</td>
                    <td>${lawyer.phone}</td>
                    <td>${lawyer.experience} years</td>
                    <td>${lawyer.practiceArea}</td>
                    <td>${lawyer.enrollmentId}</td> <!-- Display Enrollment ID -->
                    <td>
                        <button class="btn-approve" onclick="approveLawyer('${lawyer._id}')">Approve</button>
                        <button class="btn-reject" onclick="rejectLawyer('${lawyer._id}')">Reject</button>
                    </td>
                </tr>
            `,
          )
          .join("")}
    </table>
`;
}

async function fetchAllLawyers() {
  const response = await fetch("/api/admin/all-lawyers");
  const lawyers = await response.json();
  const container = document.getElementById("allLawyers");
  container.innerHTML = `
            <table>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Experience</th>
                    <th>Practice Area</th>
                </tr>
                ${lawyers
                  .map(
                    (lawyer) => `
                    <tr>
                        <td><img src="${lawyer.photo}" alt="Lawyer Photo"></td>
                        <td>${lawyer.name}</td>
                        <td>${lawyer.email}</td>
                        <td>${lawyer.phone}</td>
                        <td>${lawyer.experience} years</td>
                        <td>${lawyer.practiceArea}</td>
                    </tr>
                `,
                  )
                  .join("")}
            </table>
        `;
}

async function fetchAllClients() {
  const response = await fetch("/api/admin/all-clients");
  const clients = await response.json();
  const container = document.getElementById("allClients");
  container.innerHTML = `
            <table>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                ${clients
                  .map(
                    (client) => `
                    <tr>
                        <td><img src="${client.photo}" alt="Client Photo"></td>
                        <td>${client.name}</td>
                        <td>${client.email}</td>
                        <td>${client.phone}</td>
                    </tr>
                `,
                  )
                  .join("")}
            </table>
        `;
}

async function approveLawyer(lawyerId) {
  await fetch(`/api/admin/approve-lawyer/${lawyerId}`, {
    method: "PUT",
  });
  alert("Lawyer approved!");
  fetchPendingLawyers();
  fetchAllLawyers();
}

async function rejectLawyer(lawyerId) {
  await fetch(`/api/admin/reject-lawyer/${lawyerId}`, { method: "POST" });
  alert("Lawyer rejected!");
  fetchPendingLawyers();
}

document.addEventListener("DOMContentLoaded", () => {
  fetchPendingLawyers();
  fetchAllLawyers();
  fetchAllClients();
  showSection("pendingLawyersSection");
});

function logout() {
  localStorage.removeItem("token");
  window.location.href = "auth.html";
}
