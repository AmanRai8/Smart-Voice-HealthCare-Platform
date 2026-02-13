import Link from "next/link";

function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-8 sm:py-10 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 xs:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl sm:text-4xl" role="img" aria-label="HealthCare Logo">
                🩺
              </span>
              <span className="font-semibold text-base sm:text-lg leading-tight">
                SaaS Healthcare Platform
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
              AI-powered health assistance that actually helps.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">Product</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#how-it-works" className="hover:text-foreground transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <Link href="/help" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">Support</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link href="/help" className="hover:text-foreground transition-colors">
                  Help center
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-foreground transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <Link href="/status" className="hover:text-foreground transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-foreground transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 sm:mt-10 pt-5 sm:pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-muted-foreground">
          <p className="text-center sm:text-left">
            &copy; 2026 HealthCare Platform. Built for real people with real
            health questions.
          </p>

          <div className="flex flex-col xs:flex-row items-center justify-center gap-2 sm:gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <span className="hidden xs:inline">•</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <span className="hidden xs:inline">•</span>
            <Link
              href="/emergency"
              className="font-medium text-red-500 hover:text-red-600 transition-colors"
            >
              🚨 Emergency
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;