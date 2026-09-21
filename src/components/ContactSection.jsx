import { useState } from "react";
import { Send, Mail, Github, Linkedin, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_w6ydn1s";
const TEMPLATE_ID = "template_ahhsr68";
const PUBLIC_KEY = "NcYYAR9vnGfZAZ7Hg";

export function ContactSection({ onNotify }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      onNotify("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          title: formData.subject || "Contact Us",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY,
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      onNotify(
        "Message received! Thank you for reaching out, Rendra will get back to you shortly.",
      );
    } catch (error) {
      onNotify("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("rendraekapermanaa@gmail.com");
    onNotify("Email address copied to clipboard (rendraekapermanaa@gmail.com)");
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        {/* Contact Glass Card */}
        <div
          id="contact-card"
          className="glass-elevated rounded-3xl p-6 sm:p-10 shadow-xl border border-white/95"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-[11px] font-semibold tracking-wider text-[#0071e3] uppercase mb-2">
              REACH OUT
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1c1d] mb-2.5">
              Let's build something.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Have a project, opportunity, or idea? I'd love to hear about it.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="text-center py-8 px-4 rounded-2xl bg-blue-50/60 border border-blue-100 animate-in fade-in">
              <CheckCircle2 className="w-10 h-10 text-[#0071e3] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-neutral-900 mb-1">
                Thank You!
              </h3>
              <p className="text-sm text-neutral-600 mb-6">
                Your message has been dispatched. Rendra will respond within 24
                hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded-full bg-white text-xs font-semibold text-neutral-800 border border-black/10 hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium text-neutral-600 mb-1.5"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100/70 border border-black/[0.06] text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-[#0071e3]/30 focus:border-[#0071e3] focus:bg-white transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium text-neutral-600 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100/70 border border-black/[0.06] text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-[#0071e3]/30 focus:border-[#0071e3] focus:bg-white transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-neutral-600 mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100/70 border border-black/[0.06] text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-[#0071e3]/30 focus:border-[#0071e3] focus:bg-white transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-neutral-600 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100/70 border border-black/[0.06] text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-[#0071e3]/30 focus:border-[#0071e3] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-contact-btn"
                  className="w-full py-3 px-6 rounded-xl bg-[#0071e3] hover:bg-[#005bb5] active:scale-[0.99] text-white text-sm font-semibold shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send className="w-4 h-4 fill-white/20" />
                </button>
              </div>
            </form>
          )}

          {/* Footer Social Links */}
          <div className="mt-8 pt-6 border-t border-black/[0.05] flex items-center justify-center gap-6 text-xs text-neutral-600">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 hover:text-[#0071e3] transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </button>
            <span className="text-neutral-300">·</span>
            <a
              href="https://github.com/rendraekapermana"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#0071e3] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-neutral-300">·</span>
            <a
              href="https://www.linkedin.com/in/rendra-eka-permana/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#0071e3] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
