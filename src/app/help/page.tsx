"use client";

import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function HelpCenter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "Click the 'Sign Up' button in the top right corner of the homepage. Fill in your details including name, email, and password. You'll receive a verification email to activate your account. Once verified, you can log in and start using our services.",
        },
        {
          question: "Is the platform free to use?",
          answer:
            "Creating an account and browsing doctors is free. Some features like AI health analysis and appointment booking may have associated fees depending on the service. Check our Pricing page for detailed information.",
        },
        {
          question: "What services does the platform offer?",
          answer:
            "We offer AI-powered voice symptom analysis, doctor appointment booking, health information resources, personalized health recommendations, and access to verified healthcare professionals in Nepal.",
        },
      ],
    },
    {
      category: "Appointments",
      questions: [
        {
          question: "How do I book an appointment?",
          answer:
            "Browse our list of verified doctors, select a doctor that matches your needs, choose an available time slot, and complete the booking form. You'll receive a confirmation email with all the details.",
        },
        {
          question: "Can I cancel or reschedule my appointment?",
          answer:
            "Yes, you can cancel or reschedule appointments from your dashboard. Please note that cancellation policies vary by doctor. Some may require 24-48 hours notice. Check the specific doctor's policy before booking.",
        },
        {
          question: "What happens if I miss my appointment?",
          answer:
            "Missing an appointment without prior notice may result in a cancellation fee as per the doctor's policy. We recommend canceling at least 24 hours in advance if you cannot attend.",
        },
        {
          question: "How will I receive appointment reminders?",
          answer:
            "You'll receive email reminders 24 hours before your appointment and an SMS reminder 2 hours before (if you've provided a phone number). You can also check upcoming appointments in your dashboard.",
        },
      ],
    },
    {
      category: "AI Health Assistant",
      questions: [
        {
          question: "How accurate is the AI symptom analysis?",
          answer:
            "Our AI provides general health information based on the symptoms you describe. While it uses advanced algorithms, it's NOT a substitute for professional medical diagnosis. Always consult with a qualified healthcare provider for accurate diagnosis and treatment.",
        },
        {
          question: "Is my health information kept private?",
          answer:
            "Absolutely. All your health data is encrypted and stored securely. We never share your personal health information with third parties without your explicit consent. Read our Privacy Policy for more details.",
        },
        {
          question: "What should I do in case of emergency?",
          answer:
            "Our platform is NOT designed for emergencies. If you're experiencing a medical emergency, please call emergency services immediately (dial 102 in Nepal) or go to the nearest hospital emergency room.",
        },
      ],
    },
    {
      category: "Payments & Billing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit/debit cards, eSewa, Khalti, and bank transfers. All payment information is processed securely through encrypted channels.",
        },
        {
          question: "Will I receive a receipt for my payment?",
          answer:
            "Yes, you'll receive an email receipt immediately after payment. You can also view and download receipts from your account dashboard under 'Payment History.'",
        },
        {
          question: "What is your refund policy?",
          answer:
            "Refund policies depend on the specific service. For appointment cancellations, refunds are subject to the doctor's cancellation policy. For other services, contact our support team within 7 days of purchase.",
        },
      ],
    },
    {
      category: "Account & Security",
      questions: [
        {
          question: "How do I reset my password?",
          answer:
            "Click 'Forgot Password' on the login page, enter your registered email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
        },
        {
          question: "Can I update my personal information?",
          answer:
            "Yes, log in to your account and go to 'Profile Settings' where you can update your name, contact information, and other details. Some changes may require email verification.",
        },
        {
          question: "How do I delete my account?",
          answer:
            "To delete your account, go to Account Settings > Privacy & Security > Delete Account. Please note that this action is permanent and will delete all your data including appointment history.",
        },
        {
          question: "Is my data secure?",
          answer:
            "Yes. We use industry-standard encryption (TLS/SSL) for data transmission and AES-256 encryption for stored data. We also implement multi-factor authentication and regular security audits. Visit our Security page for more details.",
        },
      ],
    },
    {
      category: "Technical Issues",
      questions: [
        {
          question: "The website isn't loading properly. What should I do?",
          answer:
            "Try clearing your browser cache and cookies, then refresh the page. Make sure you're using an updated browser (Chrome, Firefox, Safari, or Edge). If the problem persists, contact our support team.",
        },
        {
          question: "I'm not receiving confirmation emails.",
          answer:
            "Check your spam/junk folder. Add amanrai2002acr@gmail.com to your contacts to ensure our emails reach your inbox. If you still don't receive emails, contact support to update your email address.",
        },
        {
          question: "Which browsers are supported?",
          answer:
            "We support the latest versions of Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. For the best experience, we recommend keeping your browser updated.",
        },
      ],
    },
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Help Center
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions and learn how to get the most out
            of our platform. Can't find what you're looking for? Contact our
            support team.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <a
            href="/contact"
            className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition text-center"
          >
            <div className="text-2xl mb-2">💬</div>
            <h3 className="font-semibold mb-1">Contact Support</h3>
            <p className="text-sm text-muted-foreground">
              Get help from our team
            </p>
          </a>

          <a
            href="/status"
            className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition text-center"
          >
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold mb-1">System Status</h3>
            <p className="text-sm text-muted-foreground">
              Check service uptime
            </p>
          </a>

          <a
            href="/security"
            className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition text-center"
          >
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-semibold mb-1">Security Info</h3>
            <p className="text-sm text-muted-foreground">
              Learn about data protection
            </p>
          </a>
        </div>

        {/* FAQs by Category */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
              <div className="space-y-3">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <div
                      key={faqIndex}
                      className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl border border-border/50 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(globalIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition"
                      >
                        <span className="font-semibold pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground transition-transform ${
                            openFaq === globalIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === globalIndex && (
                        <div className="px-6 pb-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20 text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our support team is here to assist you with any questions or
            concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition"
            >
              Contact Support
            </a>
            <a
              href="mailto:amanrai2002acr@gmail.com"
              className="px-6 py-3 bg-card border border-border rounded-xl font-semibold hover:bg-muted transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}