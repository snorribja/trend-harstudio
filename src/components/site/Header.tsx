import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { salon } from "@/data/salon";
import logoImg from "@/assets/trend_header_logo_transparent.png";

const nav = [
  { to: "/", label: "Heim" },
  { to: "/thjonusta", label: "Þjónusta" },
  { to: "/starfsfolk", label: "Starfsfólk" },
  { to: "/um-okkur", label: "Um okkur" },
  { to: "/hafa-samband", label: "Hafa samband" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex h-12 items-center" onClick={() => setOpen(false)}>
          <img
            src={logoImg}
            alt="Trend Hárstudio"
            width={1377}
            height={356}
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 transition hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/boka"
            className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Bóka tíma
          </Link>
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Valmynd"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="container-narrow flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-foreground/90 hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/boka"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              Bóka tíma
            </Link>
            <a
              href={`tel:${salon.phoneE164}`}
              className="mt-1 rounded-md px-3 py-2 text-center text-sm text-muted-foreground"
            >
              Sími {salon.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
