import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import aflitunImg from "@/assets/service-aflitun.png";
import klippingOgLiturImg from "@/assets/service-klipping-og-litur.png";
import klippingarImg from "@/assets/service-klippingar.png";
import litunImg from "@/assets/service-litun.png";
import stripurImg from "@/assets/service-stripur.png";
import tonerBlasturGreidslaImg from "@/assets/service-toner-blastur-greidsla.png";
import { salon, services, staff } from "@/data/salon";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Trend Hárstudio | Hárstofa í Reykjavík" },
      {
        name: "description",
        content:
          "Nútímaleg hárgreiðslustofa í Fellsmúla 24, Reykjavík. Klipping, litun og greiðslur. Bókaðu tíma í gegnum netið.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const serviceImages: Record<string, string> = {
  aflitun: aflitunImg,
  "klipping-og-litur": klippingOgLiturImg,
  klippingar: klippingarImg,
  litun: litunImg,
  stripur: stripurImg,
  "toner-blastur-greidsla": tonerBlasturGreidslaImg,
};

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-narrow grid items-center gap-10 pt-10 pb-16 md:grid-cols-2 md:gap-16 md:pt-20 md:pb-28">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Fellsmúli · Reykjavík</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Nútímaleg hárgreiðslustofa <span className="italic text-brown">í Reykjavík</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
              Við tökum vel á móti þér á Trend Hárstudio í Fellsmúla 24, þar sem við leggjum áherslu
              á góða þjónustu, fallegt hár og notalega upplifun.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/boka"
                className="inline-flex h-12 items-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Bóka tíma
              </Link>
              <Link
                to="/hafa-samband"
                className="inline-flex h-12 items-center rounded-full border border-border bg-background px-7 text-sm font-medium transition hover:border-accent"
              >
                Hafa samband
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/20 blur-2xl" />
            <img
              src={heroImg}
              alt="Innréttingar Trend Hárstudio í Fellsmúla, Reykjavík"
              width={1600}
              height={1100}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="container-narrow grid gap-px overflow-hidden md:grid-cols-3">
          {[
            { icon: MapPin, title: "Fellsmúli 24", sub: "108 Reykjavík" },
            { icon: Phone, title: salon.phone, sub: "Beint samband" },
            { icon: Clock, title: "Virka daga", sub: "09:00–18:00" },
          ].map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-4 bg-background/60 px-5 py-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-narrow py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Um stofuna</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Fagleg þjónusta í notalegu umhverfi
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Trend Hárstudio er hárgreiðslustofa í Fellsmúla 24 þar sem við leggjum áherslu á
              persónulega þjónustu, fallega útkomu og að þér líði vel frá því þú kemur inn þar til
              þú ferð út.
            </p>
            <p>
              Hvort sem þú ert að koma í klippingu, litun, blástur eða undirbúning fyrir sérstakt
              tilefni, þá tökum við vel á móti þér.
            </p>
            <Link
              to="/um-okkur"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
            >
              Lesa meira um okkur <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/40 py-14 md:py-20">
        <div className="container-narrow">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Þjónusta</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">Eftir hverju ertu að leita?</h2>
            </div>
            <Link to="/thjonusta" className="text-sm hover:text-accent">
              Öll þjónusta →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <article key={s.slug} className="group overflow-hidden rounded-2xl bg-card shadow-sm">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={serviceImages[s.image]}
                    alt={s.title}
                    width={900}
                    height={1100}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <Link
                    to="/boka"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
                  >
                    Bóka þjónustu <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="container-narrow py-14 md:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-24">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Bókun</p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl">Tilbúin/n að bóka tíma?</h2>
            <p className="mt-4 text-primary-foreground/80">
              Veldu þjónustu, starfsmann og tíma sem hentar þér.
            </p>
            <Link
              to="/boka"
              className="mt-8 inline-flex h-12 items-center rounded-full bg-accent px-7 text-sm font-medium text-accent-foreground transition hover:bg-accent/90"
            >
              Bóka núna
            </Link>
          </div>
        </div>
      </section>

      {/* STAFF PREVIEW */}
      <section className="container-narrow pb-16 md:pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Starfsfólk</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Fólkið á bak við Trend</h2>
          </div>
          <Link to="/starfsfolk" className="text-sm hover:text-accent">
            Sjá allt starfsfólk →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {staff.slice(0, 4).map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 font-serif text-xl">
                {p.name.charAt(0)}
              </div>
              <p className="mt-4 font-medium">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
