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
