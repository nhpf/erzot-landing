import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

// Smooth scroll utility function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Google Calendar scheduling function
const openGoogleCalendar = () => {
  window.open(
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2rdh2Jz9mHXXE8RErMUewyf3q57pfkCqu853uSZ_D9CUaGhwNK2EABWiES-cq_mCLJssRGItOg?gv=true",
    "_blank",
    "noopener,noreferrer",
  );
};

// Kept the existing figures (5+ / 45+ / 10+ / 3) — presented as a spec ledger
// rather than four glass cards.
const stats = [
  { label: "Experience", value: "7+ yrs" },
  { label: "Products shipped", value: "45+" },
  { label: "Clients", value: "10+" },
  { label: "Continents", value: "3" },
];

const founders = [
  {
    initials: "NH",
    name: "Nicholas Hopf",
    role: "Product & Business",
    bio: "Leads product and the business side: scoping, strategy, and keeping delivery honest.",
    photo: "/nicholas.jpeg" as string | null,
    linkedin: "https://www.linkedin.com/in/nicholas-hopf/",
  },
  {
    initials: "RG",
    name: "Rodrigo Gomes",
    role: "Data & Engineering",
    bio: "Data engineer who makes the hard technical calls and owns the architecture.",
    photo: "/rodrigo.jpeg" as string | null,
    linkedin: "https://www.linkedin.com/in/rod-gomes/",
  },
];

// Specialists we bring in per project — trusted collaborators, not a permanent roster.
const collaborators = [
  { name: "Carol Loiola", focus: "Product · UI/UX" },
  { name: "Icaro Rezende", focus: "Engineering · Business" },
  { name: "Roger Alencar", focus: "Engineering" },
  { name: "Sofia Zeltser", focus: "Branding" },
];

// Selected work — real projects. `url` is optional (rendered as a link when present).
const projects = [
  {
    name: "Ábaco Consultoria Contábil",
    blurb: "Rebuilt an accounting firm's web presence for search and speed: climbing in rankings and bringing in new inbound leads.",
    tags: "SEO · Digital marketing",
    url: null as string | null,
  },
  {
    name: "OnlyOnce",
    blurb: "A memory-ritual PWA that helps families capture and revisit moments together.",
    tags: "Full PWA · Product build",
    url: null as string | null,
  },
  {
    name: "SerraMar",
    blurb: "Full end-to-end ecommerce build: storefront, checkout, and operations.",
    tags: "Ecommerce · End-to-end",
    url: null as string | null,
  },
  {
    name: "Lizzie Stanton",
    blurb: "End-to-end ecommerce for a US brand.",
    tags: "Ecommerce · End-to-end · USA",
    url: null as string | null,
  },
  {
    name: "Conselho de Cidadãos",
    blurb: "Migrated a legacy web app onto solid ground and overhauled how it shows up in search.",
    tags: "Brownfield migration · SEO",
    url: null as string | null,
  },
];

// A real sequence, so numbering carries meaning.
const steps = [
  {
    no: "01",
    title: "Discover & plan",
    body: "Before any code, we map the product with you: who it's for, what it has to do first, and a stack that won't box you in later. You leave with a scope, a stack decision, and a timeline.",
  },
  {
    no: "02",
    title: "Design & build",
    body: "We design and build in short cycles, shipping something you can test every week. Web or mobile, full-stack, with security and tests in from the start instead of bolted on before launch.",
  },
  {
    no: "03",
    title: "Scale & evolve",
    body: "After launch we stay on as your team: new features, performance work, and the unglamorous maintenance that keeps a product alive.",
  },
];

const differentiators = [
  {
    no: "A",
    title: "You work with the builders",
    body: "The people who scope your project are the people who write its code. No handoffs, no telephone game through an account manager.",
  },
  {
    no: "B",
    title: "MVP in weeks",
    body: "We're set up for speed: a working MVP in weeks, then steady iteration. Tests and security are in from day one.",
  },
  {
    no: "C",
    title: "A global bench",
    body: "We've shipped across Europe, Latin America, and the US, and work across time zones.",
  },
  {
    no: "D",
    title: "We'll tell you no",
    body: "We've run our own startups, so we'll flag the feature that won't move your numbers before you pay us to build it.",
  },
];

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-white text-[#0E1726]">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E4E7EC] bg-white/85 backdrop-blur">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" aria-label="Erzot: back to top" className="flex items-center">
              <img src="/logo.png" alt="Erzot" className="h-7" />
            </a>
            <nav className="label-mono hidden items-center gap-8 text-[#5B6472] md:flex">
              <a href="#work" className="transition-colors hover:text-[#296CE1]">Work</a>
              <a href="#approach" className="transition-colors hover:text-[#296CE1]">Approach</a>
              <a href="#founders" className="transition-colors hover:text-[#296CE1]">Founders</a>
            </nav>
            <button
              onClick={openGoogleCalendar}
              className="label-mono inline-flex items-center gap-1.5 text-[#0E1726] transition-colors hover:text-[#296CE1]"
            >
              Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pb-20 pt-28 sm:pb-28 sm:pt-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="animate-fade-in lg:col-span-8">
              <p className="label-mono text-[#296CE1]">
                Founder-led software studio · Porto, Portugal
              </p>
              <h1 className="font-display mt-6 text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                We build the version of your product that{" "}
                <span className="ink-underline text-[#296CE1]">actually ships.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg text-[#5B6472] sm:text-xl">
                Erzot is two founders and a small team of engineers. We take
                startups and enterprises from idea to live MVP, fast, secure,
                and without the agency runaround.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={openGoogleCalendar}
                  className="group inline-flex items-center justify-center gap-2 bg-[#296CE1] px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#1E56B8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#296CE1]"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={() => scrollToSection("work")}
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-[#0E1726] ring-1 ring-[#E4E7EC] transition-colors hover:bg-[#F6F7F9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#296CE1]"
                >
                  See our work
                </button>
              </div>
            </div>

            {/* Signature: the spec ledger (kept stats, set like an engineering sheet) */}
            <div className="lg:col-span-4">
              <dl className="divide-y divide-[#E4E7EC] border border-[#E4E7EC]">
                <div className="bg-[#0E1726] px-5 py-3">
                  <span className="label-mono text-white/70">By the numbers</span>
                </div>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between px-5 py-5"
                  >
                    <dt className="label-mono text-[#5B6472]">{stat.label}</dt>
                    <dd className="font-display text-3xl text-[#0E1726]">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section id="founders" className="border-t border-[#E4E7EC] bg-[#F6F7F9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="label-mono text-[#296CE1]">Who you're hiring</p>
              <h2 className="font-display mt-5 text-4xl font-medium leading-[1.05] sm:text-5xl">
                Two founders.
                <br />
                No account managers.
              </h2>
              <p className="mt-6 text-lg text-[#5B6472]">
                We started Erzot after building and shipping
                their own products. Hire us and they're the ones in your repo,
                not a sales team that hands you off after kickoff.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pt-10">
              <div className="grid gap-px border border-[#E4E7EC] bg-[#E4E7EC] sm:grid-cols-2">
                {founders.map((person) => (
                  <div key={person.name} className="bg-white p-7">
                    {person.photo ? (
                      <img
                        src={person.photo}
                        alt={person.name}
                        className="h-14 w-14 object-cover"
                      />
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center bg-[#296CE1]">
                        <span className="font-display text-xl text-white">{person.initials}</span>
                      </div>
                    )}
                    <h3 className="font-display mt-5 text-2xl text-[#0E1726]">{person.name}</h3>
                    <p className="label-mono mt-2 text-[#5B6472]">{person.role}</p>
                    <p className="mt-4 text-[#5B6472]">{person.bio}</p>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#296CE1] transition-colors hover:text-[#1E56B8]"
                    >
                      LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="label-mono text-[#296CE1]">The extended bench</p>
              <h2 className="font-display mt-5 text-4xl font-medium leading-[1.05] sm:text-5xl">
                People we've built with.
              </h2>
              <p className="mt-6 text-lg text-[#5B6472]">
                Erzot is small on purpose. When a project needs a specialist, we
                bring in people we've already shipped with, not strangers off a
                marketplace.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pt-10">
              <dl className="border-t border-[#E4E7EC]">
                {collaborators.map((person) => (
                  <div
                    key={person.name}
                    className="flex flex-col gap-1 border-b border-[#E4E7EC] py-5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <dt className="font-display text-2xl text-[#0E1726]">{person.name}</dt>
                    <dd className="label-mono text-[#5B6472]">{person.focus}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="border-t border-[#E4E7EC] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="label-mono text-[#296CE1]">How we work</p>
            <h2 className="font-display mt-5 text-4xl font-medium leading-[1.05] sm:text-5xl">
              From idea to shipped, in three moves.
            </h2>
          </div>
          <div className="mt-14 border-t border-[#E4E7EC]">
            {steps.map((step) => (
              <div
                key={step.no}
                className="grid gap-4 border-b border-[#E4E7EC] py-10 md:grid-cols-12 md:gap-6"
              >
                <div className="md:col-span-2">
                  <span className="font-mono text-2xl text-[#296CE1]">{step.no}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-2xl text-[#0E1726]">{step.title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-lg text-[#5B6472]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why teams pick us */}
      <section className="border-t border-[#E4E7EC] bg-[#F6F7F9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="label-mono text-[#296CE1]">Why teams pick us</p>
            <h2 className="font-display mt-5 text-4xl font-medium leading-[1.05] sm:text-5xl">
              What you actually get.
            </h2>
          </div>
          <div className="mt-14 grid gap-px border border-[#E4E7EC] bg-[#E4E7EC] sm:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.no} className="bg-[#F6F7F9] p-8">
                <span className="font-mono text-sm text-[#296CE1]">{item.no}</span>
                <h3 className="font-display mt-3 text-2xl text-[#0E1726]">{item.title}</h3>
                <p className="mt-3 text-[#5B6472]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="label-mono text-[#296CE1]">Selected work</p>
          <h2 className="font-display mt-5 text-4xl font-medium leading-[1.05] sm:text-5xl">
            Work we can point to.
          </h2>

          {/* Work index — one row per real project. */}
          <div className="mt-14 border-t border-[#E4E7EC]">
            {projects.map((project) => (
              <div
                key={project.name}
                className="grid gap-3 border-b border-[#E4E7EC] py-9 md:grid-cols-12 md:gap-6"
              >
                <div className="md:col-span-4">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display inline-flex items-center gap-1.5 text-2xl text-[#0E1726] transition-colors hover:text-[#296CE1]"
                    >
                      {project.name}
                      <ArrowUpRight className="h-4 w-4 text-[#296CE1]" />
                    </a>
                  ) : (
                    <h3 className="font-display text-2xl text-[#0E1726]">{project.name}</h3>
                  )}
                </div>
                <div className="md:col-span-5">
                  <p className="text-lg text-[#5B6472]">{project.blurb}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <span className="label-mono text-[#5B6472]">{project.tags}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial as an editorial pull quote */}
          <figure className="mt-20 border-t border-[#E4E7EC] pt-12">
            <blockquote className="font-display max-w-4xl text-2xl font-medium leading-snug text-[#0E1726] sm:text-3xl lg:text-4xl">
              "We're genuinely happy with the work and the results so far. Our
              site climbed in search and started bringing in new potential
              customers. The seriousness and quality of the work stood out, and
              every deadline was met."
            </blockquote>
            <figcaption className="label-mono mt-8 text-[#5B6472]">
              Letícia Gomes, Financial Administrator, Ábaco Consultoria
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#0E1726] py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="label-mono text-[#7FA8F2]">Start a conversation</p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl">
            Tell us what you're building.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            We work out of{" "}
            <a
              href="https://www.investporto.pt/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
            >
              Porto
            </a>
            , with clients from San Francisco to São Paulo. Send a few lines
            about your project and we'll tell you honestly whether we're the
            right team and how we'd approach it.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() =>
                (window.location.href =
                  "mailto:hello@erzot.com?subject=Project Inquiry&body=Hi Erzot team,%0D%0A%0D%0AI would like to discuss a potential project with you.%0D%0A%0D%0ABest regards")
              }
              className="inline-flex items-center justify-center gap-2 bg-white px-7 py-3.5 text-base font-medium text-[#0E1726] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Mail className="h-5 w-5" />
              hello@erzot.com
            </button>
            <button
              onClick={openGoogleCalendar}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-white ring-1 ring-white/25 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Schedule a call <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <p className="label-mono mt-7 text-white/40">
            Time zones aren't a problem, we work across three continents.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0E1726] py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <img src="/logo_white.png" alt="Erzot" className="h-7" />
          <div className="label-mono text-white/40 md:text-right">
            <div>We scope, build, and ship.</div>
            <div className="mt-1">
              © 2026 Erzot · Made in{" "}
              <a
                href="https://www.investporto.pt/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Porto
              </a>
              , serving clients worldwide
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
