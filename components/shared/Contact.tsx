import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <span className="text-blue-400 font-semibold uppercase tracking-wider">
            Contact
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Ready To Build Your Website?
          </h2>

          <p className="mt-6 text-slate-400 text-xl max-w-2xl mx-auto">
            Let's discuss your business, goals, and how a
            professional website can help you attract more customers.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {/* WhatsApp */}

          <a
            href="https://wa.me/918867331128"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition group"
          >
            <MessageCircle
              size={42}
              className="text-blue-400"
            />

            <h3 className="mt-6 text-2xl font-semibold">
              WhatsApp
            </h3>

            <p className="mt-4 text-slate-400">
              Fastest way to reach me and discuss your project.
            </p>

            <div className="mt-6 flex items-center gap-2 text-blue-400">
              Chat Now
              <ArrowRight size={18} />
            </div>
          </a>

          {/* Email */}

          <a
            href="mailto:yathiraj.p10@gmail.com"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition group"
          >
            <Mail
              size={42}
              className="text-blue-400"
            />

            <h3 className="mt-6 text-2xl font-semibold">
              Email
            </h3>

            <p className="mt-4 text-slate-400">
              Send detailed project requirements anytime.
            </p>

            <div className="mt-6 flex items-center gap-2 text-blue-400">
              Send Email
              <ArrowRight size={18} />
            </div>
          </a>

          {/* Phone */}

          <a
            href="tel:+918867331128"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition group"
          >
            <Phone
              size={42}
              className="text-blue-400"
            />

            <h3 className="mt-6 text-2xl font-semibold">
              Call
            </h3>

            <p className="mt-4 text-slate-400">
              Speak directly about your website requirements.
            </p>

            <div className="mt-6 flex items-center gap-2 text-blue-400">
              Call Now
              <ArrowRight size={18} />
            </div>
          </a>

        </div>

        {/* CTA Card */}

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 md:p-14">

          <h3 className="text-3xl md:text-4xl font-bold">
            Free Website Consultation
          </h3>

          <p className="mt-4 text-blue-100 text-lg">
            Not sure where to start? Let's discuss your business and
            explore the best solution for your online presence.
          </p>

          <a
            href="https://wa.me/918867331128"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold"
          >
            Book Free Consultation
            <ArrowRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}