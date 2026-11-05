
import Link from "next/link";

const footerLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#171719] px-5 sm:px-8 lg:px-12">

      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-12 border-b border-[#92908D]/20 py-16 md:grid-cols-3">

          {/* Brand */}
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-block font-sans text-2xl font-bold tracking-[0.04em] text-[#F2EEE8]"
            >
              MOTOR<span className="text-[#B89B70]">/</span>ARCHIVE
            </Link>

            <p className="max-w-xs text-sm leading-7 text-[#92908D]">
              Preserving the art of classic motoring through timeless design,
              mechanical craftsmanship, and automotive heritage.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B89B70]">
              Explore
            </h3>

            <ul className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#92908D] transition-colors duration-200 hover:text-[#F2EEE8]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B89B70]">
              Follow Us
            </h3>

            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#92908D] transition-colors duration-200 hover:text-[#F2EEE8]"
                >
                  Instagram ↗
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#92908D] transition-colors duration-200 hover:text-[#F2EEE8]"
                >
                  YouTube ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-3 py-7 text-xs text-[#92908D] sm:flex-row sm:items-center sm:justify-between">
          <p>© MOTOR/ARCHIVE. All rights reserved.</p>

          <p className="uppercase tracking-[0.12em]">
            The Art of the Drive.
          </p>
        </div>

      </div>
    </footer>
  );
}
