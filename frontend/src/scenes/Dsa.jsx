import React from 'react'
import NavBar from '../components/NavBar'

const dsaIcons = {
  "Dynamic Programming": "dynamic_feed",
  "Graph": "hub",
  "Tree": "account_tree",
  "Binary Search": "search",
  "Queue": "queue",
  "Stack": "layers",
  "Array": "grid_view",
  "String": "text_fields",
  "Backtracking": "undo",
  "Linkedlist": "link",
  "Recursion": "replay",
  "Heaps": "filter_list",
  "Binary Search Tree": "park",
  "Trie": "schema",
  "Segment Tree": "segment",
};

const dsaColors = ["blue", "purple", "teal", "orange", "pink", "indigo", "cyan", "emerald", "amber", "violet", "rose", "lime", "sky", "fuchsia", "green"];

const cardinfo = [
  { id: 1, title: "Dynamic Programming", tag: "Dynamic Programming" },
  { id: 2, title: "Graph", tag: "Graph" },
  { id: 3, title: "Tree", tag: "Tree" },
  { id: 4, title: "Binary Search", tag: "Binary search" },
  { id: 5, title: "Queue", tag: "Queue" },
  { id: 6, title: "Stack", tag: "Stack" },
  { id: 7, title: "Array", tag: "Array" },
  { id: 8, title: "String", tag: "String" },
  { id: 9, title: "Backtracking", tag: "Backtracking" },
  { id: 10, title: "Linkedlist", tag: "Linkedlist" },
  { id: 11, title: "Recursion", tag: "Recursion" },
  { id: 12, title: "Heaps", tag: "Heaps" },
  { id: 13, title: "Binary Search Tree", tag: "Binary Search Tree" },
  { id: 14, title: "Trie", tag: "Trie" },
  { id: 15, title: "Segment Tree", tag: "Segment Tree" },
];

const DSA = () => {
  return (
    <div className="min-h-screen bg-bg-dark">
      <NavBar />
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Data Structures & Algorithms</h1>
          <p className="text-slate-400 text-lg">Choose a topic and start practicing curated problems.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardinfo.map((data, i) => {
            const color = dsaColors[i % dsaColors.length];
            const icon = dsaIcons[data.title] || "code";
            return (
              <a
                key={data.id}
                href={`question/${data.tag}`}
                className="group relative glass-card rounded-2xl p-5 cursor-pointer block"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-400 ring-1 ring-${color}-500/20`}>
                    <span className="material-symbols-outlined text-2xl">{icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{data.title}</h3>
                    <p className="text-slate-500 text-sm">Practice problems →</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default DSA