import Link from "next/link";
import { Phone, AlertTriangle, Shield, Info, ArrowLeft } from "lucide-react";
import { emergencyContacts, immediateActions, urgentSymptoms } from "@/lib/utils";


export default function EmergencyPage() {

  return (
    <>

      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16">
          {/* Back Button */}
         <Link
              href="/"
              className="inline-flex items-center mb-4 justify-center gap-2 px-3 py-2 sm:py-4 rounded-xl bg-card text-card-foreground border-2 border-border font-semibold hover:bg-accent transition-all group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-destructive/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-destructive" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Emergency Guidance
              </h1>
            </div>

            <div className="bg-destructive/10 border-l-4 border-destructive p-4 sm:p-6 rounded-lg">
              <p className="text-sm sm:text-base text-muted-foreground">
                This section provides general emergency guidance only.
                <span className="block sm:inline font-semibold text-destructive mt-1 sm:mt-0 sm:ml-1">
                  It is not a replacement for professional medical help.
                </span>
              </p>
            </div>
          </div>

          {/* Emergency Numbers - Clickable Cards */}
          <section className="mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                Emergency Contacts
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {emergencyContacts.map((contact) => (
                <a
                  key={contact.number}
                  href={`tel:${contact.number}`}
                  className="bg-card border-2 border-border hover:border-primary rounded-xl p-4 sm:p-6 transition-all hover:shadow-lg active:scale-95 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl sm:text-4xl">{contact.icon}</span>
                    <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {contact.label}
                  </div>
                  <div className={`text-2xl sm:text-3xl font-bold ${contact.color}`}>
                    {contact.number}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 group-hover:text-primary transition-colors">
                    Tap to call →
                  </div>
                </a>
              ))}

              {/* Hospital Card */}
              <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl">🏥</span>
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  Nearest Hospital
                </div>
                <div className="text-lg sm:text-xl font-bold text-primary">
                  Visit Immediately
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  For life-threatening emergencies
                </div>
              </div>
            </div>
          </section>

          {/* When to Seek Emergency */}
          <section className="mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                Seek Immediate Help If You Experience:
              </h2>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {urgentSymptoms.map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-muted rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">
                      {symptom}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What You Can Do */}
          <section className="mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                What You Can Do Right Now
              </h2>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                {immediateActions.map((action, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-primary/10 rounded-lg"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm sm:text-base text-foreground pt-0.5">
                      {action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-10 sm:mb-12">
            <div className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-destructive mb-2 text-sm sm:text-base">
                    Important Disclaimer
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    This platform does not provide emergency medical diagnosis or treatment. 
                    The information provided here is for general guidance only. Always consult 
                    qualified healthcare professionals in emergencies. If you're experiencing 
                    a medical emergency, call emergency services immediately.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-3 py-2 sm:py-4 rounded-xl bg-card text-card-foreground border-2 border-border font-semibold hover:bg-accent transition-all group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <a
              href="tel:102"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-4 rounded-xl bg-destructive text-destructive-foreground font-semibold hover:bg-destructive/90 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call Emergency (102)
            </a>
          </div>
        </div>
      </main>
    </>
  );
}