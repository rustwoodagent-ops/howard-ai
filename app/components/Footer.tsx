import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0b] border-t border-[#27272a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-white">Howard AI</span>
            </Link>
            <p className="text-[#71717a] text-sm max-w-sm">
              Building custom AI second brains for executives who want to think faster, 
              remember everything, and automate the mundane.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-[#71717a] hover:text-cyan-400 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-[#71717a] hover:text-cyan-400 text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-[#71717a] hover:text-cyan-400 text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#71717a] hover:text-cyan-400 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#71717a] hover:text-cyan-400 text-sm transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#71717a] hover:text-cyan-400 text-sm transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#71717a] hover:text-cyan-400 text-sm transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@howard-ai.dev"
                  className="text-[#71717a] hover:text-cyan-400 text-sm transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#71717a] text-sm">
            © {currentYear} Howard AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="#" className="text-[#71717a] hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#71717a] hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
