import Link from "next/link";
import {
  affiliationDisclaimer,
  primaryNav,
  secondaryNav,
  siteConfig,
} from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer border-t border-line py-8 pb-12 text-[0.9rem] text-muted">
      <div className="container-site grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-[family-name:var(--font-display)] text-base font-bold text-navy-900">
            {siteConfig.owner}
          </p>
          <p className="mt-1 text-sm">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed">{siteConfig.tagline}</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-navy-900">Explore</p>
          <ul className="space-y-2 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted no-underline hover:text-navy-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-navy-900">Project</p>
          <ul className="space-y-2 text-sm">
            {secondaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted no-underline hover:text-navy-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-site mt-8 space-y-2 border-t border-line pt-6 text-xs leading-relaxed">
        <p>{affiliationDisclaimer}</p>
        <p>
          © {new Date().getFullYear()} {siteConfig.owner}. Independent professional portfolio.
        </p>
      </div>
    </footer>
  );
}
