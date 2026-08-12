import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarClock, Check, Clock, Phone } from "lucide-react";

import { getTreatment, treatments, type Treatment } from "../data/treatments";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const treatment = getTreatment(params.slug);
    if (!treatment) throw notFound();
    return { treatment };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Treatment not found | Skin Tree Aesthetics" }, { name: "robots", content: "noindex" }],
      };
    }
    const { treatment } = loaderData;
    const title = `${treatment.title} in Kharar | Skin Tree Aesthetics`;
    return {
      meta: [
        { title },
        { name: "description", content: treatment.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: treatment.tagline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TreatmentDetail,
});

const phoneLink = "tel:+918768643660";
const whatsappLink = "https://wa.me/918768643660";

function TreatmentDetail() {
  const { treatment } = Route.useLoaderData() as { treatment: Treatment };
  const related = treatments
    .filter((t) => t.category === treatment.category && t.slug !== treatment.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All treatments
          </Link>
          <a
            href={phoneLink}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-cream/50 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {treatment.category} Treatment
            </span>
            <h1 className="mt-3 font-heading text-4xl text-foreground sm:text-5xl">
              {treatment.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {treatment.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm text-foreground shadow-soft">
                <Clock className="h-4 w-4 text-primary" /> {treatment.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm text-foreground shadow-soft">
                <CalendarClock className="h-4 w-4 text-primary" /> {treatment.sessions}
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={phoneLink}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-dark"
              >
                <Phone className="h-4 w-4" /> Book a consultation
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground transition hover:bg-whatsapp-dark"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <img
            src={treatment.image}
            alt={treatment.title}
            width={1280}
            height={853}
            className="rounded-3xl shadow-soft"
          />
        </div>
      </section>

      {/* About */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl text-foreground">What is it?</h2>
            {treatment.about.map((para) => (
              <p key={para} className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}

            <h2 className="mt-12 font-heading text-3xl text-foreground">How the session works</h2>
            <ol className="mt-6 space-y-5">
              {treatment.process.map((item, i) => (
                <li key={item.step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl text-foreground">{item.step}</h3>
                    <p className="mt-1 text-muted-foreground">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="h-fit rounded-2xl bg-cream p-8 shadow-soft">
            <h2 className="font-heading text-2xl text-foreground">Benefits</h2>
            <ul className="mt-5 space-y-3">
              {treatment.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-foreground">Photos & video</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {treatment.gallery.map((src, i) => (
              <img
                key={`${src}-${i}`}
                src={src}
                alt={`${treatment.title} at Skin Tree Aesthetics`}
                loading="lazy"
                width={1280}
                height={853}
                className="h-56 w-full rounded-2xl object-cover shadow-soft"
              />
            ))}
          </div>
          {treatment.video ? (
            <video
              className="mt-8 w-full rounded-2xl shadow-soft"
              src={treatment.video}
              controls
              muted
              loop
              playsInline
            />
          ) : null}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl text-foreground">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            {treatment.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl bg-card p-6 shadow-soft"
              >
                <summary className="cursor-pointer list-none font-heading text-xl text-foreground">
                  {faq.q}
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-cream/50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl text-foreground">
              Other {treatment.category.toLowerCase()} treatments
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  to="/treatments/$slug"
                  params={{ slug: t.slug }}
                  className="group overflow-hidden rounded-2xl bg-card shadow-soft transition hover:-translate-y-1"
                >
                  <img
                    src={t.image}
                    alt={t.title}
                    loading="lazy"
                    width={1280}
                    height={853}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-foreground">{t.title}</h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
