<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Panel</title>
    <link rel="stylesheet" href="./admin.css" />
    <script src="./admin.js"></script>
  </head>
  <body>
    <div class="main-div">
      <div class="navbar">
        <img class="logo" src="./All_logos/advocate.png" alt="Logo" />
        <button class="nanvbar-button" onclick="logout()">Logout</button>
      </div>
    </div>

    <div class="buttons">
      <button onclick="showSection('pendingLawyersSection')">
        Pending Lawyers
      </button>
      <button onclick="showSection('allLawyersSection')">All Lawyers</button>
      <button onclick="showSection('allClientsSection')">All Clients</button>
    </div>

    <div class="content">
      <div id="pendingLawyersSection" class="section">
        <h2>Pending Lawyers</h2>
        <div id="pendingLawyers"></div>
      </div>

      <div id="allLawyersSection" class="section">
        <h2>All Lawyers</h2>
        <div id="allLawyers"></div>
      </div>

      <div id="allClientsSection" class="section">
        <h2>All Clients</h2>
        <div id="allClients"></div>
      </div>
    </div>
  </body>
</html>
