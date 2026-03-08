import Header from "../components/Header";
import Footer from "../components/Footer";

const tools = [
  {
    category: "Knowledge Management",
    items: [
      { name: "Notion", description: "All-in-one workspace for notes, docs, and databases", link: "https://notion.so" },
      { name: "Obsidian", description: "Local-first markdown notes with graph view", link: "https://obsidian.md" },
      { name: "Readwise", description: "Sync highlights from books and articles", link: "https://readwise.io" },
    ]
  },
  {
    category: "AI Assistants",
    items: [
      { name: "Claude", description: "Anthropic's AI for analysis and writing", link: "https://claude.ai" },
      { name: "ChatGPT", description: "OpenAI's conversational AI", link: "https://chatgpt.com" },
      { name: "Perplexity", description: "AI search with cited sources", link: "https://perplexity.ai" },
    ]
  },
  {
    category: "Automation",
    items: [
      { name: "Zapier", description: "Connect apps and automate workflows", link: "https://zapier.com" },
      { name: "Make", description: "Visual automation builder", link: "https://make.com" },
      { name: "n8n", description: "Open-source workflow automation", link: "https://n8n.io" },
    ]
  },
  {
    category: "Capture",
    items: [
      { name: "Otter.ai", description: "AI meeting transcription", link: "https://otter.ai" },
      { name: "Voice Memos", description: "Quick audio capture (iOS/Mac)", link: "#" },
      { name: "Raycast", description: "Keyboard-driven productivity launcher", link: "https://raycast.com" },
    ]
  },
];

export const metadata = {
  title: "Recommended Tools | Howard AI",
  description: "The AI stack I use and recommend for building a second brain.",
};

export default function Tools() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Header />
      
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Recommended <span className="gradient-text">Tools</span>
            </h1>
            <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
              The AI stack I use and recommend for every client. These tools form 
              the foundation of a powerful second brain system.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="space-y-12">
            {tools.map((category, index) => (
              <div key={index} className="bg-[#18181b] rounded-2xl border border-[#27272a] p-8">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3" />
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {category.items.map((tool, toolIndex) => (
                    <a
                      key={toolIndex}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-xl bg-[#0a0a0b] border border-[#27272a] hover:border-cyan-500/50 transition-all"
                    >
                      <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-[#71717a]">{tool.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-[#a1a1aa] mb-6">
              Need help setting up your toolkit?
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors"
            >
              Book a Setup Call
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
