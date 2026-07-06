import { createFileRoute } from "@tanstack/react-router";
import { salon } from "@/data/salon";
import { Phone, Mail, MapPin, Facebook, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/hafa-samband")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Hafa samband | Fellsmúli 24, Reykjavík — Trend Hárstudio" },
      {
        name: "description",
        content:
          "Hafðu samband við Trend Hárstudio. Sími 588 0288, Fellsmúli 24, 108 Reykjavík. Opnunartími og staðsetning.",
      },
      { property: "og:title", content: "Hafa samband | Trend Hárstudio" },
    ],
    links: [{ rel: "canonical", href: "/hafa-samband" }],
  }),
});

function ContactPage() {
  return (
    <section className="container-narrow py-14 md:py-20">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.32em] text-accent">Hafa samband</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">Við tökum vel á móti þér</h1>
        <p className="mt-5 text-muted-foreground">
          Tímapantanir fara fram í gegnum Noona. Fyrir aðrar fyrirspurnir er velkomið að hafa
          samband símleiðis eða í gegnum tölvupóst.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <div className="grid gap-3">
            <a
              href={`tel:${salon.phoneE164}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-accent"
            >
              <Phone className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Sími</p>
                <p className="font-medium">{salon.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${salon.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-accent"
            >
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Netfang</p>
                <p className="font-medium break-all">{salon.email}</p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Fellsm%C3%BAli+24%2C+108+Reykjav%C3%ADk"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-accent"
            >
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Heimilisfang
                </p>
                <p className="font-medium">{salon.address}</p>
              </div>
            </a>
            <a
              href={salon.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 hover:border-accent"
            >
              <div className="flex items-center gap-4">
                <Facebook className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Samfélagsmiðlar
                  </p>
                  <p className="font-medium">Facebook</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-serif text-xl">Opnunartími</h2>
            <ul className="mt-4 divide-y divide-border text-sm">
              {salon.hours.map((h) => (
                <li key={h.day} className="flex justify-between py-2">
                  <span>{h.day}</span>
                  <span className="text-muted-foreground">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Kort af Fellsmúla 24"
              src="https://www.google.com/maps?q=Fellsm%C3%BAli%2024%2C%20108%20Reykjav%C3%ADk&output=embed"
              className="block h-80 w-full"
              loading="lazy"
            />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-serif text-xl">Sendu okkur línu</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Fyrir fyrirspurnir utan tímabókana er best að senda okkur tölvupóst eða hringja á
              opnunartíma.
            </p>
            <a
              href={`mailto:${salon.email}`}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Senda tölvupóst
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Fyrir tímapantanir er fljótlegast að bóka beint í gegnum Noona.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
