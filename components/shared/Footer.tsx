import Image from "next/image";
import {
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-black text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#007BFF10,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-4">

              <Image
                src="/logo.png"
                alt="Syvenix Logo"
                width={55}
                height={55}
                priority
              />

              <div>

                <h3 className="text-3xl font-bold">
                  Syvenix
                </h3>

                <p className="text-sm text-[#00CFFF]">
                  Technology With Purpose.
                </p>

              </div>

            </div>

            <p className="mt-8 max-w-xl leading-8 text-slate-400">
              Syvenix helps businesses establish, grow, and scale through
              intelligent digital solutions including business websites,
              hosting, digital infrastructure, SEO foundations, and
              long-term technology support.
            </p>

          </div>

          {/* Solutions */}

          <div>

            <h4 className="text-lg font-semibold">
              Solutions
            </h4>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li className="hover:text-white transition">
                Business Websites
              </li>

              <li className="hover:text-white transition">
                Landing Pages
              </li>

              <li className="hover:text-white transition">
                Hosting & Cloud
              </li>

              <li className="hover:text-white transition">
                Domains & Infrastructure
              </li>

              <li className="hover:text-white transition">
                SEO & Analytics
              </li>

              <li className="hover:text-white transition">
                Care & Maintenance
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-lg font-semibold">
              Contact
            </h4>

            <div className="mt-6 space-y-5">

              <a
                href="mailto:yathiraj.p10@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition"
              >
                <Mail size={18} />
                <span>yathiraj.p10@gmail.com</span>
              </a>

              <a
                href="tel:+918867331128"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition"
              >
                <Phone size={18} />
                <span>+91 8867331128</span>
              </a>

              <a
                href="https://www.linkedin.com/in/yathiraj-p-255203264"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition"
              >

                <div className="flex h-5 w-5 items-center justify-center rounded bg-[#0077B5] text-[11px] font-bold text-white">
                  in
                </div>

                <span>LinkedIn</span>

              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-slate-800" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Syvenix. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8 text-sm">

            <a
              href="/privacy-policy"
              className="text-slate-500 hover:text-white transition"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-of-service"
              className="text-slate-500 hover:text-white transition"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-slate-500 hover:text-white transition"
            >
              Back to Top
              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}