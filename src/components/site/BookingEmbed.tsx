import { salon } from "@/data/salon";
import { ExternalLink } from "lucide-react";

export function BookingEmbed({ url = salon.bookingUrl }: { url?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-secondary/50 px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Bókunarkerfi</p>
          <p className="font-serif text-lg">Noona</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-background px-4 text-xs font-medium hover:border-accent"
        >
          Opna í nýjum glugga <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
      <iframe
        src={url}
        title="Bóka tíma hjá Trend Hárstudio"
        className="block h-[900px] w-full bg-background md:h-[950px]"
        loading="lazy"
      />
    </div>
  );
}
