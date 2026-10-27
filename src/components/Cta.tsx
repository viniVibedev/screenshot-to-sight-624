import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "paper";

const styles: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-foreground hover:text-ink",
  outline: "border border-foreground/40 text-foreground hover:border-foreground hover:bg-foreground hover:text-ink",
  paper: "bg-ink text-foreground hover:bg-primary hover:text-primary-foreground",
};

const base =
  "inline-flex min-h-12 whitespace-nowrap items-center justify-center gap-3 px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-colors";

/** Link de ação. Se `href` for null, renderiza estado "pendente" (sem destino falso). */
export function Cta({
  href,
  children,
  variant = "primary",
  className,
  external = true,
}: {
  href: string | null;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        title="Link oficial ainda não configurado"
        className={cn(base, styles[variant], "cursor-not-allowed opacity-60 hover:bg-inherit", className)}
      >
        {children}
        <span className="text-[0.6rem] tracking-[0.1em] opacity-80">(em breve)</span>
      </span>
    );
  }
  return (
    <a
      href={href}
      className={cn(base, styles[variant], className)}
      {...(external && href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
