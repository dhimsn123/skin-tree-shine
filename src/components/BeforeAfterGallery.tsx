import { useState } from "react";

import hair1Before from "../assets/ba-hair1-before.jpg";
import hair1After from "../assets/ba-hair1-after.jpg";
import skin1Before from "../assets/ba-skin1-before.jpg";
import skin1After from "../assets/ba-skin1-after.jpg";
import skin2Before from "../assets/ba-skin2-before.jpg";
import skin2After from "../assets/ba-skin2-after.jpg";
import laser1Before from "../assets/ba-laser1-before.jpg";
import laser1After from "../assets/ba-laser1-after.jpg";
import laser2Before from "../assets/ba-laser2-before.jpg";
import laser2After from "../assets/ba-laser2-after.jpg";

type CategoryId = "hair" | "skin" | "laser";

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
  { id: "hair", label: "Hair Fall & Regrowth" },
  { id: "skin", label: "Skin & Pigmentation" },
  { id: "laser", label: "Laser Hair Reduction" },
];

const results: ResultCase[] = [
  {
    category: "hair",
    title: "Female pattern hair thinning",
    treatment: "GFC + hair regrowth protocol",
    duration: "6 sessions · 5 months",
    before: hair1Before,
    after: hair1After,
    alt: "Scalp hair density before and after hair fall treatment",
  },
  {
    category: "skin",
    title: "Active acne & post-acne marks",
    treatment: "Chemical peels + acne management",
    duration: "5 sessions · 3 months",
    before: skin1Before,
    after: skin1After,
    alt: "Cheek skin before and after acne treatment",
  },
  {
    category: "skin",
    title: "Melasma & uneven skin tone",
    treatment: "Carbon laser + pigmentation care",
    duration: "6 sessions · 4 months",
    before: skin2Before,
    after: skin2After,
    alt: "Facial pigmentation before and after laser toning",
  },
  {
    category: "laser",
    title: "Unwanted arm hair",
    treatment: "Diode laser hair reduction",
    duration: "6 sessions · 6 months",
    before: laser1Before,
    after: laser1After,
    alt: "Forearm before and after laser hair reduction",
  },
  {
    category: "laser",
    title: "Beard line & ingrown bumps",
    treatment: "Laser hair reduction (face & neck)",
    duration: "7 sessions · 7 months",
    before: laser2Before,
    after: laser2After,
    alt: "Beard area before and after laser hair reduction",
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
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover"
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
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover"
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
        Representative results. Outcomes vary from person to person depending on
        skin type, hair type, medical history and number of sessions. Photos are
        shared for illustration with patient consent policy in place.
      </p>
    </div>
  );
}
