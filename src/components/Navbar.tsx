"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { AlertTriangle, CalendarIcon, Contact, CrownIcon, HomeIcon, MicIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const { user } = useUser();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", icon: HomeIcon, label: "Dashboard" },
    { href: "/appointments", icon: CalendarIcon, label: "Appointments" },
    { href: "/voice", icon: MicIcon, label: "Voice" },
    { href: "/pro", icon: CrownIcon, label: "Pro" },
    { href: "/contact", icon: Contact, label: "Contact" },
    { href: "/emergency", icon: AlertTriangle, label: "Emergency" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* LOGO */}
        <div className="flex items-center gap-4 sm:gap-8">
          <Link href="/dashboard" className="flex items-center gap-2">
            <span
              className="text-3xl sm:text-4xl"
              role="img"
              aria-label="HealthCare Logo"
            >
              🩺
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 transition-colors ${
                  pathname === link.href
                    ? "text-foreground hover:text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden xl:flex flex-col items-end">
              <span className="text-sm font-medium text-foreground">
                {user?.firstName} {user?.lastName}
              </span>
              <span className="text-xs text-muted-foreground">
                {user?.emailAddresses?.[0]?.emailAddress}
              </span>
            </div>

            <UserButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border/50 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  pathname === link.href
                    ? "bg-primary/10 text-foreground font-medium"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            ))}
            
            {/* User Info in Mobile Menu */}
            <div className="xl:hidden pt-3 mt-3 border-t border-border/50">
              <div className="px-4 py-2">
                <span className="text-sm font-medium text-foreground block">
                  {user?.firstName} {user?.lastName}
                </span>
                <span className="text-xs text-muted-foreground block mt-1">
                  {user?.emailAddresses?.[0]?.emailAddress}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;