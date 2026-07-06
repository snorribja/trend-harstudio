import { Link } from "@tanstack/react-router";
import { salon } from "@/data/salon";
import logoImg from "@/assets/trend_header_logo_transparent.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-narrow grid gap-10 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex">
            <img
              src={logoImg}
              alt="Trend Hárstudio"
              width={1377}
              height={356}
              className="h-12 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Trend Hárstudio er hárgreiðslustofa í Fellsmúla 24 þar sem þú færð persónulega þjónustu
            í notalegu umhverfi.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Heimilisfang
          </h4>
          <p className="mt-3 text-sm">{salon.street}</p>
          <p className="text-sm">{salon.postal}</p>
          <a href={`tel:${salon.phoneE164}`} className="mt-3 block text-sm hover:text-accent">
            Sími {salon.phone}
          </a>
          <a href={`mailto:${salon.email}`} className="block text-sm hover:text-accent">
            {salon.email}
          </a>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Opnunartími</h4>
          <dl className="mt-3 space-y-2 text-sm">
            {salon.hours.map((item) => (
              <div key={item.day}>
                <dt className="text-muted-foreground">{item.day}</dt>
                <dd>{item.hours}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Vefur</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/thjonusta" className="hover:text-accent">
                Þjónusta
              </Link>
            </li>
            <li>
              <Link to="/starfsfolk" className="hover:text-accent">
                Starfsfólk
              </Link>
            </li>
            <li>
              <Link to="/um-okkur" className="hover:text-accent">
                Um okkur
              </Link>
            </li>
            <li>
              <Link to="/boka" className="hover:text-accent">
                Bóka tíma
              </Link>
            </li>
            <li>
              <a
                href={salon.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-narrow flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Trend Hárstudio. Allur réttur áskilinn.</p>
        </div>
      </div>
    </footer>
  );
}
