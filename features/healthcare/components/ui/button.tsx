import { ArrowRight } from "lucide-react";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-clinic-primary text-white shadow-glow hover:bg-blue-700",

  secondary:
    "border border-clinic-primary/45 bg-white text-clinic-navy hover:border-clinic-primary hover:bg-clinic-lightBlue",

  ghost:
    "text-clinic-navy hover:bg-clinic-lightBlue",

  icon:
    "grid size-11 place-items-center rounded-pill bg-clinic-primary text-white shadow-glow hover:bg-blue-700",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

function getButtonClasses(
  variant: ButtonVariant,
  className?: string
) {
  return `${baseClasses} ${variantClasses[variant]} ${className ?? ""}`;
}

type SharedProps = {
  children?: ReactNode;
  className?: string;
  showArrow?: boolean;
  variant?: ButtonVariant;
};

type ActionButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function ActionButton({
  children,
  className,
  variant = "primary",
  showArrow = false,
  type = "button",
  ...props
}: ActionButtonProps) {
  return (
    <button
      type={type}
      className={getButtonClasses(variant, className)}
      {...props}
    >
      {children}

      {showArrow && (
        <ArrowRight
          aria-hidden="true"
          size={16}
        />
      )}
    </button>
  );
}

export function LinkButton({
  children,
  className,
  href,
  variant = "primary",
  showArrow = false,
  ...props
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={getButtonClasses(variant, className)}
      {...props}
    >
      {children}

      {showArrow && (
        <ArrowRight
          aria-hidden="true"
          size={16}
        />
      )}
    </a>
  );
}