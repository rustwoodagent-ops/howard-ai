import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "The AI Second Brain Blueprint | Howard AI",
  description: "Download the free guide to building your AI-powered second brain.",
};

export default function Blueprint() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Header />
      
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6">
              Free Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              The AI Second Brain{" "}
              <span className="gradient-text">Blueprint</span>
            </h1>
            <p className="text-lg text-[#a1a1aa]">
              A practical framework for building your AI-powered cognitive extension.
            </p>
          </div>

          {/* Guide Preview */}
          <div className="bg-[#18181b] rounded-2xl border border-[#27272a] p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Cover */}
              <div className="w-48 h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-[#27272a] flex items-center justify-center flex-shrink-0">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">🧠</div>
                  <div className="text-white font-bold">AI Second Brain</div>
                  <div className="text-cyan-400 text-sm">Blueprint</div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-4">What's Inside</h2>
                <ul className="space-y-3 text-[#a1a1aa]">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">01.</span>
                    The 4-layer second brain architecture
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">02.</span>
                    Tool stack recommendations for every budget
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">03.</span>
                    Capture → Process → Distill → Express workflow
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">04.</span>
                    30-day implementation roadmap
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">05.</span>
                    Prompt library for knowledge work
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20 p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Get the Blueprint</h3>
            <p className="text-[#a1a1aa] mb-6">
              Enter your email and I'll send you the PDF immediately.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-lg bg-[#0a0a0b] border border-[#27272a] text-white placeholder-[#71717a] focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors"
              >
                Download PDF
              </button>
            </form>
            <p className="text-xs text-[#71717a] mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
