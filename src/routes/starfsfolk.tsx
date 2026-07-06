import { createFileRoute, Link } from "@tanstack/react-router";
import { staff } from "@/data/salon";

export const Route = createFileRoute("/starfsfolk")({
  component: StaffPage,
  head: () => ({
    meta: [
      { title: "Starfsfólk | Trend Hárstudio" },
      {
        name: "description",
        content:
          "Kynntu þér starfsfólk Trend Hárstudio — reyndir hárgreiðslumeistarar í Fellsmúla, Reykjavík.",
      },
      { property: "og:title", content: "Starfsfólk | Trend Hárstudio" },
    ],
    links: [{ rel: "canonical", href: "/starfsfolk" }],
  }),
});

function StaffPage() {
  return (
    <section className="container-narrow py-14 md:py-20">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.32em] text-accent">Starfsfólk</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">Starfsfólkið okkar</h1>
        <p className="mt-5 text-muted-foreground">
          Hjá Trend Hárstudio tekur reynslumikið starfsfólk vel á móti þér.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {staff.map((p) => (
          <article
            key={p.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={p.image}
                alt={p.name}
                width={640}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 text-left">
              <h2 className="font-serif text-xl">{p.name}</h2>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{p.role}</p>
              <p className="mt-4 flex-1 text-sm text-muted-foreground">{p.bio}</p>
              <Link
                to="/boka"
                search={{ employeeId: p.employeeId }}
                className="mt-6 inline-flex h-10 w-fit items-center rounded-full border border-border px-5 text-sm hover:border-accent"
              >
                Bóka hjá {p.name}
              </Link>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground">
        Veldu starfsmann í Noona og sjáðu lausa tíma fyrir þjónustuna sem hentar þér.
      </p>
    </section>
  );
}
