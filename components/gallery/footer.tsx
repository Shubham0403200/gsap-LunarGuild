import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-black text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand Info */}
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
                    Lunar <span className="text-slate-400">Guild</span>
          </Link>
          <p className="text-sm mt-2">
            A community for senior designers building independent businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-white font-medium">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="text-white font-medium">Legal</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 text-center py-4 text-xs text-zinc-500">
        © {new Date().getFullYear()} Lunar Guild. All rights reserved.
      </div>
    </footer>
  );
}
