import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, CreditCard, MicIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-md text-sm text-primary font-medium">
              Complete Health SaaS
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">
              Book, Consult & Manage Your Health Effortlessly
            </h1>

            <p className="text-muted-foreground text-lg">
              Access smart appointment booking, AI voice consultations, subscription management, and automated health care notifications — all in one platform.
            </p>

            <div className="flex gap-3 pt-4">
              <SignUpButton mode="modal">
                <Button size={"lg"}>
                  <MicIcon className="mr-2 size-4" />
                  Book Appointment
                </Button>
              </SignUpButton>

              <SignUpButton mode="modal">
                <Button size="lg" variant="outline">
                  <CreditCard className="mr-2 size-4" />
                  Subscribe Now
                </Button>
              </SignUpButton>

              <SignUpButton mode="modal">
                <Button size={"lg"} variant={"outline"}>
                  <CalendarIcon className="mr-2 size-4" />
                  Try AI Agent
                </Button>
              </SignUpButton>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl "></div>
            <Image
              src={"/Hero2.png"}
              alt="HealthCare AI Assistant"
              width={600}
              height={600}
              className="relative w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
