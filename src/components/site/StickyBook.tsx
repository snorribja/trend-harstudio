import { Link, useRouterState } from "@tanstack/react-router";

export function StickyBook() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/boka") return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center p-3 md:hidden">
      <Link
        to="/boka"
        className="pointer-events-auto inline-flex h-12 w-full max-w-md items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-black/20"
      >
        Bóka tíma
      </Link>
    </div>
  );
}
