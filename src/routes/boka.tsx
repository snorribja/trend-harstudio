import { createFileRoute } from "@tanstack/react-router";
import { BookingEmbed } from "@/components/site/BookingEmbed";
import { salon } from "@/data/salon";
import { Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/boka")({
  validateSearch: (search: Record<string, unknown>) => ({
    employeeId: typeof search.employeeId === "string" ? search.employeeId : undefined,
  }),
  component: BokaPage,
  head: () => ({
    meta: [
      { title: "Bóka tíma | Trend Hárstudio" },
      {
        name: "description",
        content:
          "Bókaðu tíma hjá Trend Hárstudio í gegnum Noona. Veldu þjónustu, starfsmann og tíma beint á síðunni.",
      },
      { property: "og:title", content: "Bóka tíma | Trend Hárstudio" },
    ],
    links: [{ rel: "canonical", href: "/boka" }],
  }),
});

function BokaPage() {
  const { employeeId } = Route.useSearch();
  const bookingUrl = employeeId
    ? `${salon.bookingUrl}/book?${new URLSearchParams({
        source: "CompanyPageEmployees",
        specificEmployeeRequested: "true",
        employeeId,
      })}`
    : salon.bookingUrl;

  return (
    <section className="container-narrow py-14 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-accent">Bókun</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">Bókaðu tíma hjá Trend Hárstudio</h1>
        <p className="mt-4 text-muted-foreground">
          Hér getur þú bókað tíma beint í gegnum Noona. Veldu þjónustu, starfsmann og tíma sem
          hentar þér.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl">
        <BookingEmbed url={bookingUrl} />
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Bókunarkerfið er hýst af Noona. Ef gluggi birtist ekki, opnaðu bókunina í nýjum flipa.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-3xl gap-4 md:grid-cols-2">
        <a
          href={`tel:${salon.phoneE164}`}
          className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-accent"
        >
          <Phone className="h-5 w-5 text-accent" />
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Símatími</p>
            <p className="font-medium">{salon.phone}</p>
          </div>
        </a>
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
          <MapPin className="h-5 w-5 text-accent" />
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Staðsetning</p>
            <p className="font-medium">{salon.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
