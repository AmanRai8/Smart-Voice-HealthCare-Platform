import Link from "next/link";

function Footer() {
  return (
    <footer className="px-6 py-10 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-4xl" role="img" aria-label="HealthCare Logo">
                🩺
              </span>
              <span className="font-semibold text-lg leading-tight">
                SaaS Healthcare Platform
              </span>
            </Link>

            <p className="text-sm text-muted-foreground max-w-sm">
              AI-powered health assistance that actually helps.
            </p>

          </div>

          {/* Product */}
          <div>
            <h4 className="font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#how-it-works" className="hover:text-foreground">
                  How it works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <Link href="/help" className="hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/help" className="hover:text-foreground">
                  Help center
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-foreground">
                  Contact us
                </a>
              </li>
              <li>
                <Link href="/status" className="hover:text-foreground">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-foreground">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
          <p className="text-center sm:text-left">
            &copy; 2026 HealthCare Platform. Built for real people with real
            health questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link
              href="/emergency"
              className="font-medium text-red-500 hover:text-red-600"
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
