# 📊 Freelance Dashboard

A **multi-page freelance client dashboard** built with **React, Tailwind CSS, React Router, Chart.js, and Framer Motion**.  
This project helps freelancers manage projects, deadlines, earnings, and tasks with a **clean, responsive, and modern interface**.  

---

## 🚀 Features

- **Overview Page**  
  - Summary cards (Total Projects, Earnings, Tasks Due)  
  - Recent activity feed  
  - Simple stats & charts  

- **Projects Page**  
  - Table view of projects with **name, status, and deadline**  
  - Status badges with color codes (Completed ✅, In Progress 🟡, Pending ⏳)  
  - **New Project Modal Form** to add projects dynamically  

- **Profile Settings Page (Optional)**  
  - Placeholder for updating profile info (Name, Email, Password)  

- **Additional Features**  
  - Responsive design (works on desktop & mobile)  
  - Sidebar & top header consistent across pages  
  - **Chart.js** for data visualization  
  - **Notification dropdown** (mock activity feed)  
  - Smooth animations using **Framer Motion**  

---

## 🛠️ Tech Stack

- **React.js** – UI & component structure  
- **React Router** – Multi-page navigation without reload  
- **Tailwind CSS** – Modern utility-first styling  
- **Chart.js / Recharts** – Data visualization  
- **Framer Motion** – Animations & transitions  

---

## 📂 Project Structure

freelance-dashboard/
├── src/
│ ├── components/ # Reusable components (Sidebar, Header, Cards, etc.)
│ ├── pages/ # Multi-page views (Overview, Projects, Profile)
│ ├── App.jsx # Main app with routing
│ ├── index.css # Tailwind styles
│ └── main.jsx # React entry point


---

## ⚡ Installation & Setup

```bash
# 1️⃣ Clone the repo
git clone https://github.com/your-username/freelance-dashboard.git

# 2️⃣ Navigate to project folder
cd freelance-dashboard

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run the development server
npm run dev
