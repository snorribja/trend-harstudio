import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/salon";
import aflitunImg from "@/assets/service-aflitun.png";
import klippingOgLiturImg from "@/assets/service-klipping-og-litur.png";
import klippingarImg from "@/assets/service-klippingar.png";
import litunImg from "@/assets/service-litun.png";
import stripurImg from "@/assets/service-stripur.png";
import tonerBlasturGreidslaImg from "@/assets/service-toner-blastur-greidsla.png";

export const Route = createFileRoute("/thjonusta")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Þjónusta | Klipping, litun og hárgreiðsla — Trend Hárstudio" },
      {
        name: "description",
        content:
          "Þjónusta Trend Hárstudio: klippingar, litun, strípur, aflitun, tóner, blástur og greiðslur. Bókaðu tíma á netinu í Reykjavík.",
      },
      { property: "og:title", content: "Þjónusta | Trend Hárstudio" },
    ],
    links: [{ rel: "canonical", href: "/thjonusta" }],
  }),
});

const imgs: Record<string, string> = {
  aflitun: aflitunImg,
  "klipping-og-litur": klippingOgLiturImg,
  klippingar: klippingarImg,
  litun: litunImg,
  stripur: stripurImg,
  "toner-blastur-greidsla": tonerBlasturGreidslaImg,
};

function ServicesPage() {
  return (
    <section className="container-narrow py-14 md:py-20">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.32em] text-accent">Þjónusta</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">Þjónustan okkar</h1>
        <p className="mt-5 text-muted-foreground">
          Hér finnur þú helstu þjónustur sem hægt er að bóka hjá Trend Hárstudio, allt frá klippingu
          og litun til strípunar, blásturs og greiðslu.
        </p>
      </div>

      <div className="mt-12 grid auto-rows-fr items-stretch gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <article
            key={s.slug}
            className={`group grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-2xl bg-card shadow-sm md:grid-cols-2 md:grid-rows-1 ${
              i % 2 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden md:aspect-auto md:h-full">
              <img
                src={imgs[s.image]}
                alt={s.title}
                width={900}
                height={1100}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex h-full flex-col p-8">
              <h2 className="font-serif text-2xl">{s.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Link
                  to="/boka"
                  className="inline-flex h-11 w-fit items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Bóka þjónustu
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
