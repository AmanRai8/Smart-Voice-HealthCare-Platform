import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { Lock, Shield, Key, Server, Eye, FileCheck } from "lucide-react";

export default function Security() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Lock className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Security at <span className="text-primary">HealthCare</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your health data is sensitive, and we take its protection seriously.
            Learn about our comprehensive security measures and commitment to
            safeguarding your information.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50">
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              End-to-End Encryption
            </h3>
            <p className="text-muted-foreground text-sm">
              All data transmitted between your device and our servers is
              encrypted using industry-standard TLS/SSL protocols to prevent
              interception.
            </p>
          </div>

          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50">
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Secure Authentication
            </h3>
            <p className="text-muted-foreground text-sm">
              Multi-factor authentication and secure password requirements
              protect your account from unauthorized access.
            </p>
          </div>

          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50">
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Encryption</h3>
            <p className="text-muted-foreground text-sm">
              Your personal and health information is encrypted at rest using
              AES-256 encryption, ensuring data remains secure even if
              physically accessed.
            </p>
          </div>

          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50">
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Access Controls
            </h3>
            <p className="text-muted-foreground text-sm">
              Role-based access controls ensure that only authorized personnel
              can access specific data, with all access logged and monitored.
            </p>
          </div>

          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50">
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
              <FileCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Regular Security Audits
            </h3>
            <p className="text-muted-foreground text-sm">
              We conduct regular security assessments, penetration testing, and
              third-party audits to identify and address potential
              vulnerabilities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50">
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Compliance Standards
            </h3>
            <p className="text-muted-foreground text-sm">
              We maintain compliance with healthcare data protection standards
              and continuously update our practices to meet evolving
              requirements.
            </p>
          </div>
        </div>

        {/* Detailed Security Practices */}
        <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Our Security Practices
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-3">
                Infrastructure Security
              </h3>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Our infrastructure is hosted on secure, SOC 2 Type II
                  certified cloud platforms with:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>24/7 monitoring and intrusion detection systems</li>
                  <li>DDoS protection and firewall configurations</li>
                  <li>Regular security patches and updates</li>
                  <li>Redundant backups with encrypted storage</li>
                  <li>Isolated network environments for sensitive data</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">
                Data Privacy & Protection
              </h3>
              <div className="text-muted-foreground space-y-2">
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Personal health information is segregated from general user
                    data
                  </li>
                  <li>
                    Data minimization practices - we only collect what's
                    necessary
                  </li>
                  <li>Automatic data anonymization for analytics</li>
                  <li>Right to erasure - users can request data deletion</li>
                  <li>
                    No sharing of health data with third parties without
                    explicit consent
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">
                Employee Security Training
              </h3>
              <div className="text-muted-foreground space-y-2">
                <p>All team members undergo:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Comprehensive security awareness training</li>
                  <li>Regular updates on security best practices</li>
                  <li>Strict confidentiality agreements</li>
                  <li>Background checks for sensitive role access</li>
                  <li>Incident response training and drills</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">
                Incident Response
              </h3>
              <div className="text-muted-foreground space-y-2">
                <p>
                  In the unlikely event of a security incident, we have
                  established protocols:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Immediate incident detection and containment procedures
                  </li>
                  <li>
                    Rapid response team available 24/7 for security events
                  </li>
                  <li>
                    Transparent communication with affected users within 72
                    hours
                  </li>
                  <li>
                    Post-incident analysis and implementation of preventive
                    measures
                  </li>
                  <li>Compliance with breach notification requirements</li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        {/* Your Security Responsibilities */}
        <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Your Security Responsibilities
          </h2>
          <p className="text-muted-foreground mb-6">
            Security is a shared responsibility. Here's how you can help protect
            your account:
          </p>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary/10 rounded-full mt-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Use Strong Passwords
                </p>
                <p className="text-sm">
                  Create unique, complex passwords with a mix of letters,
                  numbers, and symbols. Never share your password.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary/10 rounded-full mt-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Enable Two-Factor Authentication
                </p>
                <p className="text-sm">
                  Add an extra layer of security to your account by enabling 2FA
                  in your account settings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary/10 rounded-full mt-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Keep Software Updated
                </p>
                <p className="text-sm">
                  Regularly update your browser and operating system to protect
                  against known vulnerabilities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary/10 rounded-full mt-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Be Cautious of Phishing
                </p>
                <p className="text-sm">
                  We will never ask for your password via email. Be wary of
                  suspicious links or requests for personal information.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary/10 rounded-full mt-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Use Secure Networks
                </p>
                <p className="text-sm">
                  Avoid accessing your account on public Wi-Fi. Use a VPN if you
                  must access healthcare information on public networks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary/10 rounded-full mt-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Log Out When Done
                </p>
                <p className="text-sm">
                  Always log out after using our services, especially on shared
                  devices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Report Security Issues */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Report a Security Concern
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you discover a security vulnerability or have concerns about your
            account security, please contact us immediately. We take all reports
            seriously and will respond promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:amanrai2002acr@gmail.com"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition"
            >
              Email Security Team
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-card border border-border rounded-xl font-semibold hover:bg-muted transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer /></>
  );
}