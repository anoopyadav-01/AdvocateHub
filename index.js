/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body Styling */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #0e1126;
}

/* Navbar */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

/* HERO SECTION */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  width: 100%;
  background: #0f172a;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}

.navbar {
  width: 100%;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  align-items: center;
}

/* Logo */
.logo img {
  margin-top: 10px;
  height: 60px;
  cursor: pointer;
  border-radius: 100px;
}

/* Navigation */
nav ul {
  display: flex;
  gap: 25px;
  list-style: none;
  align-items: center;
}

nav ul li {
  position: relative;
}

/* Main Links */
nav ul li > a {
  text-decoration: none;
  color: white;
  font-size: 19px;
  padding: 12px 18px; /* slightly increased */
  display: block;
  border-radius: 6px;
  transition: all 0.3s ease;
}

nav ul li > a:hover {
  color: #d4af37;
}

/* Dropdown */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: auto;
  background: white;
  list-style: none;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  z-index: 10000;
}

/* Show dropdown */
.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li a,
.dropdown-menu button {
  display: block;
  width: 100%;
  padding: 14px 18px; /* slightly increased */
  text-decoration: none;
  color: #333;
  background: white;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.3s ease;
}

/* Dropdown hover */
.dropdown-menu li a:hover,
.dropdown-menu button:hover {
  background: #d4af37;
  color: #0f172a;
  padding-left: 15px; /* smooth slide effect */
}
/* Login Button */
.auth {
  background: #d4ce08;
  color: white !important;
  padding: 12px 22px !important;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.auth:hover {
  transform: translateY(-2px);
}

/* Mobile */
/* Hide hamburger on desktop */
.menu-toggle {
  display: none;
}
@media (max-width: 768px) {
  .navbar {
    padding: 15px 20px;
    position: relative;
  }

  .menu-toggle {
    display: block;
    font-size: 32px;
    color: white;
    cursor: pointer;
  }

  nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #0f172a;
    z-index: 9999;
    height: auto;
  }

  nav.active {
    display: block;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0;
  }

  nav ul li {
    width: 100%;
    text-align: center;
  }

  nav ul li > a {
    padding: 18px;
    width: 100%;
  }

  .dropdown-menu {
    position: static;
    display: none;
    width: 100%;
    background: #1e293b;
    box-shadow: none;
    border-radius: 0;
  }

  .dropdown.active .dropdown-menu {
    display: block;
  }

  .dropdown-menu button {
    color: white;
    background: #1e293b;
    text-align: center;
  }

  .dropdown-menu button:hover {
    background: #334155;
    color: #d4af37;
  }
}
.hero-section {
  position: relative;
  height: 100vh;
  width: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.serchlawyar {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1100px;
  z-index: 10;
}

.filter-container {
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.mainh1 {
  width: 100%;
  text-align: center;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 15px;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.mainh1::after {
  content: "";
  display: block;
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, #d4af37, #f4d03f);
  margin: 15px auto 0;
  border-radius: 10px;
}

.filter-container select {
  flex: 1;
  min-width: 220px;
  padding: 16px 20px;
  border: none;
  outline: none;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.95);
  transition: 0.3s;
}

.filter-container select:hover {
  transform: translateY(-3px);
  border-color: #d4af37;
  box-shadow:
    0 12px 25px rgba(0, 0, 0, 0.15),
    0 0 15px rgba(212, 175, 55, 0.25);
}

.filter-container select:focus {
  outline: none;
  border-color: #d4af37;
  box-shadow:
    0 0 0 4px rgba(212, 175, 55, 0.25),
    0 12px 25px rgba(0, 0, 0, 0.15);
}

.filter-container select option {
  background: #0f172a;
  color: white;
  font-size: 16px;
  padding: 12px;
}

#search {
  padding: 16px 35px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #111;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  min-width: 170px;
}

#search:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.5);
}

@media (max-width: 768px) {
  .mainh1 {
    font-size: 2rem;
  }

  .filter-container {
    padding: 25px;
  }

  .filter-container select,
  #search {
    width: 100%;
  }
}

.mainh1 {
  color: white;
  text-align: center;
  font-size: 36px;
}

.howitwork {
  padding: 90px 8%;
  background: linear-gradient(135deg, #0f172a, #1e293b);
}

.mainseach {
  text-align: center;
  margin-bottom: 80px;
}

.mainseach h1 {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  position: relative;
}

.mainseach h1::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -18px;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: #d4af37;
  border-radius: 20px;
}

.dives {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  position: relative;
}

.dives::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 10%;
  width: 80%;
  height: 2px;
  background: rgba(212, 175, 55, 0.4);
  z-index: 0;
}

.dives > div {
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 1;
}

.dives img {
  width: 80px;
  height: 80px;
  padding: 18px;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  border: 2px solid #d4af37;
  border-radius: 50%;
  margin-bottom: 25px;
  transition: all 0.3s ease;
}

.dives > div:hover img {
  transform: translateY(-8px) scale(1.1);
  background: #d4af37;
}

.dives p {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  font-size: 16px;
  max-width: 240px;
  margin: auto;
}
/* Tablet */
@media (max-width: 1024px) {
  .dives {
    gap: 20px;
  }

  .dives p {
    font-size: 15px;
    max-width: 200px;
  }

  .dives img {
    width: 70px;
    height: 70px;
    padding: 15px;
  }
}

@media (max-width: 768px) {
  .dives {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .dives::before {
    display: none;
  }

  .dives > div {
    width: 100%;
    max-width: 350px;
  }

  .dives img {
    width: 65px;
    height: 65px;
    padding: 14px;
    margin-bottom: 15px;
  }

  .dives p {
    font-size: 15px;
    max-width: 100%;
    padding: 0 15px;
  }

  .mainseach h1 {
    font-size: 2rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .dives {
    gap: 30px;
  }

  .dives img {
    width: 55px;
    height: 55px;
    padding: 12px;
  }

  .dives p {
    font-size: 14px;
    line-height: 1.6;
  }

  .mainseach h1 {
    font-size: 1.6rem;
  }
}
.dives img {
  width: 75px;
  height: 75px;
  margin-bottom: 20px;
  transition: 0.3s ease;
}

.dives > div:hover img {
  transform: scale(1.1);
}

/* Text */
.feature h3 {
  color: white;
}
.dives p {
  font-size: 16px;
  line-height: 1.8;
  font-weight: 500;
}

.topreated {
  padding: 80px 8%;
  background: #f5f7fb;
}

.topreated h1 {
  text-align: center;
  font-size: 3rem;
  color: #0f172a;
  margin-bottom: 50px;
}

.carousel {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 20px;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.lawyer-card {
  min-width: 320px;
  max-width: 320px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.lawyer-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.lawyer-card img {
  width: 100%;
  border-radius: 10px;
  height: 250px;
  object-fit: cover;
}

.lawyer-info {
  padding: 20px;
}

.lawyer-info h3 {
  color: #0f172a;
  margin-bottom: 15px;
  padding: 0px 19px;
  font-size: 22px;
}

.lawyer-info p {
  color: #475569;
  font-size: 15px;
  padding: 5px 20px;
}

.lawyer-info button {
  width: 100%;
  margin-top: 18px;
  border: none;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #111;
  padding: 14px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.lawyer-info button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
}
/*15*/
.bottom {
  background-color: #1a1a1a;
  color: #f9f9f9;
  padding: 40px 20px;
}
/* Tablet */
@media (max-width: 768px) {
  .carousel {
    display: flex;
    overflow-x: auto;
    gap: 15px;
    scroll-snap-type: x mandatory;
    padding-bottom: 10px;
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }

  .lawyer-card {
    flex: 0 0 calc(50% - 8px); /* 2 cards visible */
    min-width: calc(50% - 8px);
    max-width: calc(50% - 8px);
    scroll-snap-align: start;
  }

  .lawyer-card img {
    height: 180px;
  }
}
@media (max-width: 480px) {
  .lawyer-card {
    flex: 0 0 48%;
    min-width: 48%;
    max-width: 48%;
  }

  .lawyer-card img {
    height: 150px;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  flex: 1;
  min-width: 200px;
  margin: 0 10px;
}

.footer-column h3 {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #f1c40f;
  text-transform: uppercase;
  border-bottom: 2px solid #f1c40f;
  display: inline-block;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin: 10px 0;
}

.footer-column ul li a {
  text-decoration: none;
  color: #f9f9f9;
  font-size: 1em;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: #f1c40f;
}

.footer-column img {
  max-width: 300px;
  margin-top: 50px;
  border-radius: 20px;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  border-top: 1px solid #333;
  padding-top: 20px;
  font-size: 0.9em;
  color: #bbb;
}

.footer-bottom .footerpara {
  margin: 5px 0;
  color: #f9f9f9;
  font-size: 1em;
  font-weight: 100;
}

.footer-bottom a {
  color: #f1c40f;
  text-decoration: none;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
  }

  .footer-column {
    margin-bottom: 20px;
    text-align: center;
  }

  .footer-column img {
    margin: 0 auto;
  }
}

h1,
h4 {
  color: #2d3e50;
}
.aboutthis {
  padding: 90px 8%;
  background: linear-gradient(135deg, #0f172a, #1e293b);
}

.mainhd h1 {
  text-align: center;
  color: white;
  font-size: 3rem;
  margin-bottom: 70px;
  position: relative;
}

.mainhd h1::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -18px;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: #d4af37;
  border-radius: 10px;
}

.stats-container {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  flex-wrap: wrap;
}

.stat-item {
  flex: 1;
  min-width: 220px;
  text-align: center;
  padding: 30px 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.3s;
}

.stat-item:hover {
  transform: translateY(-8px);
  border-color: #d4af37;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}

.icon {
  font-size: 50px;
  margin-bottom: 15px;
}

.stat-item h2 {
  font-size: 3rem;
  color: #d4af37;
  margin-bottom: 10px;
}

.stat-item p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 18px;
}

@media (max-width: 768px) {
  .mainhd h1 {
    font-size: 2rem;
  }

  .stats-container {
    flex-direction: column;
  }

  .stat-item h2 {
    font-size: 2.5rem;
  }
}

.aboutcontainer a {
  color: #0078d7;
  text-decoration: none;
}
.container a:hover {
  text-decoration: underline;
}
.steps {
  background-color: #f9f9f9;
  margin: 10px 0;
  border-radius: 5px;
}

.mainseach {
  margin-top: 0;
}

/*ipc css*/
.header-ipc {
  padding: 10px 0;
  text-align: center;
  position: relative;
  z-index: 1;
}

.header-ipc h1 {
  margin: 0;
  font-size: 2rem;
  color: white;
}

.search-section-ipc {
  margin: 20px auto;
  text-align: center;
}
.search-section-ipc h1 {
  color: white;
  margin: 20px;
}
#search-ipc {
  width: 80%;
  max-width: 500px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.ipc-container-ipc {
  max-width: 900px;
  margin: 20px auto;
  padding: 10px;
}

.card-ipc {
  background: #bd9595;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-ipc h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #2c3e50;
  text-align: left;
  margin-top: 0;
}

.card-ipc p {
  margin-bottom: 5px;
  margin-top: 0;
  text-align: left;
  background: rgb(209, 197, 197);
  padding: 8px;
  border-radius: 11px;
}

/*ipc css*/
.header-ipc {
  background: #2c3e50;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  margin-top: 6%;
}

.header-ipc h1 {
  margin: 0;
  font-size: 2rem;
}

.search-section-crpc {
  margin: 20px auto;
  text-align: center;
}

.search-section-crpc h1 {
  color: white;
  margin: 20px;
}

#search-crpc {
  width: 80%;
  max-width: 500px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.crpc-container {
  max-width: 900px;
  margin: 20px auto;
  padding: 10px;
}

.card-crpc {
  background: #bd9595;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-crpc h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #2c3e50;
  text-align: left;
  margin-top: 0;
}

.card-crpc p {
  margin-bottom: 5px;
  margin-top: 0;
  text-align: left;
  background: rgb(209, 197, 197);
  padding: 8px;
  border-radius: 11px;
}

/* css ->about */

#about {
  margin-bottom: 40px;
  margin-top: 21px;
}
.section-title {
  text-align: center;
  margin-bottom: 70px;
}

.section-title h1 {
  font-size: 3.5rem;
  margin-bottom: 15px;
  color: white;
}

.section-title p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
}

.section-title h1::after {
  content: "";
  display: block;
  width: 120px;
  height: 4px;
  background: #d4af37;
  margin: 15px auto 0;
  border-radius: 20px;
  top: -10px;
}

.about-content {
  display: grid;
  gap: 30px;
  margin-bottom: 90px;
}

.about-card {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 20px;
  padding: 35px;
  transition: 0.3s;
}

.about-card:hover {
  transform: translateY(-10px);

  border-color: #d4af37;
}

.about-card h2 {
  color: #d4af37;
  margin-bottom: 15px;
}

.about-card p {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
}

.how-work {
  text-align: center;
  margin-bottom: 90px;
}

.how-work h2 {
  color: #d4af37;
  font-size: 2.7rem;
  margin-bottom: 60px;
}

.steps {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.step {
  flex: 1;
  min-width: 250px;
  max-width: 350px;
}

.step span {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 50%;
  background: #d4af37;
  color: #08152f;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 25px;
}

.step h3 {
  margin-bottom: 15px;
}

.step p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
}

.join-us {
  text-align: center;
}

.join-us h2 {
  color: #d4af37;
  font-size: 2.3rem;
  margin-bottom: 20px;
}

.join-us p {
  max-width: 700px;
  margin: auto;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 35px;
}

.about-btn {
  display: inline-block;
  padding: 15px 40px;
  background: #d4af37;
  color: #08152f;
  text-decoration: none;
  font-weight: 700;
  border-radius: 50px;
  transition: 0.3s;
}
.about-content {
  display: grid;
  gap: 30px;
  margin-bottom: 54px;
  margin-left: 100px;
  margin-right: 100px;
}
.about-btn:hover {
  background: #e8c85a;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .section-title h1 {
    font-size: 2.3rem;
  }

  .how-work h2 {
    font-size: 2rem;
  }

  .steps {
    flex-direction: column;
    align-items: center;
  }
}

/*contact css*/
.hero-banner {
  background-color: #343649; /* Exact Slack Purple */
  color: #ffffff;
  text-align: center;
  padding: 64px 24px 180px 24px; /* Deep bottom padding to accommodate overlapping card */
  position: relative;
}

.hero-banner h1 {
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 40px;
  letter-spacing: -1px;
  color: white;
  position: relative;
  display: inline-block;
  margin-top: -20px;
}
.hero-banner h1:after {
  content: "";
  position: absolute;
  left: 50px;
  bottom: -9px;
  width: 50%;
  height: 4px;
  background: #d4af37;
  border-radius: 5px;
}
.hero-banner p {
  font-size: 16px;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto 12px auto;
  color: rgba(255, 255, 255, 0.9);
}

.hero-banner p strong {
  color: #ffffff;
}

/* --- Centered Form Card --- */
.containermkk {
  max-width: 640px;
  margin: -120px auto 60px auto; /* Pulls the card up into the purple header */
  position: relative;
  padding: 0 20px;
}

.contact-card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 40px;
}

/* --- Form Element Framework --- */
.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1d1c1d;
}

.form-group input[type="email"],
.form-group input[type="text"],
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;
  border: 1px solid #868686;
  border-radius: 4px;
  color: #1d1c1d;
  transition: border-color 0.15s ease-in-out;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #1264a3; /* Slack blue focus outline */
  box-shadow: 0 0 0 3px rgba(18, 100, 163, 0.15);
}

/* Native Placeholder style matching screenshot */
::placeholder {
  color: #b0b0b0;
  opacity: 1;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

/* --- CTA Button & Links --- */
.btn-submit {
  background-color: #611f69; /* Slightly brighter button purple */
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.btn-submit:hover {
  background-color: #4a154b;
}

.privacy-link {
  display: inline-block;
  margin-top: 24px;
  font-size: 14px;
  color: #1264a3;
  text-decoration: none;
}

.privacy-link:hover {
  text-decoration: underline;
}

/* term css*/

#termuse {
  min-height: 100vh;
  padding: 120px 20px 60px;
}

/* Main Card */

.aboutcontainer {
  max-width: 1100px;
  margin: auto;
  padding: 50px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.35),
    0 0 20px rgba(212, 175, 55, 0.08);
  transition: all 0.3s ease;
}

.aboutcontainer:hover {
  transform: translateY(-4px);
}

.aboutcontainer h2 {
  color: #ffffff;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.aboutcontainer h2::after {
  content: "";
  display: block;
  width: 130px;
  height: 4px;
  margin: 15px auto 0;
  border-radius: 10px;
  background: linear-gradient(90deg, #d4af37, #f7e27b);
}

.aboutcontainer h3 {
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 35px;
  margin-bottom: 20px;
  padding-left: 18px;
  position: relative;
}

.aboutcontainer h3::before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  width: 5px;
  height: 24px;
  border-radius: 10px;
  background: #d4af37;
}

.aboutcontainer h3::after {
  content: "";
  left: 18px;
  bottom: -8px;
  width: 90px;
  height: 2px;
  background: rgba(212, 175, 55, 0.7);
}

.para {
  color: #d1d5db;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.9;
  text-align: justify;
  margin-bottom: 20px;
}

.para strong {
  color: #ffffff;
  font-weight: 700;
  margin-right: 5px;
}

.contact-link {
  color: #d4af37;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.contact-link:hover {
  color: #f7e27b;
  border-bottom: 1px solid #f7e27b;
}

.aboutcontainer ul {
  padding-left: 20px;
}

.aboutcontainer li {
  color: #d1d5db;
  margin-bottom: 10px;
  line-height: 1.8;
}

@media (max-width: 992px) {
  .aboutcontainer {
    padding: 35px;
  }

  .aboutcontainer h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  #termuse {
    padding: 100px 15px 40px;
  }

  .aboutcontainer {
    padding: 25px;
    border-radius: 16px;
  }

  .aboutcontainer h2 {
    font-size: 2rem;
  }

  .aboutcontainer h3 {
    font-size: 1.2rem;
  }

  .para {
    font-size: 15px;
    line-height: 1.8;
  }
}

@media (max-width: 480px) {
  .aboutcontainer h2 {
    font-size: 1.7rem;
  }

  .aboutcontainer h3 {
    font-size: 1.1rem;
  }

  .para {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  body {
    padding: 24px 12px;
  }

  .aboutcontainer {
    padding: 30px 24px;
    border-radius: 8px;
  }

  h1 {
    font-size: 26px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 18px;
    margin-top: 28px;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
  }
}
