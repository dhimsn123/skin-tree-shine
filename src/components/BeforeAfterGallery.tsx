import { useState } from "react";

import acneBefore from "../assets/ba-acne-before.jpg.asset.json";
import acneAfter from "../assets/ba-acne-after.jpg.asset.json";
import skinBefore from "../assets/ba-m-before.jpg.asset.json";
import skinAfter from "../assets/ba-m-after.jpg.asset.json";
import tattooBefore from "../assets/ba-tattoo-before.jpg.asset.json";
import tattooAfter from "../assets/ba-tattoo-after.jpg.asset.json";

type CategoryId = "acne" | "hair" | "laser";

type ResultCase = {
  category: CategoryId;
  title: string;
  treatment: string;
  duration: string;
  before: string;
  after: string;
  alt: string;
};

const categories: { id: CategoryId; label: string }[] = [
  { id: "acne", label: "Acne & Acne Marks" },
  { id: "hair", label: "Beard & Hair Growth" },
  { id: "laser", label: "Laser Tattoo Removal" },
];

const results: ResultCase[] = [
  {
    category: "acne",
    title: "Active acne on cheeks",
    treatment: "Acne management + chemical peels",
    duration: "Multiple sessions",
    before: acneAfter.url,
    after: acneBefore.url,
    alt: "Cheek skin before and after acne treatment at Skin Tree Aesthetics",
  },
  {
    category: "hair",
    title: "Patchy beard — no growth",
    treatment: "Beard growth therapy (GFC / PRP sessions)",
    duration: "Multiple sessions",
    before: skinAfter.url,
    after: skinBefore.url,
    alt: "Beard before and after beard growth treatment at Skin Tree Aesthetics",
  },
  {
    category: "laser",
    title: "Chest tattoo removal",
    treatment: "Q-switch laser tattoo removal",
    duration: "In-progress sessions",
    before: tattooAfter.url,
    after: tattooBefore.url,
    alt: "Tattoo before and after laser tattoo removal sessions",
  },
];

export function BeforeAfterGallery() {
  const [active, setActive] = useState<CategoryId | "all">("all");
  const visible =
    active === "all" ? results : results.filter((r) => r.category === active);

  return (
    <div>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {[{ id: "all" as const, label: "All results" }, ...categories].map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "border border-border bg-card text-foreground hover:bg-accent"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-3xl bg-card shadow-soft"
          >
            <div className="grid grid-cols-2">
              <div className="relative">
                <img
                  src={item.before}
                  alt={`Before — ${item.alt}`}
                  loading="lazy"
                  className="aspect-3/4 w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-foreground/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-background">
                  Before
                </span>
              </div>
              <div className="relative border-l-2 border-card">
                <img
                  src={item.after}
                  alt={`After — ${item.alt}`}
                  loading="lazy"
                  className="aspect-3/4 w-full object-cover"
                />
                <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
                  After
                </span>
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {categories.find((c) => c.id === item.category)?.label}
              </p>
              <h3 className="mt-2 font-heading text-xl text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.treatment}</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {item.duration}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-xs leading-relaxed text-muted-foreground">
        Real patient photos shared with consent — faces are blurred to protect
        privacy. Outcomes vary from person to person depending on skin type, hair
        type, medical history and number of sessions.
      </p>
    </div>
  );
}
