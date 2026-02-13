import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, CreditCard, MicIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-20 pt-24 sm:pt-28">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-md text-xs sm:text-sm text-primary font-medium">
              Complete Health SaaS
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Book, Consult & Manage Your Health Effortlessly
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
              Access smart appointment booking, AI voice consultations, subscription management, and automated health care notifications — all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4 justify-center md:justify-start">
              <SignUpButton mode="modal">
                <Button size={"lg"} className="w-full sm:w-auto text-sm">
                  <CalendarIcon className="mr-2 size-4" />
                  Book Appointment
                </Button>
              </SignUpButton>

              <SignUpButton mode="modal">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm">
                  <CreditCard className="mr-2 size-4" />
                  Subscribe Now
                </Button>
              </SignUpButton>

              <SignUpButton mode="modal">
                <Button size={"lg"} variant={"outline"} className="w-full sm:w-auto text-sm">
                  <MicIcon className="mr-2 size-4" />
                  Try AI Agent
                </Button>
              </SignUpButton>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative order-first md:order-last">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl sm:rounded-3xl"></div>
            <Image
              src={"/hero3.png"}
              alt="HealthCare AI Assistant"
              width={600}
              height={600}
              className="relative w-full h-auto rounded-xl sm:rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;