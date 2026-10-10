import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-800 shadow-[0_12px_30px_rgba(12,27,46,0.18)]",
  secondary:
    "bg-white text-navy-900 border border-line hover:border-teal hover:text-teal",
  ghost: "bg-transparent text-navy-900 hover:bg-white/70",
} as const;

type Variant = keyof typeof variants;

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common & { href: string; target?: string; rel?: string };

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
