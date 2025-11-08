import Link from "next/link";
import type { ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const year = new Date().getFullYear();

  return (
    <div className="relative flex min-h-screen flex-col bg-[#98dbc6] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(91,200,172,0.55),_transparent_70%)]" />
      <header className="border-b border-[#5bc8ac]/60 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-5">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e6d72a]"
          >
            女性声優ぐらふ
          </Link>
          <nav className="flex items-center gap-2 text-sm text-slate-600">
            <Link
              href="/"
              className="rounded-full px-3 py-1 text-[#5bc8ac] transition hover:bg-[#e6d72a]/20 hover:text-slate-900"
            >
              グラフ
            </Link>
            <Link
              href="/"
              className="rounded-full px-3 py-1 text-[#f18d9e] transition hover:bg-[#e6d72a]/20 hover:text-slate-900"
            >
              について
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-4xl flex-1 px-5 py-12 md:px-6">
        <div className="relative flex-1 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-lg shadow-[#5bc8ac]/30 backdrop-blur-sm md:p-10">
          <div className="pointer-events-none absolute -left-10 top-10 hidden h-20 w-20 rounded-full bg-[#f18d9e]/50 blur-3xl md:block" />
          <div className="pointer-events-none absolute -right-10 bottom-10 hidden h-16 w-16 rounded-full bg-[#e6d72a]/45 blur-3xl md:block" />
          <div className="relative">{children}</div>
        </div>
      </main>
      <footer className="border-t border-[#5bc8ac]/40 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between px-5 text-xs text-slate-500">
          <span>&copy; {year} 女性声優ぐらふ</span>
          <span className="text-[#5bc8ac]">sasakirione</span>
        </div>
      </footer>
    </div>
  );
}
