import corte2 from "@/assets/2.jpg";
import corte1 from "@/assets/1.jpg";
import semTitulo from "@/assets/Sem título.jpg";
import barba from "@/assets/barbitav2.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Cta } from "@/components/Cta";
import { business, links, services, hours, team, rating, reviews, whatsappUrl } from "@/data/dogson";
import hero from "@/assets/Sem título.jpg";
import ferramentas from "@/assets/ferramentas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dogson Barbearia | Taboão da Serra – SP" },
      {
        name: "description",
        content:
          "Barbearia em Taboão da Serra: corte degradê, barba e acabamento. Confira serviços, valores e localização da Dogson Barbearia.",
      },
      { property: "og:title", content: "Dogson Barbearia | Taboão da Serra – SP" },
      { property: "og:description", content: "Corte, barba e acabamento nos detalhes, em Taboão da Serra." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
];

const brl = (n: number) => `R$ ${n}`;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-ink/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <a href="#topo" className="group flex items-center gap-3" aria-label="Dogson Barbearia — início">
          <span className="flex h-10 w-10 items-center justify-center border border-primary/70 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <span className="display text-xl">D</span>
          </span>
          <span className="flex flex-col gap-1">
            <span className="display text-2xl leading-none tracking-wide">Dogson</span>
            <span className="eyebrow text-[0.56rem]">Barbearia</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-9">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="group relative py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                  <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Cta href={links.booking} className="min-h-11 px-5">Agendar horário <span aria-hidden>↗</span></Cta>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-foreground/15 transition-colors hover:border-primary md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu principal para celular" className="border-t border-foreground/10 bg-ink px-5 pb-6 md:hidden">
          <ul>
            {nav.map((n, i) => (
              <li key={n.href} className="border-b border-foreground/10">
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4"
                >
                  <span className="display text-3xl">{n.label}</span>
                  <span className="eyebrow text-primary">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <Cta href={links.booking} className="mt-6 w-full">Agendar meu horário <span aria-hidden>↗</span></Cta>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-ink">
      <div className="mx-auto grid max-w-7xl md:min-h-[690px] md:grid-cols-12">
        <div className="relative z-10 order-2 flex flex-col items-start px-5 pb-14 pt-10 sm:pb-16 md:order-1 md:col-span-5 md:justify-center md:px-8 md:py-20">
          <p className="eyebrow mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span>Taboão da Serra · SP</span>
          </p>
          <h1 className="display max-w-2xl text-[clamp(3.4rem,9.5vw,6.7rem)] leading-[0.88]">
            Seu estilo fala <span className="text-primary">antes de você.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg">
            Corte alinhado, barba no capricho e atenção aos detalhes. Traga sua referência e encontre um visual com a sua personalidade.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:mt-10 md:flex-col lg:flex-row">
            <Cta href={links.booking} className="w-full sm:w-auto">Agendar meu horário <span aria-hidden>↗</span></Cta>
            <Cta href="#servicos" variant="outline" external={false} className="w-full sm:w-auto">Ver serviços <span aria-hidden>↓</span></Cta>
          </div>
          <div className="mt-9 flex items-center gap-3 border-t border-foreground/10 pt-5">
            <span className="flex h-8 w-8 items-center justify-center border border-primary/40 text-primary" aria-hidden>✦</span>
            <p className="eyebrow !text-foreground/75">Seu estilo. Sem atalhos.</p>
          </div>
        </div>

        <div className="relative order-1 min-h-[300px] overflow-hidden sm:min-h-[390px] md:order-2 md:col-span-7 md:min-h-[690px]">
          <img
            src={hero}
            width={1600}
            height={1104}
            alt="Barbeiro finalizando um degradê na nuca de um cliente com máquina; imagem demonstrativa"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/5 md:bg-gradient-to-r md:from-ink/45 md:via-transparent md:to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 md:bottom-8 md:left-8 md:right-8">
            <div>
              <p className="eyebrow text-white/75">Corte · Barba · Acabamento</p>
              <p className="display mt-2 text-2xl text-white sm:text-3xl">Feito para o seu estilo</p>
            </div>
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center border border-white/50 text-xl text-white sm:flex" aria-hidden>↗</span>
          </div>
          <span className="absolute right-5 top-5 border border-white/35 bg-ink/35 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm md:right-8 md:top-8">
            Dogson Barbearia
          </span>
        </div>
      </div>
    </section>
  );
}

function Strip() {
  return (
    <div className="border-y border-foreground/10 bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center gap-2 px-5 py-5 md:px-8 md:py-7">
        <p className="display text-center text-[clamp(1.05rem,3.5vw,2.8rem)] text-foreground sm:text-left">Corte</p>
        <p className="display text-center text-[clamp(1.05rem,3.5vw,2.8rem)] text-muted-foreground">Barba <span className="text-primary">/</span></p>
        <p className="display text-center text-[clamp(1.05rem,3.5vw,2.8rem)] text-foreground sm:text-right">Acabamento</p>
      </div>
    </div>
  );
}

function Services() {
  const singles = services.filter((s) => !s.combo);
  const combos = services.filter((s) => s.combo);

  return (
    <section id="servicos" className="scroll-mt-20 bg-paper text-paper-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="mb-12 flex flex-col gap-5 border-b border-paper-foreground/15 pb-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5 !text-paper-foreground/60">01 / Serviços</p>
            <h2 className="display text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.92]">Seu próximo visual começa aqui.</h2>
          </div>
          <p className="max-w-sm leading-relaxed text-paper-foreground/70">
            Do degradê ao corte clássico, escolha o serviço que combina com você. O valor final deve ser confirmado diretamente com a barbearia.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-paper-foreground/20 text-sm font-semibold">01</span>
              <h3 className="eyebrow !text-paper-foreground/65">Combos e experiências</h3>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper-foreground/65">Combinações para cuidar de mais detalhes em uma só visita.</p>
            <div className="mt-8 hidden aspect-[4/5] overflow-hidden md:block">
              <img src={ferramentas} loading="lazy" width={1280} height={1024} alt="Ferramentas de barbearia sobre uma bancada; imagem demonstrativa" className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
            </div>
          </div>

          <div className="md:col-span-8">
            <ul className="divide-y divide-paper-foreground/15 border-t border-paper-foreground/15">
              {combos.map((s, i) => (
                <li
                  key={s.name}
                  className={`group flex items-center gap-3 py-5 transition-colors sm:gap-5 sm:py-6 ${s.highlight ? "-mx-3 border-l-2 border-primary bg-ink px-3 text-foreground sm:-mx-5 sm:px-5" : "hover:bg-paper-foreground/[0.035]"}`}
                >
                  <span className="hidden w-6 shrink-0 text-xs text-paper-foreground/40 sm:block">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-base font-semibold sm:text-xl">{s.name}</span>
                    {s.desc && <span className="mt-1 text-xs leading-relaxed opacity-65 sm:text-sm">{s.desc}</span>}
                  </span>
                  {s.highlight && <span className="hidden shrink-0 border border-primary/40 px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-primary sm:inline">Destaque</span>}
                  <span className="display shrink-0 whitespace-nowrap text-xl text-primary sm:text-2xl">{brl(s.price)}</span>
                </li>
              ))}
            </ul>

            <div className="mb-4 mt-12 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-paper-foreground/20 text-sm font-semibold">02</span>
              <h3 className="eyebrow !text-paper-foreground/65">Serviços individuais</h3>
            </div>
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {singles.map((s) => (
                <li key={s.name} className="flex items-start justify-between gap-3 border-b border-paper-foreground/15 py-4 transition-colors hover:border-primary/60">
                  <span className="flex min-w-0 flex-col">
                    <span className="text-sm font-medium sm:text-base">{s.name}</span>
                    {s.desc && <span className="mt-1 text-xs leading-relaxed text-paper-foreground/60">{s.desc}</span>}
                  </span>
                  <span className="display shrink-0 whitespace-nowrap text-lg text-paper-foreground sm:text-xl">{brl(s.price)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Cta href={links.booking} variant="paper">Agendar meu horário <span aria-hidden>↗</span></Cta>
              <p className="max-w-xs text-xs leading-relaxed text-paper-foreground/60">Valores provisórios: confirme os preços diretamente com a Dogson antes de se deslocar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          <div className="relative md:col-span-5">
            <div className="absolute -bottom-3 -right-3 h-2/3 w-2/3 border-b border-r border-primary/50" aria-hidden />
            <img
              src={ambiente}
              width={1024}
              height={1280}
              loading="lazy"
              alt="Cadeira de barbeiro em couro em ambiente com luz quente; imagem demonstrativa"
              className="relative aspect-[4/5] w-full object-cover"
            />
            <p className="absolute bottom-4 left-4 bg-ink/85 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">O cuidado está nos detalhes</p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow mb-5">02 / Sobre a Dogson</p>
            <h2 className="display text-[clamp(2.9rem,7vw,5.7rem)] leading-[0.9]">
              Mais que um corte. <span className="text-primary">É o seu jeito.</span>
            </h2>
            <div className="mt-7 max-w-md space-y-4 leading-relaxed text-muted-foreground">
              <p>Cada pessoa tem seu estilo. Chegue com sua referência, troque uma ideia e encontre um visual que combine com você.</p>
              <p>Na Dogson, o objetivo é cuidar do corte, dos acabamentos e dos detalhes para que você saia com um visual que tenha a sua cara.</p>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-foreground/10 pt-5">
              <span className="display text-3xl text-primary" aria-hidden>DS</span>
              <p className="eyebrow">Seu estilo. Sem atalhos.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-foreground/10 pt-12 sm:mt-28 md:pt-16">
          <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5">03 / Equipe</p>
              <h2 className="display text-[clamp(2.7rem,6vw,4.8rem)] leading-[0.92]">Quem cuida do seu visual.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Conheça a equipe da Dogson. Fotos e informações individuais podem ser adicionadas quando estiverem disponíveis.</p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <li key={m.name} className="group border border-foreground/10 bg-ink/35 p-4 transition-colors hover:border-primary/50 sm:p-5">
                {m.photo ? (
                  <img src={m.photo} alt={`${m.name}, barbeiro da Dogson`} loading="lazy" className="mb-5 aspect-[4/3] w-full object-cover" />
                ) : (
                  <div className="mb-5 flex aspect-[4/3] items-center justify-center border border-foreground/10 bg-gradient-to-br from-ink via-background to-ink" aria-hidden>
                    <span className="display text-7xl text-primary/80 transition-transform duration-300 group-hover:scale-110">{m.name.charAt(0)}</span>
                  </div>
                )}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="display text-3xl sm:text-4xl">{m.name}</h3>
                    {m.nickname && <p className="mt-2 text-sm text-muted-foreground">{m.nickname}</p>}
                    {m.bio && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>}
                  </div>
                  <span className="eyebrow pt-1 text-primary">0{i + 1}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-20 border-y border-foreground/10 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">04 / Galeria</p>
            <h2 className="display text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.9]">Inspiração para o próximo corte.</h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">Salve uma referência, traga sua ideia e converse com o barbeiro sobre o visual que deseja.</p>
          </div>
          <div className="max-w-xs border-l-2 border-primary pl-4">
            <p className="eyebrow !text-primary">Referências de estilo</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Imagens ilustrativas. Elas não representam trabalhos realizados pela Dogson.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
          <figure className="group relative col-span-2 overflow-hidden md:col-span-8 md:row-span-2">
            <img src={hero} loading="lazy" width={1600} height={1104} alt="Degradê sendo finalizado com máquina; imagem de referência" className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] md:aspect-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
              <span className="display text-2xl text-white sm:text-4xl">Degradê</span>
              <span className="eyebrow text-white/80">01 / 03</span>
            </figcaption>
          </figure>
          <figure className="group relative overflow-hidden md:col-span-4">
            <img src={barba} loading="lazy" width={1024} height={1280} alt="Barba curta com contorno marcado; imagem de referência" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <figcaption className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 sm:bottom-5 sm:left-5 sm:right-5">
              <span className="display text-xl text-white sm:text-3xl">Barba</span>
              <span className="eyebrow text-white/80">02 / 03</span>
            </figcaption>
          </figure>
          <figure className="group relative overflow-hidden md:col-span-4">
            <img src={ferramentas} loading="lazy" width={1280} height={1024} alt="Ferramentas de barbearia em bancada; imagem de referência" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:aspect-[5/4]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <figcaption className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 sm:bottom-5 sm:left-5 sm:right-5">
              <span className="display text-xl text-white sm:text-3xl">Precisão</span>
              <span className="eyebrow text-white/80">03 / 03</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <p className="eyebrow mb-5">05 / Avaliações</p>
          <h2 className="display text-[clamp(2.8rem,6.5vw,5rem)] leading-[0.92]">A experiência também faz parte do corte.</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">Veja as opiniões publicadas por clientes e tire suas dúvidas antes de agendar.</p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="border border-foreground/10 bg-ink/40 p-6 sm:p-8">
            {rating && (
              <div className="mb-7 flex flex-wrap items-end gap-x-4 gap-y-2 border-b border-foreground/10 pb-6">
                <span className="display text-6xl text-primary sm:text-7xl">{rating.score}</span>
                <div className="pb-1">
                  <p className="text-primary" aria-label="Avaliação média">★★★★★</p>
                  <p className="mt-1 text-xs text-muted-foreground">{rating.count} avaliações no Google</p>
                </div>
              </div>
            )}
            {reviews.length > 0 ? (
              <ul className="space-y-7">
                {reviews.map((r) => (
                  <li key={r.author} className="border-l-2 border-primary pl-5">
                    <blockquote className="text-base leading-relaxed sm:text-lg">“{r.text}”</blockquote>
                    <p className="eyebrow mt-4">{r.author}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <span className="display text-4xl text-primary" aria-hidden>“ ”</span>
                <p className="mt-2 leading-relaxed text-muted-foreground">As avaliações de clientes podem ser consultadas no perfil da Dogson no Google.</p>
              </div>
            )}
            {links.googleProfile && (
              <a href={links.googleProfile} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-3 border-b border-primary pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-primary">
                Ver avaliações no Google <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  const a = business.address;

  return (
    <section id="localizacao" className="scroll-mt-20 border-t border-foreground/10 bg-ink/45">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 md:grid-cols-12 md:gap-14 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow mb-5">06 / Localização e contato</p>
          <h2 className="display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.9]">Seu próximo corte tem endereço.</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">Encontre a Dogson, veja como chegar e consulte os horários disponíveis na agenda online.</p>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex h-10 w-10 items-center justify-center border border-primary/40 text-primary" aria-hidden>⌖</span>
            <span>{business.city}</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:col-span-7">
          <div className="border border-foreground/10 bg-background/50 p-5 sm:p-7">
            <p className="eyebrow mb-5 text-primary">Endereço</p>
            <address className="not-italic text-lg leading-relaxed sm:text-xl">
              {a.street}<br />{a.district}<br />{a.city}<br /><span className="mt-2 inline-block text-sm text-muted-foreground">CEP {a.zip}</span>
            </address>
            <Cta href={links.maps} variant="outline" className="mt-7 w-full">Como chegar <span aria-hidden>↗</span></Cta>
          </div>

          <div className="border border-foreground/10 bg-background/50 p-5 sm:p-7">
            <p className="eyebrow mb-5 text-primary">Horários</p>
            {hours ? (
              <dl className="space-y-3">
                {hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-3 border-b border-foreground/10 pb-2 text-sm">
                    <dt>{h.days}</dt><dd className="text-right text-muted-foreground">{h.time}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="text-sm leading-relaxed text-muted-foreground">Consulte os horários disponíveis diretamente na agenda online.</p>
            )}
            <div className="mt-8 border-t border-foreground/10 pt-6">
              <p className="eyebrow mb-4">Fale com a Dogson</p>
              <Cta href={whatsappUrl} variant="outline" className="w-full">WhatsApp <span aria-hidden>↗</span></Cta>
              {links.instagram && (
                <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline">Acompanhar no Instagram ↗</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute -right-16 -top-20 select-none opacity-[0.08]" aria-hidden>
        <span className="display text-[20rem] leading-none">D</span>
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:py-20 md:flex-row md:items-end md:justify-between md:gap-10 md:px-8 md:py-24">
        <div>
          <p className="eyebrow mb-5 !text-primary-foreground/70">Seu próximo visual começa com uma escolha</p>
          <h2 className="display max-w-3xl text-[clamp(3.2rem,8vw,6.7rem)] leading-[0.88]">Bora renovar o visual?</h2>
          <p className="mt-6 max-w-md leading-relaxed text-primary-foreground/80">Escolha seu serviço, encontre um horário na agenda e venha cuidar do seu estilo na Dogson Barbearia.</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <Cta href={links.booking} variant="paper">Agendar meu horário <span aria-hidden>↗</span></Cta>
          <Cta href={whatsappUrl} variant="paper">Falar no WhatsApp <span aria-hidden>↗</span></Cta>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const a = business.address;

  return (
    <footer className="bg-ink pb-24 md:pb-0">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="grid gap-8 border-b border-foreground/10 pb-9 md:grid-cols-3 md:items-start">
          <div>
            <a href="#topo" className="inline-flex items-center gap-3" aria-label="Voltar ao início">
              <span className="flex h-9 w-9 items-center justify-center border border-primary/70 text-primary"><span className="display text-lg">D</span></span>
              <span className="display text-3xl">Dogson Barbearia</span>
            </a>
            <p className="eyebrow mt-4 !text-primary">Seu estilo. Sem atalhos.</p>
            <p className="mt-2 text-sm text-muted-foreground">{business.city}</p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{a.street}<br />{a.district}<br />{a.city}, CEP {a.zip}</p>
          <div className="flex flex-col gap-3 text-sm md:items-end">
            {links.instagram && <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">Instagram ↗</a>}
            {links.booking && <a href={links.booking} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">Agendamento ↗</a>}
            {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">WhatsApp ↗</a>}
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dogson Barbearia. Todos os direitos reservados.</p>
          <a href="#topo" className="w-fit transition-colors hover:text-foreground">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-foreground/15 bg-ink/95 p-3 backdrop-blur-xl md:hidden">
      <Cta href={links.booking} className="w-full">Agendar meu horário <span aria-hidden>↗</span></Cta>
    </div>
  );
}


function Index() {
  // Animacoes das secoes ao rolar a pagina
  useEffect(() => {
    const sections = document.querySelectorAll("main section");

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((section) => {
      section.classList.add("reveal-on-scroll");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Tesoura que acompanha a rolagem
  useEffect(() => {
    const progressLine = document.querySelector<HTMLElement>(
      ".dogson-scissor-progress"
    );
    const scissors = document.querySelector<HTMLElement>(
      ".dogson-scissor-icon"
    );

    if (!progressLine || !scissors) return;

    const updateProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        maxScroll > 0
          ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
          : 0;

      progressLine.style.height = `${progress * 100}%`;
      scissors.style.top = `${progress * 100}%`;
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strip />
        <Services />
        <About />
        <Gallery />
        <Reviews />
        <Location />
        <FinalCta />
      </main>
     <Footer />
      <MobileBar />

      <div className="dogson-scissor-track" aria-hidden="true">
        <div className="dogson-scissor-line" />
        <div className="dogson-scissor-progress" />

        <span className="dogson-scissor-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff2b8" />
                <stop offset="35%" stopColor="#e8c66f" />
                <stop offset="65%" stopColor="#a87923" />
                <stop offset="100%" stopColor="#f9df91" />
              </linearGradient>
            </defs>

            <g
              fill="none"
              stroke="url(#gold)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="16" r="8" />
              <circle cx="12" cy="48" r="8" />
              <path d="M18 21 L56 7 L29 32 L18 43" />
              <path d="M18 43 L56 57 L29 32 L18 21" />
              <circle cx="29" cy="32" r="3" fill="#e8c66f" />
            </g>

            <g stroke="#fff2b8" strokeWidth="1" opacity="0.8">
              <path d="M35 24 L51 12" />
              <path d="M35 40 L51 52" />
            </g>
          </svg>
        </span>
      </div>
    </>
  );
}
