"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LinkButton } from "@healthcare/components/ui/button";
import { Logo } from "@healthcare/components/ui/logo";
import { useActiveSection } from "@healthcare/hooks/use-active-section";
import { navItems } from "@healthcare/lib/site-data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  console.log("Active Section:", activeSection);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-clinic-border/70 bg-white/82 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="clinic-shell flex min-h-[88px] items-center justify-between gap-6"
      >
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary focus-visible:ring-offset-2 ${
                  isActive
                    ? "text-clinic-primary"
                    : "text-clinic-navy hover:text-clinic-primary"
                }`}
              >
                {item.label}

                <span
                  aria-hidden="true"
                  className={`absolute -bottom-3 left-1/2 h-0.5 w-7 -translate-x-1/2 rounded-full bg-clinic-primary transition-all duration-200 ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919876543210"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-clinic-border bg-white px-5 text-sm font-semibold text-clinic-navy shadow-xs transition-colors duration-200 hover:border-clinic-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary focus-visible:ring-offset-2"
          >
            <Phone
              aria-hidden="true"
              size={16}
            />
            +91 98765 43210
          </a>

          <LinkButton href="#contact" showArrow>
            Book Appointment
          </LinkButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="grid size-11 place-items-center rounded-sm border border-clinic-border bg-white text-clinic-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary focus-visible:ring-offset-2 lg:hidden"
        >
          {isOpen ? (
            <X
              aria-hidden="true"
              size={20}
            />
          ) : (
            <Menu
              aria-hidden="true"
              size={20}
            />
          )}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-clinic-border bg-white lg:hidden"
        >
          <div className="clinic-shell grid gap-2 py-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-sm px-3 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-clinic-lightBlue text-clinic-primary"
                      : "text-clinic-navy hover:bg-clinic-lightBlue"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <LinkButton
              href="#contact"
              showArrow
              className="mt-2 w-full"
            >
              Book Appointment
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  );
}