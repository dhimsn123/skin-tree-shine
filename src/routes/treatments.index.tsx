import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";

import { treatments, type TreatmentCategory } from "../data/treatments";
import photoEntrance from "../assets/real-IMG_0001.jpg.asset.json";
import photoLaserRoom from "../assets/real-IMG_9983.jpg.asset.json";
import photoLobby from "../assets/real-IMG_9989.jpg.asset.json";
import photoDoctorCabin from "../assets/real-IMG_9990.jpg.asset.json";
import photoReception from "../assets/real-IMG_9999.jpg.asset.json";
import photoMachines1 from "../assets/real-PHOTO-2025-04-14-17-10-53_1.jpg.asset.json";
import photoTeam from "../assets/real-PHOTO-2025-04-14-17-10-56_1.jpg.asset.json";
import photoHairProcedure from "../assets/real-PHOTO-2025-04-14-17-10-56.jpg.asset.json";

const clinicCollage: { src: string; alt: string; pos?: string }[] = [
  { src: photoEntrance.url, alt: "Skin Tree Aesthetics clinic entrance in Sunny Enclave, Kharar" },
  { src: photoReception.url, alt: "Skin Tree Aesthetics reception with gold logo wall" },
  { src: photoLobby.url, alt: "Clinic waiting area and reception corridor" },
  { src: photoDoctorCabin.url, alt: "Doctor's consultation cabin with certifications" },
  { src: photoLaserRoom.url, alt: "Laser and treatment room with FDA approved diode laser" },
  { src: photoMachines1.url, alt: "Advanced skin and laser machines at the clinic" },
  { src: photoHairProcedure.url, alt: "GFC hair treatment procedure", pos: "object-cover object-top" },
  { src: photoTeam.url, alt: "Skin Tree Aesthetics medical team", pos: "object-contain bg-secondary" },
];

export const Route = createFileRoute("/treatments/")({
  component: TreatmentsIndex,
  head: () => ({
    meta: [
      { title: "Skin & Hair Treatments in Kharar | Skin Tree Aesthetics" },
      {
        name: "description",
        content:
          "Explore every skin, hair and laser treatment at Skin Tree Aesthetics Kharar - acne, pigmentation, peels, GFC, PRP, hair transplant and laser hair reduction.",
      },
      { property: "og:title", content: "Skin & Hair Treatments | Skin Tree Aesthetics" },
      {
        property: "og:description",
        content:
          "Detailed guide to all skin, hair and laser treatments offered at Skin Tree Aesthetics, Kharar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const phoneLink = "tel:+918768643660";
const categories: TreatmentCategory[] = ["Skin", "Hair", "Laser"];

function TreatmentsIndex() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <a
            href={phoneLink}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </header>

      <section className="bg-cream/50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our treatments
          </p>
          <h1 className="mt-3 font-heading text-4xl text-foreground sm:text-5xl">
            Everything we do for your skin & hair
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Tap any treatment to read exactly what it is, how the session works, what
            results to expect and answers to the questions patients ask us most.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="font-heading text-3xl text-foreground">{category} Treatments</h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {treatments
                  .filter((t) => t.category === category)
                  .map((t) => (
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
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-6">
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                          {t.category}
                        </span>
                        <h3 className="mt-2 font-heading text-2xl text-foreground">{t.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {t.tagline}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl text-foreground">Take a look inside our clinic</h2>
          <p className="mt-3 text-muted-foreground">
            A real collage of our space — reception, consultation cabins, laser
            rooms and the technology we treat you with.
          </p>
          <div className="mt-8 grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] sm:grid-cols-4">
            {clinicCollage.map((photo, i) => (
              <div
                key={photo.alt}
                className={`overflow-hidden rounded-2xl bg-secondary shadow-soft ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                } ${i === 4 ? "sm:col-span-2" : ""}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className={`h-full w-full transition duration-500 hover:scale-105 ${photo.pos ?? "object-cover"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
