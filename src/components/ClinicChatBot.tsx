import { useState } from "react";
import { X, Send } from "lucide-react";

import robot from "../assets/chat-robot.png";

type Msg = { from: "bot" | "user"; text: string };

const WHATSAPP_LINK = "https://wa.me/918768643660";

const quickReplies: { label: string; answer: string }[] = [
  {
    label: "Timings",
    answer:
      "We are open daily and close at 7 pm. Appointments are recommended, but walk-ins are welcome too.",
  },
  {
    label: "Locations",
    answer:
      "We have two clinics — Kharar (Sunny Enclave, Sector 125) and Mohali (Sector 70). Both run on the same number: 87686 43660.",
  },
  {
    label: "Treatments",
    answer:
      "We offer acne care, pigmentation, chemical peels, carbon laser, medi-facials, hair fall treatment (GFC/PRP), hair transplant consultation, laser hair reduction and laser tattoo removal.",
  },
  {
    label: "Book appointment",
    answer:
      "You can fill the appointment form on this page, or WhatsApp/call us on 87686 43660. You can also email skintreeaesthetics21@gmail.com.",
  },
  {
    label: "Price / consultation",
    answer:
      "Pricing depends on your skin or hair concern and the number of sessions. Share your concern on WhatsApp (87686 43660) and our team will guide you with exact charges.",
  },
];

function replyFor(text: string): string {
  const t = text.toLowerCase();
  if (/(time|timing|open|close|hours)/.test(t)) return quickReplies[0]!.answer;
  if (/(where|location|address|branch|kharar|mohali)/.test(t))
    return quickReplies[1]!.answer;
  if (/(treat|acne|hair|laser|skin|tattoo|prp|gfc|peel)/.test(t))
    return quickReplies[2]!.answer;
  if (/(book|appoint|slot|visit)/.test(t)) return quickReplies[3]!.answer;
  if (/(price|cost|charge|fee|rate)/.test(t)) return quickReplies[4]!.answer;
  if (/(mail|email|contact|number|phone)/.test(t))
    return "You can reach us on 87686 43660 (call or WhatsApp) or email skintreeaesthetics21@gmail.com.";
  return "I can help with timings, locations, treatments, pricing and appointments. For anything specific, our team is one tap away on WhatsApp.";
}

export function ClinicChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: "Hi! I'm Treeo, the Skin Tree Aesthetics assistant. How can I help you with your skin or hair today?",
    },
  ]);

  const push = (msg: Msg) => setMessages((m) => [...m, msg]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value) return;
    push({ from: "user", text: value.slice(0, 300) });
    setInput("");
    setTimeout(() => push({ from: "bot", text: replyFor(value) }), 350);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="fixed bottom-5 right-3 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-card shadow-soft ring-2 ring-primary/25 transition hover:scale-105 sm:right-5"
      >
        {open ? (
          <X className="h-6 w-6 text-primary" />
        ) : (
          <img
            src={robot}
            alt="Chat assistant"
            width={512}
            height={512}
            loading="lazy"
            className="h-10 w-10 object-contain"
          />
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-3 z-50 flex h-[26rem] w-[min(21rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border sm:right-5">
          <div className="flex items-center gap-3 bg-primary px-4 py-3 text-primary-foreground">
            <img
              src={robot}
              alt=""
              width={512}
              height={512}
              className="h-9 w-9 rounded-full bg-background/90 object-contain p-1"
            />
            <div>
              <p className="font-heading text-lg leading-tight">Treeo</p>
              <p className="text-xs opacity-85">Skin Tree Aesthetics assistant</p>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.from === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}

            <div className="flex flex-wrap gap-2 pt-1">
              {quickReplies.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => send(q.label)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-accent"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              maxLength={300}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              aria-label="Message"
              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary-dark"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="bg-whatsapp px-4 py-2.5 text-center text-xs font-semibold text-whatsapp-foreground transition hover:bg-whatsapp-dark"
          >
            Chat with our team on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
