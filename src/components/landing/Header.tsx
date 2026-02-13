"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#how-it-works", label: "How it Works" },
    { href: "/#what-to-ask", label: "What to Ask" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#contact", label: "Contact" },
    { href: "/emergency", label: "Emergency" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-4 sm:px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-3xl sm:text-4xl"
            role="img"
            aria-label="HealthCare Logo"
          >
            🩺
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          <SignInButton mode="modal">
            <Button variant={"ghost"} size={"sm"} className="text-xs sm:text-sm">
              Login
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button size={"sm"} className="text-xs sm:text-sm">
              Sign Up
            </Button>
          </SignUpButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border/50 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="pt-3 mt-3 border-t border-border/50 flex flex-col gap-2 px-4">
              <SignInButton mode="modal">
                <Button variant={"ghost"} size={"sm"} className="w-full">
                  Login
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size={"sm"} className="w-full">
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Header;