"use client";

import { 
  Heart, 
  ArrowRight,
  Check
} from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div id="about" className="bg-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            About Us
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Better Healthcare with{" "}
            <span className="text-primary">AI</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
            Get expert medical care anytime, anywhere. Fast appointments, smart AI support, and prices that work for you.
          </p>
        </div>

        {/* Mission with Image */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-first lg:order-first">
              <div className="relative w-full max-w-lg mx-auto aspect-[2/3] bg-primary/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/about2.png" 
                  alt="Healthcare innovation" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-2xl sm:rounded-3xl -z-10 hidden lg:block" />
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-2xl sm:rounded-3xl -z-10 hidden lg:block" />
            </div>

            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                What We Do
              </h2>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Healthcare should be easy. We help you see doctors quickly, get health advice instantly, and pay less for quality care.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 sm:mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">AI Helper Available 24/7</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Ask health questions anytime and get instant answers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 sm:mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Book Appointments Fast</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">See a real doctor in minutes, not days.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 sm:mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Fair Prices</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Great care that fits your budget.</p>
                  </div>
                </div>
              </div>

              <SignUpButton mode="modal">
                <button type="button" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all mt-2 sm:mt-4 text-sm sm:text-base">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </SignUpButton>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4">
            Ready to Try It?
          </h2>
          <p className="text-primary-foreground/90 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
            Get better and faster healthcare today.
          </p>
          <SignUpButton mode="modal">
            <button className="inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:scale-105 transition-all shadow-lg text-base sm:text-lg">
              Book an Appointment
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}