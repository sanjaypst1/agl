"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { primaryNav, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("nav-open");
      document.removeEventListener("keydown", onKeyDown);
      previous?.focus?.();
      openRef.current?.focus();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(212,225,234,0.8)] bg-[rgba(250,252,253,0.88)] backdrop-blur-[16px]">
      <div className="container-site flex min-h-[4.5rem] items-center justify-between gap-4 py-3">
        <Link href="/" className="min-w-0 text-navy-900 no-underline hover:text-navy-900">
          <strong className="block font-[family-name:var(--font-display)] text-[0.98rem] font-bold tracking-[-0.02em]">
            {siteConfig.owner}
          </strong>
          <span className="block truncate text-[0.78rem] font-normal text-muted">
            Risk Solutions Lead
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-2.5 py-1.5 text-[0.86rem] font-medium no-underline transition",
                  active
                    ? "bg-sky text-navy-900"
                    : "text-muted hover:bg-sky hover:text-navy-900",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          ref={openRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line bg-white text-navy-900 lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <Menu className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 bg-[rgba(16,42,67,0.35)] lg:hidden"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute inset-y-0 right-0 flex w-full max-w-[22rem] flex-col gap-1 bg-paper p-5 shadow-[var(--shadow)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              className="mb-2 ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl bg-paper-deep text-navy-900"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-5 w-5" aria-hidden />
            </button>
            <nav aria-label="Mobile primary" className="flex flex-1 flex-col gap-1 overflow-y-auto">
              {primaryNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex min-h-11 items-center rounded-[10px] px-2.5 text-base font-medium no-underline",
                      active ? "bg-sky text-navy-900" : "text-navy-900",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
