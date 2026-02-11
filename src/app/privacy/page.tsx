import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
<>
<Header />    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
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
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Smart Voice Health Care Platform ("we," "our," or
                "us"). We are committed to protecting your privacy and ensuring
                the security of your personal and health information. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    2.1 Personal Information
                  </h3>
                  <p className="leading-relaxed">
                    We collect information that you provide directly to us,
                    including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Account credentials</li>
                    <li>Payment information</li>
                    <li>Profile information and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    2.2 Health Information
                  </h3>
                  <p className="leading-relaxed">
                    With your consent, we may collect:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Medical history and symptoms</li>
                    <li>Appointment information</li>
                    <li>Voice recordings for health analysis</li>
                    <li>Health-related queries and conversations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    2.3 Technical Information
                  </h3>
                  <p className="leading-relaxed">
                    We automatically collect:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Device information and IP address</li>
                    <li>Browser type and operating system</li>
                    <li>Usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <div className="text-muted-foreground space-y-2">
                <p className="leading-relaxed">
                  We use the collected information for:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Providing and improving our healthcare services</li>
                  <li>Processing appointments and payments</li>
                  <li>Communicating with you about your account and services</li>
                  <li>Personalizing your experience</li>
                  <li>Analyzing usage patterns to enhance our platform</li>
                  <li>Ensuring platform security and preventing fraud</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <div className="text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  We do not sell your personal information. We may share your
                  information with:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Healthcare providers you choose to book appointments with
                  </li>
                  <li>Service providers who assist in our operations</li>
                  <li>
                    Legal authorities when required by law or to protect rights
                  </li>
                  <li>
                    Business partners with your explicit consent
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your
                information, including encryption, secure servers, and regular
                security audits. However, no method of transmission over the
                internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <div className="text-muted-foreground space-y-2">
                <p className="leading-relaxed">You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your
                experience, analyze usage, and deliver personalized content. You
                can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under 18. We do not
                knowingly collect personal information from children. If you
                believe we have collected information from a child, please
                contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                9. International Data Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your data in accordance with this
                Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date. Your continued use of our
                services constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our data
                practices, please contact us:
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