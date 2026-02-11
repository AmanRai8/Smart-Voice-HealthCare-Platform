import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
   <>
   <Header /> <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: February 10, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <div className="bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-border/50 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Smart Voice Health Care Platform ("the
                Platform"), you accept and agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Description of Service
              </h2>
              <div className="text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  Smart Voice Health Care Platform provides:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>AI-powered health information and guidance</li>
                  <li>Voice-based symptom analysis</li>
                  <li>Doctor appointment booking services</li>
                  <li>Health resources and educational content</li>
                  <li>Personalized health recommendations</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  <strong className="text-foreground">
                    Important Disclaimer:
                  </strong>{" "}
                  Our platform is designed to provide health information and
                  facilitate access to healthcare professionals. It is NOT a
                  substitute for professional medical advice, diagnosis, or
                  treatment. Always consult with a qualified healthcare provider
                  for medical concerns.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. User Responsibilities
              </h2>
              <div className="text-muted-foreground space-y-3">
                <p className="leading-relaxed">You agree to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Provide accurate and complete information when using our
                    services
                  </li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the platform only for lawful purposes</li>
                  <li>
                    Not misuse or attempt to circumvent our security measures
                  </li>
                  <li>
                    Not share false or misleading health information
                  </li>
                  <li>Respect the privacy of other users</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Medical Disclaimer
              </h2>
              <div className="text-muted-foreground space-y-3">
                <p className="leading-relaxed font-medium text-foreground">
                  This is a critical section - please read carefully:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Our AI-powered tools provide general health information only
                  </li>
                  <li>
                    We do not provide medical diagnoses or treatment plans
                  </li>
                  <li>
                    Information provided should not replace professional medical
                    advice
                  </li>
                  <li>
                    In case of emergency, call emergency services immediately
                  </li>
                  <li>
                    We are not liable for any health outcomes resulting from use
                    of our platform
                  </li>
                  <li>
                    Always verify information with qualified healthcare
                    professionals
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Account Registration
              </h2>
              <div className="text-muted-foreground space-y-2">
                <p className="leading-relaxed">
                  To access certain features, you must create an account. You
                  agree to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Be at least 18 years of age</li>
                  <li>Provide accurate registration information</li>
                  <li>Maintain the confidentiality of your password</li>
                  <li>
                    Notify us immediately of any unauthorized account access
                  </li>
                  <li>Be responsible for all activities under your account</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Appointments and Payments
              </h2>
              <div className="text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  When booking appointments through our platform:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    You agree to pay all applicable fees for services booked
                  </li>
                  <li>
                    Cancellation policies are set by individual healthcare
                    providers
                  </li>
                  <li>We facilitate bookings but are not the service provider</li>
                  <li>Refunds are subject to provider policies</li>
                  <li>Payment information is processed securely</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of the Platform,
                including but not limited to text, graphics, logos, software, and
                design, are owned by us or our licensors and are protected by
                copyright, trademark, and other intellectual property laws. You
                may not copy, modify, distribute, or reproduce any content
                without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Privacy and Data Protection
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of the Platform is also governed by our Privacy Policy.
                We take data protection seriously and comply with applicable data
                protection laws. Please review our Privacy Policy to understand
                how we collect, use, and protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                9. Prohibited Activities
              </h2>
              <div className="text-muted-foreground space-y-2">
                <p className="leading-relaxed">
                  You may not use the Platform to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful or malicious code</li>
                  <li>Harass, abuse, or harm others</li>
                  <li>Collect user data without consent</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Interfere with platform operation or security</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                10. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Smart Voice Health Care
                Platform and its affiliates shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages resulting
                from your use or inability to use the service. This includes, but
                is not limited to, health outcomes, data loss, or service
                interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                11. Indemnification
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Smart Voice Health Care
                Platform, its officers, directors, employees, and agents from any
                claims, damages, losses, liabilities, and expenses arising from
                your use of the Platform or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                12. Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your account at any
                time for violations of these Terms or for any other reason at our
                sole discretion. You may also terminate your account at any time
                by contacting us. Upon termination, your right to use the
                Platform will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify these Terms at any time. We will notify you of
                significant changes by posting a notice on the Platform or
                sending you an email. Your continued use of the Platform after
                changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                14. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with
                the laws of Nepal, without regard to its conflict of law
                provisions. Any disputes arising from these Terms shall be
                subject to the exclusive jurisdiction of the courts in Kathmandu,
                Nepal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">15. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms of Service, please
                contact us:
              </p>
              <div className="mt-4 p-4 bg-muted/30 rounded-xl">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong>{" "}
                  amanrai2002acr@gmail.com
                </p>
                <p className="text-muted-foreground mt-1">
                  <strong className="text-foreground">Phone:</strong> +977
                  9826337227
                </p>
                <p className="text-muted-foreground mt-1">
                  <strong className="text-foreground">Address:</strong>{" "}
                  Kathmandu, Nepal
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
   <Footer /></>
  );
}