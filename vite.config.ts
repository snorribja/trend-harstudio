import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const base = process.env.BASE_PATH ?? "/";
const normalizedBase = base.endsWith("/") ? base : `${base}/`;
const routerBasepath = normalizedBase === "/" ? undefined : normalizedBase.replace(/\/$/, "");

export default defineConfig({
  base: normalizedBase,
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      router: { basepath: routerBasepath },
      server: { entry: "server" },
      pages: [
        { path: "/" },
        { path: "/boka" },
        { path: "/thjonusta" },
        { path: "/starfsfolk" },
        { path: "/um-okkur" },
        { path: "/hafa-samband" },
        { path: "/sitemap.xml" },
      ],
      prerender: {
        enabled: true,
        crawlLinks: false,
        failOnError: true,
      },
      sitemap: { enabled: false },
    }),
    nitro({ preset: "node-server" }),
    viteReact(),
    tailwindcss(),
  ],
});
