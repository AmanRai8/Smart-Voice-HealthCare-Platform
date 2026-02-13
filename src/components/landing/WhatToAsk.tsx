import { MessageCircleIcon, MessageSquareIcon, HelpCircle, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function WhatToAsk() {
  return (
    <section
      id="what-to-ask"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-background to-muted/20"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-4 sm:mb-6">
            <MessageCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">
              AI-Powered Conversations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ask about
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              anything health related
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From simple questions to complex concerns, our AI delivers
            expert-level guidance trained on thousands of real health cases
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start mb-12 sm:mb-16">
          {/* Left Side - Interactive Chat Examples */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                Common questions our AI answers:
              </h3>

              {/* Chat Bubble 1 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MessageSquareIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
                      <div className="bg-primary/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary/10">
                        <p className="font-semibold text-primary text-sm sm:text-base">
                          "I have pain and discomfort that won't go away"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          Get instant guidance on possible causes, home care
                          tips, and whether you should see a doctor urgently
                        </p>
                        <div className="flex gap-2 mt-2 sm:mt-3 flex-wrap">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            Symptom Check
                          </span>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            Urgent Care
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Bubble 2 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MessageSquareIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
                      <div className="bg-primary/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary/10">
                        <p className="font-semibold text-primary text-sm sm:text-base">
                          "How much does treatment usually cost?"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          Explore treatment options, expected costs, and find
                          care that fits your health needs and budget
                        </p>
                        <div className="flex gap-2 mt-2 sm:mt-3 flex-wrap">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            Cost Estimates
                          </span>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            Care Options
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Bubble 3 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MessageSquareIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
                      <div className="bg-primary/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary/10">
                        <p className="font-semibold text-primary text-sm sm:text-base">
                          "What specialist should I see for this condition?"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          Find the right specialist for your needs and book
                          appointments with qualified healthcare professionals
                        </p>
                        <div className="flex gap-2 mt-2 sm:mt-3 flex-wrap">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            Specialist Search
                          </span>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            Booking
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - AI Illustration */}
          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 sticky top-8 order-first lg:order-last">
            <div className="flex items-center justify-center h-full">
              <Image
                src="/wta5.png"
                alt="AI Assistant"
                width={500}
                height={500}
                className="w-full h-auto max-w-lg object-contain"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-primary/20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Need More Help?
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                  Our support team is ready to assist you with any questions or
                  concerns you may have
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
                {/* Contact Us Card */}
                <Link href="/contact">
                  <div className="group bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer h-full">
                    <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                      <div className="p-3 sm:p-4 bg-primary/10 rounded-xl sm:rounded-2xl group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold mb-2">
                          Contact Us
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                          Get personalized assistance from our support team
                        </p>
                        <div className="inline-flex items-center gap-2 text-primary font-medium text-xs sm:text-sm group-hover:gap-3 transition-all">
                          Send a Message
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Help Center Card */}
                <Link href="/help">
                  <div className="group bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer h-full">
                    <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                      <div className="p-3 sm:p-4 bg-primary/10 rounded-xl sm:rounded-2xl group-hover:bg-primary/20 transition-colors">
                        <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold mb-2">
                          Help Center
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                          Browse FAQs and guides to find quick answers
                        </p>
                        <div className="inline-flex items-center gap-2 text-primary font-medium text-xs sm:text-sm group-hover:gap-3 transition-all">
                          Visit Help Center
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border/50">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Support Available
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                      &lt;2h
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Avg Response Time
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                      100%
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Privacy of user data
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatToAsk;