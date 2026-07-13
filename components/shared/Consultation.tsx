export default function Consultation() {
  return (
    <section className="py-28 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <span className="text-blue-400 font-semibold uppercase tracking-wider">
          Free Consultation
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Let's Discuss Your Website Project
        </h2>

        <p className="mt-6 text-slate-300 text-lg">
          Tell us about your business and project requirements.
          We'll review your requirements and recommend the best solution.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <a
            href="https://forms.gle/9EqhVPBxjCbdn7B48"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
          >
            Fill Discovery Form
          </a>

          <a
            href="https://wa.me/918867331128"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 px-8 py-4 rounded-xl"
          >
            WhatsApp Us
          </a>

        </div>

      </div>
    </section>
  );
}
