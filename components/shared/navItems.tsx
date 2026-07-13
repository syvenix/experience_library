export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export const navItems: NavItem[] = [
  {
    label: "Solutions",
    href: "https://www.yathiraj.co.in/#services",
  },
  {
    label: "Projects",
    href: "https://www.yathiraj.co.in/#project",
  },
  {
    label: "Experience Library",
    href: "/",
    active: true,
  },
  {
    label: "About",
    href: "https://www.yathiraj.co.in/#about",
  },
  {
    label: "Contact",
    href: "https://www.yathiraj.co.in/#contact",
  },
];