import { useState } from "react";

const CLINIC_EMAIL = "skintreeaesthetics21@gmail.com";
const WHATSAPP_LINK = "https://wa.me/918768643660";

const locationOptions = ["Kharar — Sunny Enclave", "Mohali — Sector 70"];

export function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: locationOptions[0],
    date: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const summary = () =>
    [
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : "",
      `Preferred clinic: ${form.location}`,
      form.date ? `Preferred date: ${form.date}` : "",
      form.message.trim() ? `Message: ${form.message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

  const validate = () => {
    if (form.name.trim().length < 2) return "Please enter your name.";
    if (!/^[0-9+\-\s]{10,15}$/.test(form.phone.trim()))
      return "Please enter a valid phone number.";
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim()))
      return "Please enter a valid email address.";
    if (form.message.length > 600) return "Message is too long.";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    setError(err);
    if (err) return;
    const subject = `Appointment request — ${form.name.trim()}`;
    window.location.href = `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(summary())}`;
    setSent(true);
  };

  const sendOnWhatsApp = () => {
    const err = validate();
    setError(err);
    if (err) return;
    window.open(
      `${WHATSAPP_LINK}?text=${encodeURIComponent(
        `Appointment request\n\n${summary()}`,
      )}`,
      "_blank",
      "noreferrer",
    );
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-12 max-w-3xl rounded-3xl bg-card p-6 shadow-soft sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ap-name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id="ap-name"
            className={`mt-2 ${inputClass}`}
            value={form.name}
            maxLength={80}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="ap-phone" className="text-sm font-medium text-foreground">
            Phone / WhatsApp
          </label>
          <input
            id="ap-phone"
            className={`mt-2 ${inputClass}`}
            value={form.phone}
            maxLength={15}
            inputMode="tel"
            onChange={(e) => update("phone", e.target.value)}
            placeholder="e.g. 98765 43210"
          />
        </div>
        <div>
          <label htmlFor="ap-email" className="text-sm font-medium text-foreground">
            Email <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="ap-email"
            className={`mt-2 ${inputClass}`}
            value={form.email}
            maxLength={120}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="ap-date" className="text-sm font-medium text-foreground">
            Preferred date
          </label>
          <input
            id="ap-date"
            type="date"
            className={`mt-2 ${inputClass}`}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ap-location" className="text-sm font-medium text-foreground">
            Preferred clinic
          </label>
          <select
            id="ap-location"
            className={`mt-2 ${inputClass}`}
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
          >
            {locationOptions.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ap-message" className="text-sm font-medium text-foreground">
            Your concern <span className="text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="ap-message"
            rows={4}
            maxLength={600}
            className={`mt-2 ${inputClass}`}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us briefly about your skin or hair concern"
          />
        </div>
      </div>

      {error && (
        <p className="mt-4 text-sm font-medium text-destructive">{error}</p>
      )}
      {sent && !error && (
        <p className="mt-4 text-sm font-medium text-primary">
          Thank you! Your request has been prepared — please press send in the
          app that just opened and our team will confirm your slot.
        </p>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-dark"
        >
          Send appointment request
        </button>
        <button
          type="button"
          onClick={sendOnWhatsApp}
          className="inline-flex flex-1 items-center justify-center rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-soft transition hover:bg-whatsapp-dark"
        >
          Send on WhatsApp
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Requests reach us at {CLINIC_EMAIL} or on 87686 43660.
      </p>
    </form>
  );
}
