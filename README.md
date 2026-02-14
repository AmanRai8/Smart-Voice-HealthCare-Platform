# 🩺 SaaS Healthcare Platform


A modern **web-based SaaS healthcare platform** that centralizes healthcare services for patients and administrators. Users can book appointments, manage subscriptions, and interact with an AI voice assistant for healthcare queries.

---

## 🚀 Features

### 1. Modern Landing Page
- Fully responsive UI with gradients and professional 3D illustrations.
- Hero section featuring a friendly 3D healthcare assistant.
- Dedicated sections:
  - How It Works
  - About Platform
  - What to Ask
  - Pricing
  - Contact
- Emergency guidance access.
- Consistent SaaS branding across pages.

---

### 2. Authentication & Role-Based Access
- Secure authentication via **Clerk**:
  - Email & Password
  - Google
  - GitHub
- Email verification via **6-digit OTP**.
- Role-based access control:
  - **Users:** Book, reschedule, cancel appointments, manage profile, use AI.
  - **Admins:** Full system control including analytics and management tools.
- Protected routes (Dashboard, Appointments, Voice, Pro, Admin).

---

### 3. Advanced Appointment Management
- 3-Step Booking Flow:
  1. Select Doctor  
  2. Choose Service & Time  
  3. Confirm Appointment  
- Real-time booked slot handling per doctor & date.
- Appointment statuses:
  - `PENDING`
  - `CONFIRMED`
  - `COMPLETED`
  - `CANCELLED`
- Users can:
  - View upcoming appointments
  - Cancel appointments
  - Reschedule using next 5 available days & time slots
- Admins can:
  - Confirm appointments
  - Mark as completed
  - Cancel or re-open appointments

---

### 4. Admin Dashboard & Analytics
- Comprehensive admin dashboard with:
  - Total doctors
  - Active doctors
  - Total appointments
  - Completed appointments
- Advanced analytics:
  - Appointments trend (last 7 days)
  - Status breakdown (Confirmed, Pending, Completed, Cancelled)
  - Top doctors by bookings
- Search & filter system for appointments.
- Real-time appointment status management.

---

### 5. AI Voice Assistant
- Voice AI powered by **Vapi**.
- Handles user queries about:
  - Booking appointments
  - Subscription plans
  - Doctors & specialties
  - Platform usage
- Designed for healthcare-specific conversations.
- Includes emergency redirection guidance.

---

### 6. Subscription & Billing System
- Basic and Premium subscription plans.
- Secure subscription handling via **Clerk**.
- Smart subscription upgrades.
- Automated invoice notifications via email.
- Billing management inside user profile.

---

### 7. Personalized User Dashboard
- Dynamic greeting based on time of day.
- Profile view button with image preview.
- Upcoming appointment summary.
- Quick access to:
  - Book appointment
  - Voice assistant
  - Subscription management
- Clean and user-friendly interface.

---

### 8. Email & Notification System
- Email system powered by **Resend**.
- Automatic emails for:
  - Appointment confirmations
  - Contact inquiries
  - Subscription-related updates
- Professional email templates with healthcare styling.

---

### 9. Emergency Guidance Section
- Dedicated emergency page.
- Clear guidance for urgent health situations.
- Platform disclaimer for non-emergency services.
- 112 (Nepal) emergency call instruction.

---

### 10. Frontend & Technical Stack
- Built with:
  - **Next.js (App Router)**
  - **React**
  - **Tailwind CSS**
  - **Shadcn UI**
- Data management using **TanStack Query**.
- PostgreSQL database via **Neon**.
- Prisma ORM for database management.
- Clean server/client component architecture.

---

### 11. Responsive & Mobile-First Design
- Dedicated mobile card view for appointments.
- Responsive admin interface.
- Optimized UI interactions across all devices.

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
