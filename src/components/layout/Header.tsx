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
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const menuButton = openRef.current;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previous?.focus?.();
      menuButton?.focus();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-[rgba(246,243,238,0.9)] backdrop-blur-md">
      <div className="container-site flex items-center justify-between gap-4 py-4">
        <Link href="/" className="min-w-0">
          <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal">
            {siteConfig.name}
          </span>
          <span className="block truncate text-sm font-semibold text-navy-900 md:text-base">
            {siteConfig.owner}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
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
                  "rounded-full px-3 py-2 text-sm font-medium transition",
                  active
                    ? "bg-navy-900 text-white"
                    : "text-navy-800 hover:bg-white hover:text-teal",
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
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2 text-sm font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-4 w-4" aria-hidden />
          Menu
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 bg-navy-950/55 lg:hidden"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-paper shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <p className="font-semibold text-navy-900">Navigate</p>
              <button
                ref={closeRef}
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2 text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" aria-hidden />
                Close
              </button>
            </div>
            <nav aria-label="Mobile primary" className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
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
                      "rounded-2xl px-4 py-3 text-base font-semibold",
                      active ? "bg-navy-900 text-white" : "bg-white text-navy-900",
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
