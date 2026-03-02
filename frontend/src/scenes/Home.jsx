import React from 'react'
import NavBar from '../components/NavBar'
import Cards from '../components/Card'

const cardinfo = [
  {
    id: 1,
    title: "DSA Masterclass",
    description: "Master Arrays, Trees, Graphs & Dynamic Programming with structured practice problems.",
    link: "/dsa"
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "Supervised, Unsupervised & Deep Learning interview prep with real-world questions.",
    link: "/ml"
  },
  {
    id: 3,
    title: "Web Development",
    description: "React, Node.js & Next.js interview questions with hands-on coding challenges.",
    link: "/webd"
  },
  {
    id: 4,
    title: "CS Fundamentals",
    description: "OS, DBMS & Computer Networks — the core concepts every engineer must know.",
    link: "/csfundamental"
  }
]

const features = [
  {
    icon: "map",
    title: "Structured Roadmap",
    description: "Follow a week-by-week guide tailored to your timeline and dream company targets.",
    color: "indigo"
  },
  {
    icon: "description",
    title: "Resume Builder",
    description: "Create ATS-friendly resumes with our drag-and-drop builder and professional templates.",
    color: "pink"
  },
  {
    icon: "check_circle",
    title: "Track Progress",
    description: "Mark questions as complete, take notes, and visualize your preparation journey.",
    color: "cyan"
  }
]

const Home = () => {
  return (
    <div className="min-h-screen bg-bg-dark">
      <NavBar />

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden mesh-bg">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 pt-36 pb-16 relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-secondary" />
            <span className="text-xs font-medium text-slate-300">New Resume Builder Released</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
            Crack Your Dream <br />
            <span className="gradient-text">Placement</span> 🚀
          </h1>

          {/* Subtitle */}
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
            Master Data Structures, System Design, and Core CS concepts with our premium curriculum designed for top tech company interviews.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a href="/dsa" className="glow-button h-12 px-8 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold text-base flex items-center justify-center gap-2">
              Start Learning Now
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a href="/resumemaker" className="h-12 px-8 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white rounded-xl font-semibold text-base transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">description</span>
              Build Resume
            </a>
          </div>
        </div>
      </div>

      {/* Learning Paths Cards */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white tracking-tight">Your Learning Paths</h2>
          <a className="text-primary text-sm font-medium hover:text-primary/80 flex items-center gap-1" href="/dsa">
            View all topics <span className="material-symbols-outlined text-sm">chevron_right</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardinfo.map((data) => (
            <Cards key={data.id} title={data.title} description={data.description} link={data.link} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose PlacementPrep?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">We provide the structure you need to succeed in interviews at top tech companies.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div key={i} className="bg-card-dark border border-border-dark p-8 rounded-2xl flex flex-col items-start gap-4 hover:bg-slate-800/50 transition-colors">
              <div className={`w-12 h-12 rounded-xl bg-${feat.color}-500/20 text-${feat.color}-400 flex items-center justify-center mb-2`}>
                <span className="material-symbols-outlined text-2xl">{feat.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border-dark bg-bg-dark py-12 mt-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">school</span>
            <span className="text-slate-300 font-semibold">PlacementPrep</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <a className="hover:text-white transition-colors" href="#">Privacy</a>
            <a className="hover:text-white transition-colors" href="#">Terms</a>
            <a className="hover:text-white transition-colors" href="#">Support</a>
          </div>
          <div className="text-sm text-slate-600">
            © 2025 PlacementPrep
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home