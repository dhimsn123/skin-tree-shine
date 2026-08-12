import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Heart,
  Sparkles,
  Scissors,
  ShieldCheck,
  Accessibility,
  Baby,
  CreditCard,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import logoAsset from "../assets/skin-tree-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Skin Tree Aesthetics | Skin, Hair & Laser Clinic, Kharar",
      },
      {
        name: "description",
        content:
          "Book expert skin, hair and laser treatments at Skin Tree Aesthetics in Kharar. Women-owned clinic with 4.9 star rating and 116+ reviews.",
      },
      {
        property: "og:title",
        content: "Skin Tree Aesthetics | Skin, Hair & Laser Clinic, Kharar",
      },
      {
        property: "og:description",
        content:
          "Expert dermatology, hair transplant and laser hair reduction in Kharar. Rated 4.9 from 116+ reviews.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const phoneNumber = "087686 43660";
const phoneLink = "tel:+918768643660";
const whatsappNumber = "+918768643660";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;
const address =
  "NAVEL MARKET, S.C.O 24-A, Jandpur Rd, near PALM HEIGHTS, Sector 125, Sunny Enclave, Kharar, Punjab 140301";
const mapLink =
  "https://www.google.com/maps/search/?api=1&query=Skin+Tree+Aesthetics+Kharar";
const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.0!2d76.6413!3d30.7546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff!2sSkin%20Tree%20Aesthetics!5e0!3m2!1sen!2sin!4v1";

const services = [
  {
    icon: Sparkles,
    title: "Skin Treatments",
    description:
      "Acne, scar revision, pigmentation, carbon laser, chemical peels and personalized facials for glowing, healthy skin.",
  },
  {
    icon: Scissors,
    title: "Hair Solutions",
    description:
      "Advanced hair fall therapies including GFC, PRP, hair transplant consultation and restoration plans tailored to you.",
  },
  {
    icon: Heart,
    title: "Laser Services",
    description:
      "Safe, hygienic laser hair reduction with modern equipment and thorough pre- and post-treatment guidance.",
  },
];

const highlights = [
  {
    icon: Star,
    title: "4.9 Star Rating",
    description: "Trusted by 116+ happy patients who love their results.",
  },
  {
    icon: ShieldCheck,
    title: "Expert Dermatologists",
    description: "Knowledgeable doctors who explain every step of your treatment.",
  },
  {
    icon: Accessibility,
    title: "Accessible Clinic",
    description:
      "Wheelchair-accessible parking and seating, assistive hearing loop, and gender-neutral restrooms.",
  },
  {
    icon: Baby,
    title: "Family Friendly",
    description: "Nursing room available and a welcoming environment for everyone.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "Google Pay, NFC mobile payments and credit cards accepted.",
  },
];

const reviews = [
  {
    name: "Riya Sharma",
    text: "Had an amazing experience with the skin and hair treatments. I got GFC treatment for hair and a carbon laser session, and I’m genuinely very happy with the results. The doctor was extremely knowledgeable, patient, and explained every step.",
  },
  {
    name: "Bakhshinder Singh",
    text: "Dr Ankita Raj is truly an exceptional dermatologist. I consulted her for severe pimples and rashes on my legs and thighs caused by a reaction. The treatment was effective and the staff very supportive.",
  },
  {
    name: "Gurdev Kaur",
    text: "I recently got my facial hair removal treatment done through laser at Dr. Akriti’s clinic, and I’m really happy with my experience. The entire process was smooth, hygienic, and professionally handled.",
  },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Skin Tree Aesthetics logo"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <p className="font-heading text-xl leading-none text-foreground">
                Skin Tree Aesthetics
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-primary">
                Skin · Hair · Laser
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary">
              About
            </a>
            <a href="#reviews" className="text-sm font-medium text-foreground hover:text-primary">
              Reviews
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={phoneLink}
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-dark sm:inline-flex"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              className="rounded-md p-2 text-foreground md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border/50 bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>
              <a href="#about" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="#reviews" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
                Reviews
              </a>
              <a href="#contact" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <a
                href={phoneLink}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                Call {phoneNumber}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <Star className="h-4 w-4 fill-gold text-gold" />
                4.9 rating · 116+ reviews
              </div>
              <h1 className="mt-6 font-heading text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
                Reveal your natural glow at{" "}
                <span className="text-primary">Skin Tree Aesthetics</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                A women-owned skin, hair and laser clinic in Kharar. Personalized
                dermatology care, advanced hair restoration and hygienic laser
                treatments — all under one roof.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={phoneLink}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-dark"
                >
                  <Phone className="h-5 w-5" />
                  Book a Consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition hover:bg-accent"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-primary" />
                  Open now · Closes 7 pm
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-primary" />
                  Sunny Enclave, Kharar
                </span>
              </div>
            </div>

            <div className="relative mx-auto max-w-md lg:max-w-full">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-cream via-background to-cream-dark p-8 shadow-soft">
                <img
                  src={logoAsset.url}
                  alt="Skin Tree Aesthetics logo mark"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-card p-5 shadow-soft lg:block">
                <p className="font-heading text-3xl text-primary">4.9</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">116+ Google reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-cream/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              What we offer
            </p>
            <h2 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">
              Complete skin, hair & laser care
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-card p-8 shadow-soft transition hover:-translate-y-1"
              >
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-heading text-2xl text-foreground">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why choose */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Why choose us
              </p>
              <h2 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">
                A clinic built around your comfort & confidence
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Skin Tree Aesthetics is a women-owned clinic in Kharar committed to
                safe, effective and personalized aesthetic care. Every treatment plan
                is explained clearly, performed hygienically, and designed around
                your goals.
              </p>
              <a
                href={phoneLink}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-dark"
              >
                <Phone className="h-5 w-5" />
                Call {phoneNumber}
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30"
                >
                  <item.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-heading text-lg text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-primary-dark py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Patient stories
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl">
              Loved by the Kharar community
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="font-heading text-5xl">4.9</span>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-sm opacity-80">116+ Google reviews</span>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-2xl bg-primary/20 p-8 backdrop-blur-sm"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-5 leading-relaxed opacity-90">“{review.text}”</p>
                <p className="mt-6 font-semibold text-gold">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Visit us
              </p>
              <h2 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">
                Book your appointment today
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Walk-ins are welcome, but appointments are recommended. Call us
                directly or find us on Google Maps for directions.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href={phoneLink}
                  className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft transition hover:bg-accent"
                >
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-heading text-lg text-foreground">Phone</p>
                    <p className="mt-1 text-muted-foreground">{phoneNumber}</p>
                  </div>
                </a>

                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft transition hover:bg-accent"
                >
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-heading text-lg text-foreground">Address</p>
                    <p className="mt-1 text-muted-foreground">{address}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-heading text-lg text-foreground">Hours</p>
                    <p className="mt-1 text-muted-foreground">Open · Closes 7 pm</p>
                    <p className="text-sm text-muted-foreground">Appointment required</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-cream via-background to-cream-dark p-8 shadow-soft sm:p-12">
              <img
                src={logoAsset.url}
                alt="Skin Tree Aesthetics logo"
                className="mx-auto h-48 w-auto opacity-90 sm:h-64"
              />
              <a
                href={phoneLink}
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-dark"
              >
                <Phone className="h-5 w-5" />
                Call Now & Book
              </a>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Free consultation · On-site services · LGBTQ+ friendly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-cream/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="Skin Tree Aesthetics"
                className="h-10 w-auto"
              />
              <div>
                <p className="font-heading text-lg leading-none text-foreground">
                  Skin Tree Aesthetics
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-primary">
                  Skin · Hair · Laser
                </p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-right">
              © {new Date().getFullYear()} Skin Tree Aesthetics. All rights reserved.
              <br />
              Women-owned · LGBTQ+ friendly · Kharar, Punjab
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
