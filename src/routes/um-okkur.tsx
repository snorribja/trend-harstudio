import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about-detail.jpg";
import { Sparkles, MapPin, CalendarCheck, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/um-okkur")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Um okkur | Trend Hárstudio í Fellsmúla" },
      {
        name: "description",
        content:
          "Trend Hárstudio er hárstofa í Fellsmúla 24, Reykjavík. Fagleg þjónusta, þægilegt andrúmsloft og fallegar útkomur.",
      },
      { property: "og:title", content: "Um okkur | Trend Hárstudio" },
    ],
    links: [{ rel: "canonical", href: "/um-okkur" }],
  }),
});

const values = [
  {
    icon: Sparkles,
    title: "Reynslumikið starfsfólk",
    desc: "Hárgreiðslumeistarar með mikla reynslu.",
  },
  { icon: MapPin, title: "Þægileg staðsetning", desc: "Stofan okkar er í Fellsmúli 24." },
  { icon: CalendarCheck, title: "Einföld bókun", desc: "Bókaðu tíma í gegnum netið." },
  { icon: HeartHandshake, title: "Hlýlegt viðmót", desc: "Persónuleg þjónusta og góð upplifun." },
];

function AboutPage() {
  return (
    <>
      <section className="container-narrow grid gap-12 py-14 md:grid-cols-2 md:gap-16 md:py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-accent">Um Trend Hárstudio</p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl">
            Persónuleg hárþjónusta í Fellsmúla
          </h1>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Trend Hárstudio er hárgreiðslustofa í Fellsmúla 24 þar sem við leggjum áherslu á
              persónulega þjónustu, fallega útkomu og að þér líði vel á meðan þú ert hjá okkur.
            </p>
            <p>
              Hvort sem þig vantar klippingu, litun, blástur eða greiðslu fyrir sérstakt tilefni, þá
              tökum við vel á móti þér.
            </p>
          </div>
          <Link
            to="/boka"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground"
          >
            Bóka tíma
          </Link>
        </div>
        <div className="relative">
          <img
            src={aboutImg}
            alt="Vörur og áhöld á Trend Hárstudio"
            width={1200}
            height={1400}
            loading="lazy"
            className="aspect-[5/6] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-narrow">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Hvers vegna Trend?</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Það sem einkennir okkur</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
