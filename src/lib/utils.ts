import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}

export const formatPhoneNumber = (value: string) => {
  if (!value) return value;


  let digits = value.replace(/\D/g, "");

 
  if (digits.startsWith("977")) {
    digits = digits.slice(3);
  }

  
  digits = digits.slice(0, 10);

 
  if (!digits.startsWith("9")) return digits;

  return `+977 ${digits}`;
};


export const getNext5Days = () => {
  const dates = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let i = 0; i < 5; i++) {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return dates;
};

export const getAvailableTimeSlots = () => {
  return [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
};

export const APPOINTMENT_TYPES = [
  {
    id: "general",
    name: "General Appointment",
    duration: "60 min",
    price: "Rs. 100",
  },
  {
    id: "consultation",
    name: "Consultation",
    duration: "30 min",
    price: "Rs. 75",
  },
  {
    id: "follow_up",
    name: "Follow-up Visit",
    duration: "20 min",
    price: "Rs. 50",
  },
  {
    id: "emergency",
    name: "Emergency Visit",
    duration: "30 min",
    price: "Rs. 150",
  },
];

export const intents = [
  // Greetings & General Responses
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response:
      "Hello! 👋 I'm here to help you with appointments, medical questions, and more. How can I assist you today?",
  },
  {
    keywords: ["how are you", "how's it going", "what's up"],
    response:
      "I'm doing great, thank you for asking! I'm ready to help you with your healthcare needs. What can I do for you?",
  },
  {
    keywords: ["thanks", "thank you", "appreciate"],
    response:
      "You're welcome! 😊 If you need anything else, feel free to ask. I'm here to help!",
  },
  {
    keywords: ["bye", "goodbye", "see you"],
    response:
      "Goodbye! Take care of your health. Feel free to come back anytime you need assistance! 👋",
  },
  {
    keywords: ["who are you", "what are you", "your name"],
    response:
      "I'm your AI health assistant! I can help you book appointments, answer health questions, and guide you through our platform. What would you like to know?",
  },
  {
    keywords: ["can you help", "need help", "assist me"],
    response:
      "Absolutely! I can help you with booking appointments, finding doctors, managing your account, and answering general questions. What do you need help with?",
  },
  {
    keywords: ["yes", "yeah", "sure", "okay"],
    response:
      "Great! How can I assist you further?",
  },
  {
    keywords: ["no", "nope", "not now"],
    response:
      "No problem! Let me know if you change your mind or need anything else.",
  },
  
  // Appointment Related
  {
    keywords: ["book", "appointment", "schedule", "reserve"],
    response:
      "To book an appointment, visit our <a href='/appointments' class='text-primary underline hover:text-primary/80'>Book Appointment</a> page and follow the 3-step process.",
  },
  {
    keywords: ["cancel", "appointment", "remove"],
    response:
      "You can cancel an appointment from your <a href='/dashboard' class='text-primary underline hover:text-primary/80'>Dashboard</a> before the scheduled time.",
  },
  {
    keywords: ["reschedule", "change", "modify", "appointment"],
    response:
      "To reschedule your appointment, go to your <a href='/dashboard' class='text-primary underline hover:text-primary/80'>Dashboard</a>, select the appointment, and choose a new time slot.",
  },
  {
    keywords: ["upcoming", "appointments", "scheduled"],
    response:
      "View all your upcoming appointments in your <a href='/dashboard' class='text-primary underline hover:text-primary/80'>Dashboard</a> under the Appointments section.",
  },

  // Pricing & Plans
  {
    keywords: ["price", "pricing", "plan", "cost", "fee"],
    response:
      "We offer Basic and Premium plans. View full pricing details on our <a href='#pricing' class='text-primary underline hover:text-primary/80'>Pricing</a> page.",
  },
  {
    keywords: ["subscription", "membership", "upgrade"],
    response:
      "Manage your subscription and upgrade your plan from your <a href='/pro' class='text-primary underline hover:text-primary/80'>Account Settings</a>.",
  },
  {
    keywords: ["payment", "pay", "billing"],
    response:
      "You can update payment methods and view billing history in your <a href='/pro' class='text-primary underline hover:text-primary/80'>Billing Section</a>.",
  },

  // Doctors & Specialists
  {
    keywords: ["doctor", "doctors", "physician", "specialist"],
    response:
      "Browse our qualified doctors and specialists on the <a href='/appointments' class='text-primary underline hover:text-primary/80'>Find Doctors</a> page. Filter by speciality and availability.",
  },
  {
    keywords: ["speciality", "specialty", "cardiology", "dermatology"],
    response:
      "We have specialists in various fields. Check our <a href='/appointments' class='text-primary underline hover:text-primary/80'>Doctors</a> page to filter by speciality.",
  },

  // Account & Profile
  {
    keywords: ["profile", "account", "settings"],
    response:
      "Manage your profile and account settings in your <a href='/dashboard' class='text-primary underline hover:text-primary/80'>Account Settings</a>.",
  },
  {
    keywords: ["login", "sign in", "access"],
    response:
      "Sign in to your account at the <a href='/' class='text-primary underline hover:text-primary/80'>Login</a> page.",
  },
  {
    keywords: ["register", "sign up", "create account"],
    response:
      "Create a new account on our <a href='/' class='text-primary underline hover:text-primary/80'>Registration</a> page.",
  },

  // Medical Records & History
  {
    keywords: ["medical", "records", "history", "documents"],
    response:
      "Access your medical records and history in your <a href='/dashboard' class='text-primary underline hover:text-primary/80'>Medical Records</a> section.",
  },
  {
    keywords: ["prescription", "medications"],
    response:
      "View your prescriptions and medications in your <a href='/dashboard' class='text-primary underline hover:text-primary/80'>Prescriptions</a> section.",
  },
  {
    keywords: ["test", "results", "lab", "reports"],
    response:
      "Check your test results and lab reports in your <a href='/dashboard' class='text-primary underline hover:text-primary/80'>Lab Reports</a> section.",
  },

  // Support & Contact
  {
    keywords: ["contact", "support", "help"],
    response:
      "Contact our support team using the <a href='/contact' class='text-primary underline hover:text-primary/80'>Contact Us</a> page or email us at amanrai2002acr@gmail.com.",
  },
  {
    keywords: ["faq", "questions", "help center"],
    response:
      "Find answers to common questions in our <a href='/help' class='text-primary underline hover:text-primary/80'>FAQ</a> section.",
  },
  {
    keywords: ["emergency", "urgent"],
    response:
      "For medical emergencies, please call 911 immediately. For urgent care, visit our <a href='/urgent-care' class='text-primary underline hover:text-primary/80'>Urgent Care</a> page.",
  },

  // Services & Features
  {
    keywords: ["telemedicine", "video", "consultation", "online"],
    response:
      "We offer telemedicine consultations. Book a video appointment from our <a href='/appointments' class='text-primary underline hover:text-primary/80'>Book Appointment</a> page.",
  },
  {
    keywords: ["location", "address", "directions"],
    response:
      "Find our locations and get directions on our <a href='/contact' class='text-primary underline hover:text-primary/80'>Locations</a> page.",
  },
  {
    keywords: ["hours", "timing", "open"],
    response:
      "Our clinic hours vary by location. Check specific timings on our <a href='/contact' class='text-primary underline hover:text-primary/80'>Locations</a> page.",
  },
  
  // General Information
  {
    keywords: ["about", "company", "who"],
    response:
      "Learn more about our mission and team on our <a href='/about' class='text-primary underline hover:text-primary/80'>About Us</a> page.",
  },
  {
    keywords: ["privacy", "policy", "terms"],
    response:
      "Read our <a href='/privacy' class='text-primary underline hover:text-primary/80'>Privacy Policy</a> and <a href='/terms' class='text-primary underline hover:text-primary/80'>Terms of Service</a>.",
  },
];