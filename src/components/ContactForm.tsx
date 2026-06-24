import { useState } from "react";
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

// Read the Web3Forms access key from the environment.
// Get a free key (no account needed) at https://web3forms.com — enter your
// destination email, copy the key, and add it to a `.env` file as:
//   VITE_WEB3FORMS_KEY=your-key-here
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s().-]{6,}$/;

const labelClass = "block text-xs font-semibold text-ink mb-2 tracking-wide";
const fieldClass =
  "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-ink placeholder-faint shadow-sm transition-all duration-200 outline-none hover:border-gray-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

/** Small red required marker. */
function Req() {
  return <span className="text-red-500" aria-hidden> *</span>;
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    botcheck: "", // honeypot
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field as keyof Errors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) next.email = "That email doesn't look right.";
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!PHONE_RE.test(form.phone)) next.phone = "That phone number doesn't look right.";
    if (form.message.trim().length < 10)
      next.message = "Tell us a little more (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.botcheck) return; // bot filled honeypot
    if (!validate()) return;

    if (!ACCESS_KEY) {
      setStatus("error");
      setServerMsg(
        "The form isn't connected yet. Add your Web3Forms access key to enable sending."
      );
      return;
    }

    setStatus("submitting");
    setServerMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New enquiry from ${form.name} — IP Centric Systems`,
          from_name: "IP Centric Systems Website",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "", botcheck: "" });
      } else {
        setStatus("error");
        setServerMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMsg("Network error. Check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-xl text-center">
        <div className="w-14 h-14 mx-auto bg-green-50 text-green-600 rounded-full grid place-items-center mb-5">
          <CheckCircle2 size={28} aria-hidden />
        </div>
        <h3 className="font-display text-navy-900 text-2xl font-bold mb-2">
          Message sent
        </h3>
        <p className="text-muted text-sm mb-6">
          Thanks for reaching out. A consultant will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-brand-500 font-semibold text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-xl">
      <h2 className="font-display text-navy-900 text-2xl font-bold mb-1">
        Send us a message
      </h2>
      <p className="text-muted text-sm mb-8">
        Fill in the form and our team will get back to you within one business day.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* honeypot — hidden from real users */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.botcheck}
          onChange={update("botcheck")}
          className="hidden"
          aria-hidden
        />

        {/* Row: Name · Email · Phone */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <label htmlFor="cf-name" className={labelClass}>
              Your Name<Req />
            </label>
            <div className="relative">
              <User size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-faint pointer-events-none" aria-hidden />
              <input
                id="cf-name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={update("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "cf-name-err" : undefined}
                className={fieldClass}
              />
            </div>
            {errors.name && (
              <p id="cf-name-err" className="text-xs text-red-600 mt-1.5" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="cf-email" className={labelClass}>
              Email<Req />
            </label>
            <div className="relative">
              <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-faint pointer-events-none" aria-hidden />
              <input
                id="cf-email"
                type="email"
                placeholder="john@company.com"
                value={form.email}
                onChange={update("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "cf-email-err" : undefined}
                className={fieldClass}
              />
            </div>
            {errors.email && (
              <p id="cf-email-err" className="text-xs text-red-600 mt-1.5" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <label htmlFor="cf-phone" className={labelClass}>
              Phone Number<Req />
            </label>
            <div className="relative">
              <Phone size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-faint pointer-events-none" aria-hidden />
              <input
                id="cf-phone"
                type="tel"
                placeholder="+1 555 000 0000"
                value={form.phone}
                onChange={update("phone")}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "cf-phone-err" : undefined}
                className={fieldClass}
              />
            </div>
            {errors.phone && (
              <p id="cf-phone-err" className="text-xs text-red-600 mt-1.5" role="alert">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message" className={labelClass}>
            Message<Req />
          </label>
          <div className="relative">
            <MessageSquare size={17} className="absolute left-3.5 top-4 text-faint pointer-events-none" aria-hidden />
            <textarea
              id="cf-message"
              rows={5}
              placeholder="How can we help you?"
              value={form.message}
              onChange={update("message")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "cf-message-err" : undefined}
              className={`${fieldClass} resize-none pt-3.5`}
            />
          </div>
          {errors.message && (
            <p id="cf-message-err" className="text-xs text-red-600 mt-1.5" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {status === "error" && (
          <div
            className="flex items-start gap-2 bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3"
            role="alert"
          >
            <AlertCircle size={18} className="flex-shrink-0 mt-0.5" aria-hidden />
            <span>{serverMsg}</span>
          </div>
        )}

        {/* Smaller, elegant submit aligned to the right */}
        <div className="flex justify-end pt-1">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:opacity-70 disabled:cursor-not-allowed text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md shadow-brand-500/20 hover:shadow-lg hover:-translate-y-0.5"
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              <>
                <Send size={15} aria-hidden />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
