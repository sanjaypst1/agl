import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-navy-900 text-white hover:bg-navy-800 hover:text-white",
  secondary:
    "border border-line bg-[rgba(255,255,255,0.8)] text-navy-900 hover:border-teal hover:text-navy-900",
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
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-transparent px-[1.15rem] py-[0.7rem] text-sm font-semibold no-underline transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue",
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
