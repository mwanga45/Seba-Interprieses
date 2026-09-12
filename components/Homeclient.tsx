"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronUp,
  Clock3,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  Truck,
  X,
  MapPin,
  Wrench,
  Droplets,
  Hammer,
  CircleHelp,
} from "lucide-react";
import type { Post } from "@/lib/sanity/types";

function WhatsAppButton({
  label = "Chat on WhatsApp",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="https://wa.me/255755981516"
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_8px_24px_rgba(239,99,39,.2)] transition hover:-translate-y-0.5 hover:bg-primary/90 ${className}`}
    >
      <MessageCircle size={18} />
      {label}
    </a>
  );
}

export default function HomeClient({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All products");
  const [selected, setSelected] = useState<Post | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const categories = useMemo(
    () => [
      "All products",
      ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean))),
    ],
    [posts],
  );

  const filtered = useMemo(
    () =>
      posts.filter(
        (p) =>
          (category === "All products" || p.category === category) &&
          `${p.productName} ${p.description}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [posts, query, category],
  );

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = ["Products", "Why SEBA", "About us", "Locations", "Contact"];
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <div className="bg-foreground px-4 py-2 text-center text-xs font-semibold tracking-wide text-background">
        Supplying quality materials. Supporting better building.
      </div>
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#top"
            className="flex items-center gap-2"
            aria-label="SEBA Enterprises home"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-primary text-lg font-black text-primary-foreground">
              S
            </span>
            <span className="font-mono text-lg font-black tracking-tight text-foreground">
              SEBA<span className="text-primary">.</span>
              <small className="ml-1 block font-sans text-[9px] font-bold tracking-[.25em] text-muted-foreground">
                ENTERPRISES
              </small>
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-semibold text-muted-foreground transition hover:text-primary"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+255762130487"
              className="inline-flex items-center gap-2 px-3 text-sm font-bold"
            >
              <Phone size={16} className="text-primary" /> +255762130487
            </a>
            <WhatsAppButton label="Get a quote" />
          </div>
          <button
            className="rounded-lg p-2 lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 lg:hidden">
            {nav.map((item) => (
              <a
                onClick={() => setMenuOpen(false)}
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-semibold"
              >
                {item}
              </a>
            ))}
            <WhatsAppButton label="Get a quote" />
          </nav>
        )}
      </header>
      <section
        id="top"
        className="relative bg-secondary py-16 text-secondary-foreground lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_.9fr] lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[.18em] text-primary">
              <span className="h-px w-8 bg-primary" /> Your project starts here
            </p>
            <h1 className="max-w-xl text-balance font-mono text-5xl font-black leading-[1.02] tracking-[-.06em] sm:text-6xl lg:text-7xl">
              Built for the work that{" "}
              <span className="text-primary">move Tanzania forward.</span>
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-secondary-foreground/70">
              Quality construction, agricultural, plumbing, and hardware
              supplies — delivered with practical expertise and dependable
              service.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
              >
                Explore products <ArrowRight size={17} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/25 px-6 py-3.5 text-sm font-bold transition hover:border-primary hover:text-primary"
              >
                Talk to our team
              </a>
            </div>
            <div className="mt-12 flex gap-8 border-t border-secondary-foreground/15 pt-6">
              <div>
                <b className="font-mono text-2xl">15+</b>
                <p className="text-xs text-secondary-foreground/60">
                  Years of trust
                </p>
              </div>
              <div>
                <b className="font-mono text-2xl">{categories.length - 1}</b>
                <p className="text-xs text-secondary-foreground/60">
                  Core categories
                </p>
              </div>
              <div>
                <b className="font-mono text-2xl">3</b>
                <p className="text-xs text-secondary-foreground/60">
                  Locations
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-4/3 overflow-hidden rounded-[2rem] border-8 border-background/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=90"
                alt="Industrial water pump equipment"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-background px-4 py-3 text-foreground shadow-xl sm:-left-8">
              <span className="grid size-10 place-items-center rounded-full bg-primary/15 text-primary">
                <ShieldCheck size={21} />
              </span>
              <div>
                <b className="block text-sm">Quality you can count on</b>
                <span className="text-xs text-muted-foreground">
                  For every job, big or small
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 lg:px-8">
          <div className="flex gap-3">
            <Truck className="shrink-0 text-primary" />
            <div>
              <b className="text-sm">Reliable delivery</b>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Get your materials where you need them.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <PackageCheck className="shrink-0 text-primary" />
            <div>
              <b className="text-sm">Quality assured</b>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Products selected for real-world performance.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Wrench className="shrink-0 text-primary" />
            <div>
              <b className="text-sm">Practical advice</b>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                The right answer before you make a purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="products" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">
              Our product range
            </p>
            <h2 className="mt-2 font-mono text-4xl font-black tracking-tighter sm:text-5xl">
              Ready for the job.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              From the foundation to the finishing touch, find dependable
              supplies for your next project.
            </p>
          </div>
          <div className="relative w-full md:w-64">
            <Search
              className="absolute left-3 top-3.5 text-muted-foreground"
              size={17}
            />
            <input
              aria-label="Search products"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              className="w-full rounded-full border border-border bg-card py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c as string)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition ${category === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary text-muted-foreground"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <article
              key={post._id}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl"
            >
              <button
                onClick={() => setSelected(post)}
                className="block w-full text-left"
              >
                <div className="relative aspect-[1.35] overflow-hidden">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.productName}
                      className="size-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                  {post.category && (
                    <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold text-foreground">
                      {post.category}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  {post.category && (
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      {post.category}
                    </p>
                  )}
                  <h3 className="mt-2 text-lg font-black">
                    {post.productName}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-foreground">
                    View details{" "}
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">
            No products found. Try another search.
          </p>
        )}
      </section>
      <section id="why-seba" className="bg-muted/50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">
              Why SEBA
            </p>
            <h2 className="mt-2 max-w-lg font-mono text-4xl font-black tracking-tighter sm:text-5xl">
              More than a supplier. A partner on the ground.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              We make sourcing straightforward for contractors, farmers, fundis,
              and families. Our team knows the products, understands the work,
              and helps you make confident choices.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 font-bold text-primary"
            >
              Speak with a specialist <ArrowRight size={17} />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-secondary p-6 text-secondary-foreground">
              <Droplets className="text-primary" />
              <h3 className="mt-8 font-black">Agriculture first</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">
                Pumps, pipes, and practical systems that help farms thrive.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <Hammer className="text-primary" />
              <h3 className="mt-8 font-black">Built for builders</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A dependable range for every stage of construction.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <Clock3 className="text-primary" />
              <h3 className="mt-8 font-black">We keep time</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Clear communication and delivery you can plan around.
              </p>
            </div>
            <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
              <CircleHelp />
              <h3 className="mt-8 font-black">Not sure what you need?</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                Ask us. We are happy to point you in the right direction.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1fr]">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85"
              alt="Construction team working on a building project"
              className="aspect-4/3 size-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">
              About SEBA
            </p>
            <h2 className="mt-2 font-mono text-4xl font-black tracking-tighter sm:text-5xl">
              Good materials. Good business.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              SEBA ENTERPRISES is a Tanzania-owned supplier built around one
              simple idea: getting the right materials should never be the
              hardest part of the job. We combine a practical product range with
              responsive service, so you can spend more time building and less
              time searching.
            </p>
            <ul className="mt-7 space-y-3 text-sm font-semibold">
              <li className="flex items-center gap-3">
                <span className="grid size-6 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check size={15} />
                </span>{" "}
                Honest recommendations
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-6 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check size={15} />
                </span>{" "}
                Consistent product quality
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-6 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check size={15} />
                </span>{" "}
                Service that respects your time
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        id="locations"
        className="bg-secondary py-16 text-secondary-foreground"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">
                Find us
              </p>
              <h2 className="mt-2 font-mono text-4xl font-black tracking-tighter">
                Close to the work.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-secondary-foreground/65">
              Visit a branch or call ahead and we will help you find what you
              need.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Mwanza"].map((location, i) => (
              <div
                key={location}
                className="rounded-2xl border border-secondary-foreground/15 p-5"
              >
                <MapPin className="text-primary" size={20} />
                <h3 className="mt-5 font-black">{location}</h3>
                <p className="mt-1 text-sm text-secondary-foreground/60">
                  {i === 0
                    ? "Industrial Area"
                    : i === 1
                      ? "Simiyu, Bariadi Center Opposite na Stendi ya Zamani"
                      : "Uganda Road"}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-block text-sm font-bold text-primary"
                >
                  Get directions{" "}
                  <ArrowRight className="ml-1 inline" size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="bg-primary px-5 py-16 text-primary-foreground lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-primary-foreground/70">
              Let&apos;s get to work
            </p>
            <h2 className="mt-2 max-w-xl font-mono text-4xl font-black tracking-tighter sm:text-5xl">
              Tell us what you&apos;re building.
            </h2>
            <p className="mt-3 max-w-lg text-primary-foreground/75">
              Share your list or ask a question. Our team will get back to you
              with practical help.
            </p>
          </div>
          <WhatsAppButton
            label="Start a conversation"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          />
        </div>
      </section>
      <footer className="bg-foreground px-5 py-10 text-background lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <div className="font-mono text-xl font-black">
              SEBA<span className="text-primary">.</span>
            </div>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-background/55">
              Quality supplies for the people building what comes next.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-background/65">
            <a href="#products" className="hover:text-primary">
              Products
            </a>
            <a href="#about-us" className="hover:text-primary">
              About us
            </a>
            <a href="#locations" className="hover:text-primary">
              Locations
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-2 border-t border-background/10 pt-5 text-xs text-background/40 sm:flex-row">
          <span>© 2026 SEBA ENTERPRISES. All rights reserved.</span>
          <span>Made for the work that matters.</span>
        </div>
      </footer>
      {selected && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/60 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={selected.productName}
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-auto rounded-3xl bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              {selected.image && (
                <img
                  src={selected.image}
                  alt={selected.productName}
                  className="size-full object-cover"
                />
              )}
              <button
                aria-label="Close product details"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-background/90"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6">
              {selected.category && (
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {selected.category}
                </p>
              )}
              <h2 className="mt-2 font-mono text-3xl font-black">
                {selected.productName}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {selected.description} Contact our team for availability,
                specifications, and a quote tailored to your project.
              </p>
              <WhatsAppButton
                label="Ask about this product"
                className="mt-6 w-full"
              />
            </div>
          </div>
        </div>
      )}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-20 grid size-11 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-xl"
        >
          <ChevronUp size={19} />
        </button>
      )}
    </main>
  );
}