import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 outline-hidden z-10 max-w-7xl mx-auto"
    >
      {/* HEADER */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-4 sm:mb-6">
          <ZapIcon className="size-3 sm:size-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-primary">
            Simple Process
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
          <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Three steps to
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            better health
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
          Our streamlined process makes health care accessible, convenient, and
          stress-free for everyone
        </p>
      </div>

      {/* STEPS */}
      <div className="relative">
        {/* CONNECTION LINE */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-8">
          {/* STEP 1 */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Step Number */}
              <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-xs sm:text-sm font-bold shadow-lg">
                1
              </div>

              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6">
                <Image
                  src="/audio.png"
                  alt="Voice Chat"
                  width={40}
                  height={40}
                  className="w-10 sm:w-14"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                Ask Questions
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Chat with our AI assistant about any health concerns. Get
                instant answers about symptoms, treatments, and health tips.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2.5 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  24/7 Available
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Instant Response
                </span>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Step Number */}
              <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-xs sm:text-sm font-bold shadow-lg">
                2
              </div>

              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6">
                <Image
                  src="/brain.png"
                  alt="AI Brain"
                  width={40}
                  height={40}
                  className="w-10 sm:w-14"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                Get Expert Advice
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Receive personalized recommendations based on thousands of
                health cases. Our AI provides professional-grade insights.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2.5 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  AI-Powered
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Personalized
                </span>
              </div>
            </div>
          </div>

          {/* STEP 3  */}
          <div className="relative group md:col-span-2 lg:col-span-1">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Step Number */}
              <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-xs sm:text-sm font-bold shadow-lg">
                3
              </div>

              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6">
                <Image
                  src="/calendar.png"
                  alt="Calendar"
                  width={40}
                  height={40}
                  className="w-10 sm:w-14"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                Book & Get Care
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Schedule with verified doctors and receive comprehensive
                follow-up care. Track your progress seamlessly.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2.5 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Verified Doctors
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Follow-up Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="text-center mt-12 sm:mt-16">
        <SignUpButton mode="modal">
          <Button size="lg" className="text-sm sm:text-base">
            <ArrowRightIcon className="mr-2 size-4 sm:size-5" />
            Get started now
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
}

export default HowItWorks;