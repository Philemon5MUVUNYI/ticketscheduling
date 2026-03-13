# ticketscheduling

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
# 🚌 Bus Ticket Scheduling System (Frontend)

## 📌 Project Overview

The **Bus Ticket Scheduling System** is a web application that allows users to view available buses, book tickets, and manage their bookings. Administrators can manage buses, schedules, and view all bookings made by users.

This project was built using **Vue.js** as the frontend framework to create a responsive and interactive interface.

---

# 🚀 Features

## 👤 User Features

* View available buses and routes
* Book bus tickets
* View personal booked tickets
* Simple and easy-to-use interface

## 🛠️ Admin Features

* Add new buses
* Update existing bus details
* Delete buses
* View all user bookings
* Export bookings as **PDF**

---

# 🧩 Technologies Used

* **Vue 3**
* **Vite**
* **Pinia (State Management)**
* **Vue Router**
* **JavaScript**
* **HTML5**
* **CSS3**

---

# 📂 Project Structure

```
src
│
├── assets/          # Images and static files
├── components/      # Reusable UI components
├── router/          # Application routes
├── stores/          # Pinia state management
├── views/           # Application pages
│   ├── LandingPage.vue
│   ├── LoginView.vue
│   ├── AdminDashboard.vue
│   ├── UserDashboard.vue
│   ├── ManageBuses.vue
│   ├── BusList.vue
│   ├── MyTickets.vue
│   └── AdminBookings.vue
│
├── App.vue
└── main.js
```

---

# 📸 Application Pages

### Landing Page

Displays system information and allows users to login or explore the system.

### Login Page

Allows users or administrators to log into the system.

### User Dashboard

Users can:

* View buses
* Book tickets
* Manage their tickets

### Admin Dashboard

Admins can:

* Manage buses
* View bookings
* Download booking reports

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ticketscheduling.git
```

### 2️⃣ Navigate into the project

```bash
cd ticketscheduling
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run development server

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

---

# 🌐 Deployment

This project can be deployed using **GitHub Pages**.

Build the project:

```bash
npm run build
```

Deploy:

```bash
npm run deploy
```

---

# 📊 System Functionalities

| Role  | Functionalities                                      |
| ----- | ---------------------------------------------------- |
| User  | View buses, book tickets, manage tickets             |
| Admin | Add buses, update buses, delete buses, view bookings |

---

# 📄 Future Improvements

* Backend integration with **Spring Boot**
* Payment system integration
* Email ticket confirmation
* Seat selection system
* Real-time bus tracking

---

# 👨‍💻 Author

**Philemon Muvunyi**

Frontend Developer
Bus Ticket Scheduling System Project

---

# 📜 License

This project is for **educational purposes**.

