import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Cta } from "@/components/Cta";
import { business, links, services, hours, team, rating, reviews, whatsappUrl } from "@/data/dogson";
import hero from "@/assets/hero.jpg";
import ambiente from "@/assets/ambiente.jpg";
import ferramentas from "@/assets/ferramentas.jpg";
import barba from "@/assets/barba.jpg";

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
    <header className="sticky top-0 z-40 border-b bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <a href="#topo" className="flex items-baseline gap-2" aria-label="Dogson Barbearia — início">
          <span className="display text-2xl">Dogson</span>
          <span className="eyebrow text-[0.6rem]">Barbearia</span>
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Cta href={links.booking} className="min-h-10 px-5">Agendar horário</Cta>
        </div>
        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Menu" className="border-t px-5 pb-6 md:hidden">
          <ul>
            {nav.map((n) => (
              <li key={n.href} className="border-b">
                <a href={n.href} onClick={() => setOpen(false)} className="display block py-4 text-3xl">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <Cta href={links.booking} className="mt-6 w-full">Agendar horário</Cta>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative">
      <div className="mx-auto grid max-w-7xl md:grid-cols-12">
        <div className="relative order-2 px-5 pb-14 pt-10 md:order-1 md:col-span-5 md:px-8 md:pb-20 md:pt-24">
          <p className="eyebrow mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" /> {business.city}
          </p>
          <h1 className="display text-[clamp(3.6rem,13vw,8.5rem)] md:-mr-40 md:relative md:z-10">
            Seu estilo.<br />
            <span className="text-primary">Sem atalhos.</span>
          </h1>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">
            Corte, barba e acabamento nos detalhes. Encontre seu próximo horário na Dogson Barbearia, em Taboão da Serra.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Cta href={links.booking}>Agendar horário</Cta>
            <Cta href="#servicos" variant="outline" external={false}>Conhecer serviços</Cta>
          </div>
        </div>
        <div className="order-1 md:order-2 md:col-span-7">
          <img
            src={hero}
            width={1600}
            height={1104}
            alt="Barbeiro finalizando um degradê na nuca de um cliente com máquina (imagem demonstrativa)"
            className="aspect-[4/3] h-full w-full object-cover md:aspect-auto md:min-h-[720px]"
          />
        </div>
      </div>
    </section>
  );
}

function Strip() {
  return (
    <div className="border-y bg-ink">
      <p className="display mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-6 text-[clamp(1.6rem,5vw,3.5rem)] text-muted-foreground md:px-8">
        <span className="text-foreground">Corte</span>
        <span aria-hidden className="text-primary">/</span>
        <span>Barba</span>
        <span aria-hidden className="text-primary">/</span>
        <span className="text-foreground">Acabamento</span>
      </p>
    </div>
  );
}

function Services() {
  const singles = services.filter((s) => !s.combo);
  const combos = services.filter((s) => s.combo);
  return (
    <section id="servicos" className="bg-paper text-paper-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-6 !text-paper-foreground/60">01 — Serviços</p>
            <h2 className="display text-[clamp(3rem,8vw,5.5rem)]">O que vai ser hoje?</h2>
            <p className="mt-6 max-w-xs text-paper-foreground/70">Escolha seu serviço e consulte os valores.</p>
          </div>
          <div className="md:col-span-8 md:pl-8">
            <h3 className="eyebrow mb-2 !text-paper-foreground/60">Combinados</h3>
            <ul className="mb-14">
              {combos.map((s) => (
                <li
                  key={s.name}
                  className={`flex items-baseline gap-4 border-b border-paper-foreground/15 py-5 ${s.highlight ? "bg-ink px-4 text-foreground md:px-6" : ""}`}
                >
                  <span className="text-lg font-semibold md:text-2xl">{s.name}</span>
                  {s.highlight && <span className="eyebrow !text-primary">Mais pedido</span>}
                  <span aria-hidden className="flex-1 border-b border-dotted border-current opacity-30" />
                  <span className="display text-2xl md:text-3xl">{brl(s.price)}</span>
                </li>
              ))}
            </ul>
            <h3 className="eyebrow mb-2 !text-paper-foreground/60">Individuais</h3>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {singles.map((s) => (
                <li key={s.name} className="flex items-baseline justify-between gap-4 border-b border-paper-foreground/15 py-4">
                  <span>{s.name}</span>
                  <span className="display text-xl">{brl(s.price)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Cta href={links.booking} variant="paper">Agendar horário</Cta>
              <p className="text-xs text-paper-foreground/60">Valores sujeitos a confirmação no atendimento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <img
          src={ambiente}
          width={1024}
          height={1280}
          loading="lazy"
          alt="Cadeira de barbeiro em couro em ambiente com luz quente (imagem demonstrativa)"
          className="aspect-[4/5] w-full object-cover md:col-span-5"
        />
        <div className="md:col-span-6 md:col-start-7 md:pb-10">
          <p className="eyebrow mb-6">02 — Sobre</p>
          <h2 className="display text-[clamp(2.8rem,7vw,5rem)]">
            Na cadeira, cada detalhe <span className="text-primary">conta.</span>
          </h2>
          <div className="mt-8 max-w-md space-y-4 leading-relaxed text-muted-foreground">
            <p>A linha do degradê, o contorno da barba, o pezinho bem feito. É no acabamento que um corte se resolve.</p>
            <p>Na Dogson, você chega, conversa sobre o que quer e sai com um corte pensado para o seu estilo — não para o de outra pessoa.</p>
          </div>
        </div>
      </div>

      <div className="mt-24 md:mt-36">
        <p className="eyebrow mb-6">03 — Equipe</p>
        <h2 className="display mb-10 text-[clamp(2.4rem,6vw,4rem)]">Quem cuida do corte.</h2>
        <ul className="grid border-t sm:grid-cols-3">
          {team.map((m, i) => (
            <li key={m.name} className="border-b py-8 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
              {m.photo ? (
                <img src={m.photo} alt={`${m.name}, barbeiro da Dogson`} loading="lazy" className="mb-6 aspect-[3/4] w-full object-cover" />
              ) : null}
              <span className="eyebrow">0{i + 1}</span>
              <h3 className="display mt-3 text-5xl">{m.name}</h3>
              {m.nickname && <p className="mt-2 text-muted-foreground">{m.nickname}</p>}
              {m.bio && <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-6">04 — Galeria</p>
            <h2 className="display text-[clamp(3rem,9vw,6rem)]">Na prática.</h2>
          </div>
          <p className="max-w-xs text-xs text-muted-foreground">Imagens demonstrativas. Fotos reais da Dogson em breve.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
          <img src={hero} loading="lazy" width={1600} height={1104} alt="Degradê sendo finalizado com máquina" className="col-span-2 aspect-[16/10] w-full object-cover md:col-span-8 md:row-span-2 md:aspect-auto md:h-full" />
          <img src={barba} loading="lazy" width={1024} height={1280} alt="Barba curta com contorno marcado" className="aspect-[4/5] w-full object-cover md:col-span-4" />
          <img src={ferramentas} loading="lazy" width={1280} height={1024} alt="Navalha, tesoura e pente sobre bancada de madeira" className="aspect-[4/5] w-full object-cover md:col-span-4 md:aspect-[5/4]" />
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow mb-6">05 — Avaliações</p>
          <h2 className="display text-[clamp(2.6rem,6vw,4.5rem)]">Quem passa por aqui, conta.</h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          {rating && (
            <p className="mb-8 flex items-baseline gap-4">
              <span className="display text-7xl text-primary">{rating.score}</span>
              <span className="text-muted-foreground">{rating.count} avaliações no Google</span>
            </p>
          )}
          {reviews.length > 0 ? (
            <ul className="space-y-8">
              {reviews.map((r) => (
                <li key={r.author} className="border-l-2 border-primary pl-6">
                  <blockquote className="text-lg">“{r.text}”</blockquote>
                  <p className="eyebrow mt-3">{r.author}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="max-w-md leading-relaxed text-muted-foreground">
              As opiniões de quem já sentou na nossa cadeira estão no perfil da Dogson no Google.
            </p>
          )}
          {links.googleProfile && (
            <a href={links.googleProfile} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border-b border-primary pb-1 text-sm uppercase tracking-[0.14em] hover:text-primary">
              Ver avaliações no Google
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const a = business.address;
  return (
    <section id="localizacao" className="border-t">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-32">
        <div className="md:col-span-5">
          <p className="eyebrow mb-6">06 — Localização</p>
          <h2 className="display text-[clamp(3.5rem,10vw,7rem)]">Chega mais.</h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:col-span-7">
          <div>
            <h3 className="eyebrow mb-4">Endereço</h3>
            <address className="not-italic leading-relaxed">
              {a.street}<br />{a.district}<br />{a.city}<br />CEP {a.zip}
            </address>
            <Cta href={links.maps} variant="outline" className="mt-6">Como chegar</Cta>
          </div>
          <div>
            <h3 className="eyebrow mb-4">Horários</h3>
            {hours ? (
              <dl className="space-y-2">
                {hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 border-b pb-2">
                    <dt>{h.days}</dt><dd className="text-muted-foreground">{h.time}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="text-muted-foreground">Consulte os horários disponíveis na agenda online.</p>
            )}
            <h3 className="eyebrow mb-4 mt-10">Contato</h3>
            <div className="flex flex-col items-start gap-3">
              <Cta href={whatsappUrl} variant="outline">Falar no WhatsApp</Cta>
              {links.instagram && (
                <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="text-sm underline-offset-4 hover:text-primary hover:underline">Instagram</a>
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
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-8 md:py-28">
        <div>
          <h2 className="display max-w-3xl text-[clamp(3rem,8vw,6.5rem)]">Seu próximo corte começa aqui.</h2>
          <p className="mt-6 max-w-md opacity-80">Consulte os horários disponíveis e escolha o melhor momento para você.</p>
        </div>
        <Cta href={links.booking} variant="paper" className="shrink-0">Agendar horário</Cta>
      </div>
    </section>
  );
}

function Footer() {
  const a = business.address;
  return (
    <footer className="bg-ink pb-24 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 text-sm text-muted-foreground md:grid-cols-3 md:px-8">
        <div>
          <p className="display text-3xl text-foreground">Dogson Barbearia</p>
          <p className="mt-2">{business.city}</p>
        </div>
        <p>{a.street} — {a.district}<br />{a.city}, CEP {a.zip}</p>
        <div className="flex flex-col gap-2 md:items-end">
          {links.instagram && <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram</a>}
          {links.booking && <a href={links.booking} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Agendamento</a>}
          <p>© {new Date().getFullYear()} Dogson Barbearia</p>
        </div>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-ink/95 p-3 backdrop-blur-sm md:hidden">
      <Cta href={links.booking} className="w-full">Agendar horário</Cta>
    </div>
  );
}

function Index() {
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
    </>
  );
}
