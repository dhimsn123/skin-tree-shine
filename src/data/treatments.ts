import skinImg from "../assets/treatment-skin.jpg";
import acneImg from "../assets/treatment-acne.jpg";
import peelImg from "../assets/treatment-peel.jpg";
import laserImg from "../assets/treatment-laser.jpg";
import hairImg from "../assets/treatment-hair.jpg";
import transplantImg from "../assets/treatment-transplant.jpg";
import clinicImg from "../assets/clinic-interior.jpg";
import clinicVideo from "../assets/clinic-tour.mp4.asset.json";
import laserVideo from "../assets/laser-demo.mp4.asset.json";

export type TreatmentCategory = "Skin" | "Hair" | "Laser";

export interface Treatment {
  slug: string;
  title: string;
  category: TreatmentCategory;
  tagline: string;
  duration: string;
  sessions: string;
  image: string;
  gallery: string[];
  video?: string;
  about: string[];
  benefits: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
}

export const treatments: Treatment[] = [
  {
    slug: "acne-and-acne-scar-treatment",
    title: "Acne & Acne Scar Treatment",
    category: "Skin",
    tagline: "Clear active breakouts and smooth out old acne marks and scars.",
    duration: "30-45 minutes",
    sessions: "4-8 sessions",
    image: acneImg,
    gallery: [acneImg, skinImg, clinicImg],
    about: [
      "Acne is caused by clogged pores, excess oil, bacteria and hormonal changes. At Skin Tree Aesthetics we first examine your skin type and the grade of acne, then build a plan that controls active breakouts before we work on the marks left behind.",
      "Treatment can combine medical-grade peels, comedone extraction, medicated infusions, and microneedling or laser resurfacing for pitted scars. Home care and diet guidance is included so results last.",
    ],
    benefits: [
      "Fewer and less painful active breakouts",
      "Reduced oiliness and clogged pores",
      "Softening of pitted and boxcar scars",
      "Even skin tone and fading of dark marks",
      "Safe protocols for sensitive Indian skin",
    ],
    process: [
      { step: "Skin analysis", detail: "We grade the acne, check for hormonal triggers and photograph the baseline." },
      { step: "Deep cleanse & extraction", detail: "Sterile comedone extraction to unclog pores." },
      { step: "Active treatment", detail: "Peel, medi-facial or microneedling chosen for your skin type." },
      { step: "Soothing & sun protection", detail: "Calming mask plus sunscreen application." },
      { step: "Home care plan", detail: "Prescription care and follow-up date after 2-4 weeks." },
    ],
    faqs: [
      { q: "Is it painful?", a: "Most sessions feel like mild tingling. Numbing cream is applied before microneedling or laser." },
      { q: "When will I see results?", a: "Active acne usually calms in 2-3 sessions; scars improve gradually over 3-6 months." },
      { q: "Any downtime?", a: "Mild redness for a few hours after peels; 1-2 days after microneedling." },
    ],
  },
  {
    slug: "pigmentation-and-melasma",
    title: "Pigmentation & Melasma Treatment",
    category: "Skin",
    tagline: "Fade dark patches, sun tan and uneven tone with medically safe protocols.",
    duration: "30 minutes",
    sessions: "4-6 sessions",
    image: skinImg,
    gallery: [skinImg, peelImg, clinicImg],
    about: [
      "Melasma, sun tan and post-inflammatory pigmentation happen when melanin is overproduced. Because pigmentation can rebound, we focus on both lightening the existing patches and controlling the trigger.",
      "Our protocol may include depigmenting peels, glutathione or vitamin C infusions, Q-switched laser toning and strict sun protection guidance.",
    ],
    benefits: [
      "Visible lightening of dark patches",
      "Brighter, more even complexion",
      "Reduced tanning and dullness",
      "Long-term maintenance plan to prevent recurrence",
    ],
    process: [
      { step: "Consultation", detail: "We identify the type and depth of pigmentation." },
      { step: "Prep phase", detail: "2-4 weeks of home care to prime the skin." },
      { step: "In-clinic sessions", detail: "Peels or laser toning spaced 2-3 weeks apart." },
      { step: "Maintenance", detail: "Sunscreen routine and periodic top-up sessions." },
    ],
    faqs: [
      { q: "Will pigmentation come back?", a: "Melasma is chronic. With sunscreen and maintenance care, it stays well controlled." },
      { q: "Is laser safe for my skin?", a: "Yes, we use low-fluence settings designed for Indian skin tones." },
    ],
  },
  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    category: "Skin",
    tagline: "Medical-grade exfoliation for glow, tan removal and clearer skin.",
    duration: "20-30 minutes",
    sessions: "3-6 sessions",
    image: peelImg,
    gallery: [peelImg, skinImg, clinicImg],
    about: [
      "A chemical peel uses a controlled solution of acids (glycolic, salicylic, lactic, mandelic or TCA) to remove dull, damaged surface layers and stimulate fresh cell turnover.",
      "The strength is chosen by your skin concern - salicylic for oily acne-prone skin, mandelic for sensitive skin, glycolic for glow and TCA for deeper pigmentation and scars.",
    ],
    benefits: [
      "Instant glow and smoother texture",
      "Removes tan and dullness",
      "Unclogs pores and controls blackheads",
      "Fades fine lines and superficial marks",
    ],
    process: [
      { step: "Patch test", detail: "For first-time or sensitive skin clients." },
      { step: "Cleanse & degrease", detail: "Skin is prepared to allow even penetration." },
      { step: "Peel application", detail: "Timed application with constant monitoring." },
      { step: "Neutralise & soothe", detail: "Peel is neutralised, followed by a calming mask and SPF." },
    ],
    faqs: [
      { q: "Will my skin peel off?", a: "Light peels cause mild flaking for 2-3 days; deeper peels peel more visibly." },
      { q: "How often can I repeat it?", a: "Usually every 2-4 weeks depending on the peel strength." },
    ],
  },
  {
    slug: "carbon-laser-facial",
    title: "Carbon Laser Facial (Hollywood Facial)",
    category: "Skin",
    tagline: "Instant glow, tighter pores and oil control with zero downtime.",
    duration: "30 minutes",
    sessions: "3-6 sessions",
    image: laserImg,
    gallery: [laserImg, skinImg, clinicImg],
    video: laserVideo.url,
    about: [
      "A liquid carbon layer is applied to the face and then targeted with a Q-switched laser. The carbon absorbs oil and dead cells from the pores, and the laser vaporises it along with the impurities.",
      "It is a favourite pre-wedding and pre-event treatment because the glow is immediate and there is no downtime.",
    ],
    benefits: [
      "Immediate radiance and even tone",
      "Minimised open pores",
      "Controls excess oil and blackheads",
      "Stimulates collagen for firmer skin",
    ],
    process: [
      { step: "Cleanse", detail: "Makeup and oil are removed thoroughly." },
      { step: "Carbon application", detail: "A thin carbon lotion layer is applied and dried." },
      { step: "Laser passes", detail: "Two passes - peeling mode and toning mode." },
      { step: "Finish", detail: "Hydrating serum, mask and sunscreen." },
    ],
    faqs: [
      { q: "Is there any downtime?", a: "None. You can go back to work or an event the same day." },
      { q: "Does it hurt?", a: "It feels like light warm snaps - very tolerable without numbing." },
    ],
  },
  {
    slug: "medi-facials-and-skin-boosters",
    title: "Medi-Facials & Skin Boosters",
    category: "Skin",
    tagline: "Customised hydrating, brightening and anti-ageing facials by professionals.",
    duration: "45-60 minutes",
    sessions: "Monthly",
    image: skinImg,
    gallery: [skinImg, peelImg, clinicImg],
    about: [
      "Unlike salon facials, a medi-facial uses clinically proven actives selected after a skin assessment - hydrating, brightening, anti-acne or anti-ageing.",
      "Skin boosters such as hyaluronic acid or vitamin infusions can be added for deep hydration and a plump, healthy look.",
    ],
    benefits: [
      "Deep hydration and bounce",
      "Brighter, healthier looking skin",
      "Reduces fine lines and dryness",
      "Relaxing and completely safe",
    ],
    process: [
      { step: "Assessment", detail: "Skin type and concerns are mapped." },
      { step: "Cleanse & exfoliate", detail: "Gentle exfoliation to prepare the skin." },
      { step: "Active infusion", detail: "Serums delivered with ultrasound, LED or microneedling pen." },
      { step: "Mask & protect", detail: "Sheet or peel-off mask followed by sunscreen." },
    ],
    faqs: [
      { q: "How often should I take it?", a: "Once a month keeps skin in great condition." },
      { q: "Suitable before a wedding?", a: "Yes - start 3 months before for the best results." },
    ],
  },
  {
    slug: "wart-mole-and-skin-tag-removal",
    title: "Wart, Mole & Skin Tag Removal",
    category: "Skin",
    tagline: "Quick, precise radiofrequency removal of unwanted skin growths.",
    duration: "15-30 minutes",
    sessions: "Usually 1 sitting",
    image: clinicImg,
    gallery: [clinicImg, acneImg, skinImg],
    about: [
      "Warts, moles, skin tags and milia are removed in-clinic using radiofrequency cautery or laser under local anaesthesia. The procedure is quick and precise with minimal marking.",
      "Every lesion is examined first to rule out anything that needs a dermatology referral or biopsy.",
    ],
    benefits: [
      "Same-day procedure",
      "Minimal scarring with proper aftercare",
      "Local anaesthesia keeps it painless",
      "Immediate cosmetic improvement",
    ],
    process: [
      { step: "Examination", detail: "The lesion is checked and photographed." },
      { step: "Numbing", detail: "Local anaesthetic cream or injection." },
      { step: "Removal", detail: "Radiofrequency or laser ablation of the growth." },
      { step: "Aftercare", detail: "Antibiotic ointment and sun protection instructions." },
    ],
    faqs: [
      { q: "Will it leave a scar?", a: "A small pink mark that fades over 4-8 weeks in most cases." },
      { q: "Can warts return?", a: "Viral warts can recur; we advise on prevention and follow-up." },
    ],
  },
  {
    slug: "hair-fall-treatment",
    title: "Hair Fall & Thinning Treatment",
    category: "Hair",
    tagline: "Find the real cause of hair fall and stop it with a medical plan.",
    duration: "30 minutes",
    sessions: "As per plan",
    image: hairImg,
    gallery: [hairImg, transplantImg, clinicImg],
    about: [
      "Hair fall can come from genetics, thyroid, anaemia, PCOS, stress, post-pregnancy changes or poor scalp health. We start with a trichoscopy and, when needed, blood investigations.",
      "The plan may include medicated serums, oral supplements, scalp treatments and regenerative therapies such as GFC or PRP.",
    ],
    benefits: [
      "Root-cause diagnosis, not guesswork",
      "Reduced daily hair shedding",
      "Improved hair thickness and scalp health",
      "Non-surgical and safe for men and women",
    ],
    process: [
      { step: "Trichoscopy", detail: "Magnified scalp and follicle analysis." },
      { step: "Investigations", detail: "Blood tests if a deficiency or hormonal cause is suspected." },
      { step: "Treatment plan", detail: "Topicals, supplements and in-clinic sessions." },
      { step: "Monthly review", detail: "Photo comparison and plan adjustment." },
    ],
    faqs: [
      { q: "How soon does shedding reduce?", a: "Usually within 6-8 weeks of starting treatment." },
      { q: "Is it lifelong medication?", a: "No. Many patients taper down once the cause is corrected." },
    ],
  },
  {
    slug: "gfc-therapy",
    title: "GFC (Growth Factor Concentrate) Therapy",
    category: "Hair",
    tagline: "Advanced next-generation upgrade over PRP for hair regrowth.",
    duration: "45 minutes",
    sessions: "4-6 sessions",
    image: hairImg,
    gallery: [hairImg, transplantImg, clinicImg],
    about: [
      "GFC is a purified concentrate of growth factors prepared from your own blood. Compared with conventional PRP it delivers a higher and more consistent concentration of growth factors with fewer inflammatory cells.",
      "It is injected into the scalp to revive weak follicles, thicken existing hair and reduce shedding.",
    ],
    benefits: [
      "Higher growth factor concentration than PRP",
      "Less pain and swelling after the session",
      "Visible thickening from 3rd-4th session",
      "100% autologous - nothing foreign is injected",
    ],
    process: [
      { step: "Blood draw", detail: "About 15 ml of your blood is collected." },
      { step: "Processing", detail: "Growth factors are activated and concentrated in a closed kit." },
      { step: "Numbing", detail: "Topical anaesthetic on the scalp." },
      { step: "Injection", detail: "Micro-injections across the thinning zones." },
      { step: "Aftercare", detail: "No head wash for 8-12 hours; normal routine next day." },
    ],
    faqs: [
      { q: "GFC or PRP - which is better?", a: "GFC generally gives a purer, more potent concentrate and a more comfortable session." },
      { q: "How many sessions do I need?", a: "Typically 4-6 sessions, one month apart, then maintenance." },
    ],
  },
  {
    slug: "prp-therapy",
    title: "PRP Therapy for Hair",
    category: "Hair",
    tagline: "Platelet-rich plasma to stimulate dormant follicles naturally.",
    duration: "45 minutes",
    sessions: "4-6 sessions",
    image: hairImg,
    gallery: [hairImg, clinicImg, transplantImg],
    about: [
      "PRP uses the platelet-rich portion of your own blood, rich in growth factors, injected into the scalp to improve blood supply to follicles and push them back into the growth phase.",
      "It works best for early to moderate pattern hair loss and also supports recovery after a hair transplant.",
    ],
    benefits: [
      "Natural treatment using your own blood",
      "Reduces hair fall and improves density",
      "No cuts, no downtime",
      "Can be combined with medical therapy",
    ],
    process: [
      { step: "Blood collection", detail: "A small sample is drawn from your arm." },
      { step: "Centrifugation", detail: "Plasma is separated and concentrated." },
      { step: "Scalp preparation", detail: "Cleansing and numbing cream." },
      { step: "Injection", detail: "PRP is injected into the affected areas." },
    ],
    faqs: [
      { q: "Is PRP painful?", a: "Mild pricking sensation; numbing cream makes it comfortable." },
      { q: "Can I wash my hair after?", a: "Yes, after 8-12 hours with a mild shampoo." },
    ],
  },
  {
    slug: "hair-transplant",
    title: "Hair Transplant Consultation",
    category: "Hair",
    tagline: "Natural-looking density restoration planned by experienced hands.",
    duration: "Consultation 30 min",
    sessions: "Procedure: 1 day",
    image: transplantImg,
    gallery: [transplantImg, hairImg, clinicImg],
    about: [
      "A hair transplant relocates your own permanent follicles from the back of the scalp to thinning or bald areas. Modern FUE gives natural hairlines with no linear scar.",
      "In consultation we measure the donor area, count required grafts, design the hairline according to your face shape and explain the full cost and recovery plan honestly.",
    ],
    benefits: [
      "Permanent, natural growing hair",
      "Custom hairline design for your face",
      "Painless under local anaesthesia",
      "Back to routine within a few days",
    ],
    process: [
      { step: "Consultation & graft count", detail: "Donor assessment and hairline design." },
      { step: "Pre-procedure tests", detail: "Routine blood work for safety." },
      { step: "Extraction", detail: "Follicular units harvested one by one." },
      { step: "Implantation", detail: "Grafts placed at the correct angle and density." },
      { step: "Follow-up", detail: "Reviews at day 1, day 10, and months 3, 6 and 12." },
    ],
    faqs: [
      { q: "When will new hair grow?", a: "Visible growth starts at 3-4 months, full result at 10-12 months." },
      { q: "Will it look fake?", a: "No - grafts are placed at natural angles in an irregular, soft hairline." },
    ],
  },
  {
    slug: "dandruff-and-scalp-treatment",
    title: "Dandruff & Scalp Treatment",
    category: "Hair",
    tagline: "Treat flaking, itching and oily scalp at the root.",
    duration: "30 minutes",
    sessions: "3-4 sessions",
    image: clinicImg,
    gallery: [clinicImg, hairImg, skinImg],
    about: [
      "Persistent dandruff is usually seborrheic dermatitis - a mix of yeast overgrowth, oil and inflammation. Left untreated it weakens follicles and worsens hair fall.",
      "We combine medicated scalp cleansing, anti-fungal therapy and scalp detox sessions to restore a healthy scalp barrier.",
    ],
    benefits: [
      "Relief from itching and flaking",
      "Balanced oil production",
      "Healthier scalp means less hair fall",
      "Long-term shampoo and care routine",
    ],
    process: [
      { step: "Scalp examination", detail: "Type and severity of dandruff assessed." },
      { step: "Medicated cleanse", detail: "Anti-fungal and exfoliating scalp treatment." },
      { step: "Serum infusion", detail: "Soothing and anti-inflammatory actives applied." },
      { step: "Home protocol", detail: "Shampoo schedule and lifestyle advice." },
    ],
    faqs: [
      { q: "Will dandruff return?", a: "It can recur seasonally; maintenance shampoo keeps it controlled." },
      { q: "Does dandruff cause baldness?", a: "It worsens hair fall but does not directly cause pattern baldness." },
    ],
  },
  {
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: "Laser",
    tagline: "Smooth, hair-free skin with a safe, hygienic, US-FDA style protocol.",
    duration: "15-60 minutes",
    sessions: "6-8 sessions",
    image: laserImg,
    gallery: [laserImg, clinicImg, skinImg],
    video: laserVideo.url,
    about: [
      "Laser hair reduction targets the pigment inside the hair follicle with a precise beam of light, damaging the root so hair grows back finer and slower until it stops.",
      "We treat full body, face, underarms, arms, legs, bikini and beard shaping. Because hair grows in cycles, a course of sessions spaced 4-6 weeks apart is needed for lasting results. All handpieces and consumables are single-use or fully sterilised.",
    ],
    benefits: [
      "Permanent reduction in hair growth",
      "No more waxing rashes or ingrown hair",
      "Smoother, brighter skin texture",
      "Comfortable with cooling technology",
      "Safe for men and women",
    ],
    process: [
      { step: "Patch test", detail: "Done 24-48 hours before the first full session." },
      { step: "Shaving", detail: "The area is shaved, not waxed, before treatment." },
      { step: "Laser pass", detail: "Protective eyewear on; the laser is passed over the area with cooling." },
      { step: "Soothing gel", detail: "Cooling gel and sunscreen after the session." },
      { step: "Repeat cycle", detail: "Next session in 4-6 weeks as per body area." },
    ],
    faqs: [
      { q: "Is it permanent?", a: "It gives permanent reduction - most people need only an occasional touch-up after the course." },
      { q: "Does it hurt?", a: "You feel a warm rubber-band snap; the cooling tip keeps it comfortable." },
      { q: "Can I do it in summer?", a: "Yes, as long as you avoid direct sun and use sunscreen daily." },
    ],
  },
];

export const clinicVideoUrl = clinicVideo.url;

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}
