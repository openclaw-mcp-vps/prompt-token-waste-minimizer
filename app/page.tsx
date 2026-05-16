export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Minimize AI Prompt Token Waste{" "}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze your AI prompts, strip redundant tokens, and A/B test optimized versions — all while tracking real cost savings and quality scores.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Saving Tokens — $29/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="bg-[#161b22] rounded-xl p-4 border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff]">40%</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg token reduction</div>
          </div>
          <div className="bg-[#161b22] rounded-xl p-4 border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff]">A/B</div>
            <div className="text-xs text-[#8b949e] mt-1">Built-in testing</div>
          </div>
          <div className="bg-[#161b22] rounded-xl p-4 border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff]">$0</div>
            <div className="text-xs text-[#8b949e] mt-1">Setup cost</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited prompt analysis",
              "Token waste detection & auto-optimization",
              "A/B testing dashboard",
              "Cost savings & quality score reports",
              "GPT-4, Claude & Gemini support",
              "API access included"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does token waste detection work?",
              a: "We run your prompts through token counting algorithms and LLM analysis to flag redundant phrasing, filler words, and repeated context — then suggest a leaner version that produces equivalent output."
            },
            {
              q: "Will optimized prompts hurt my output quality?",
              a: "No. The A/B testing dashboard lets you compare original vs optimized prompts side-by-side with quality scores before you commit to any change."
            },
            {
              q: "Which AI providers are supported?",
              a: "We support OpenAI (GPT-3.5, GPT-4), Anthropic Claude, and Google Gemini out of the box, with more providers on the roadmap."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} Prompt Token Waste Minimizer. All rights reserved.
      </footer>
    </main>
  );
}
