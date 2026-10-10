import Link from "next/link";
import { affiliationDisclaimer, primaryNav, secondaryNav, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy-950 text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.14em] text-aqua">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-lg font-semibold">{siteConfig.owner}</p>
          <p className="mt-3 max-w-md text-sm text-white/70">{siteConfig.tagline}</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-aqua">Explore</p>
          <ul className="space-y-2 text-sm text-white/80">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-aqua">Project</p>
          <ul className="space-y-2 text-sm text-white/80">
            {secondaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site space-y-3 py-6 text-xs leading-relaxed text-white/60">
          <p>{affiliationDisclaimer}</p>
          <p>
            © {new Date().getFullYear()} {siteConfig.owner}. Independent professional portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
}
