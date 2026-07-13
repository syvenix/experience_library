import { Logo } from "@healthcare/components/ui/logo";
import { navItems } from "@healthcare/lib/site-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-clinic-border bg-white py-10">
      <div className="clinic-shell">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-4 max-w-[420px] text-sm leading-6 text-clinic-body">
              Technology With Purpose. Premium healthcare experiences for modern
              clinics and patient-first teams.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-4 md:justify-end"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-clinic-muted transition-colors duration-200 hover:text-clinic-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary focus-visible:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-clinic-border pt-6 text-center text-sm text-clinic-muted">
          <p>
            © {currentYear} Syvenix Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}