import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import appleTouchIcon from "@/assets/favicon-180x180.png";
import favicon16 from "@/assets/favicon-16x16.png";
import favicon32 from "@/assets/favicon-32x32.png";
import faviconIco from "@/assets/favicon.ico";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyBook } from "@/components/site/StickyBook";
import { salon } from "@/data/salon";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">404</p>
      <h1 className="mt-3 font-serif text-4xl">Síðan finnst ekki</h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">
        Síðan sem þú leitar að er ekki til eða hefur verið færð.
      </p>
      <a
        href="/"
        className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
      >
        Fara á forsíðu
      </a>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl">Eitthvað fór úrskeiðis</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Reyndu að endurhlaða síðunni eða farðu á forsíðu.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
          >
            Reyna aftur
          </button>
          <a
            href="/"
            className="inline-flex h-10 items-center rounded-full border border-input bg-background px-5 text-sm font-medium"
          >
            Forsíða
          </a>
        </div>
      </div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: salon.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: salon.street,
    postalCode: "108",
    addressLocality: "Reykjavík",
    addressCountry: "IS",
  },
  telephone: salon.phoneE164,
  email: salon.email,
  url: "/",
  openingHours: ["Mo-Fr 09:00-18:00"],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Trend Hárstudio | Hárstofa í Reykjavík" },
      {
        name: "description",
        content:
          "Trend Hárstudio er hárstofa í Fellsmúla 24 í Reykjavík. Bókaðu tíma í gegnum netið fyrir klippingu, litun og hárþjónustu.",
      },
      { property: "og:site_name", content: "Trend Hárstudio" },
      { property: "og:title", content: "Trend Hárstudio | Hárstofa í Reykjavík" },
      {
        property: "og:description",
        content: "Nútímaleg hárstofa í Fellsmúla 24, Reykjavík. Bókaðu tíma beint á netinu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#FAF7F2" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: faviconIco, type: "image/x-icon" },
      { rel: "icon", href: favicon16, type: "image/png", sizes: "16x16" },
      { rel: "icon", href: favicon32, type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: appleTouchIcon, sizes: "180x180" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="is">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pb-24 md:pb-0">
          <Outlet />
        </main>
        <Footer />
        <StickyBook />
      </div>
    </QueryClientProvider>
  );
}
