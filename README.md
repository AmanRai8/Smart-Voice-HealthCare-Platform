# 🩺 SaaS Healthcare Platform


A modern **web-based SaaS healthcare platform** that centralizes healthcare services for patients and administrators. Users can book appointments, manage subscriptions, and interact with an AI voice assistant for healthcare queries.

---

## 🚀 Features

### 1. Modern Landing Page
- Responsive UI with gradients and professional 3D illustrations.
- Hero section featuring a friendly 3D healthcare assistant.
- Informative sections: platform features, subscription plans, and “What to Ask”.

### 2. Authentication & Authorization
- Sign up / Sign in with Email, Google, or GitHub.
- Email verification via 6-digit OTP.
- Role-based access:
  - **Regular Users:** Book appointments, use AI assistant, view subscriptions.
  - **Admins:** Full dashboard access to manage users, appointments, and analytics.

### 3. Appointment Booking System
- 3-step booking flow: Select doctor → Choose service & time → Confirm booking.
- Confirmation emails sent automatically.
- Users can view upcoming appointments in their dashboard.
- Admins can view all appointments in the admin panel.

### 4. AI Voice Agent
- Interactive AI assistant powered by **Vapi**.
- Handles queries about:
  - Appointments
  - Pricing & subscriptions
  - Doctors & specialties
  - Health guidance

### 5. Subscription Management
- Basic & Premium plans.
- Automated invoice generation via email.
- Smart plan upgrades for seamless subscription changes.

### 6. Notifications
- Email notifications via **Resend** for:
  - Booking confirmations
  - Contact inquiries
  - Subscription updates

### 7. Dashboard
- Personalized dashboard showing:
  - Welcome message
  - Upcoming appointments
  - Activity overview
  - Quick access to key actions

### 8. Admin Features
- Separate admin dashboard for managing:
  - Users
  - Appointments
  - Platform analytics

### 9. Frontend & UI
- Built with **React**, **Next.js**, **Tailwind CSS**, and **Shadcn UI**.
- Smooth interactions using **TanStack Query**.
- Consistent 3D illustration theme for hero, About, and WhatToAsk sections.

---

## 🛠️ Tech Stack

### **Core Technologies**

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?logo=tailwind-css&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?logo=shadcnui&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)
![Neon](https://img.shields.io/badge/Neon-00E599?logo=neon&logoColor=white)

### **Auth, Billing & AI**

![Clerk](https://img.shields.io/badge/Clerk-5A67D8?logo=clerk&logoColor=white)
![Vapi](https://img.shields.io/badge/Vapi_AI-111827?logo=voice&logoColor=white)

### **Developer Tools**

![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-000000?logo=github&logoColor=white)
![CodeRabbit](https://img.shields.io/badge/CodeRabbit-A855F7?logo=github&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?logo=react-query&logoColor=white)

---


## 🎯 Target Users

- Patients / Healthcare consumers
- Administrators

---

## 🔒 Security
- Role-based access control ensures data privacy.
- Secure authentication with Clerk and email verification.

---

## 📧 Automated Emails
- Appointment confirmations
- Subscription invoices
- Contact inquiries

---

## ⚡ Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn
- PostgreSQL or Neon database
- Clerk account for authentication
- Resend account for email services

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/saas-healthcare-platform.git
cd saas-healthcare-platform

# Install dependencies
npm install

#Create .env file and add your environment variables
#Example .env:
 DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
 CLERK_FRONTEND_API="your_clerk_frontend_api"
 CLERK_API_KEY="your_clerk_api_key"
 RESEND_API_KEY="your_resend_api_key"
 VAPI_API_KEY="your_vapi_api_key"
 NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# Optional: Seed the database
npm run seed

# Run development server
npm run dev

```

---

## 📬 Contributing

PRs are welcome!
CodeRabbit assists with automated PR review & optimization.
