import React from 'react'
import NavBar from '../components/NavBar'

const dataDescription = [
  {
    id: 1,
    title: "CodeBasics: Machine Learning Playlist",
    about: "Dive into the world of machine learning with carefully selected playlist, featuring tutorials, lectures, and insights.",
    icon: "smart_toy",
    link: "https://www.youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw"
  },
  {
    id: 2,
    title: "CodeBasics: Deep Learning Playlist",
    about: "Explore the realm of deep learning through curated playlist, offering a comprehensive guide with tutorials and insights.",
    icon: "neurology",
    link: "https://www.youtube.com/playlist?list=PLeo1K3hjS3uu7CxAacxVndI4bE_o3BDtO"
  },
  {
    id: 3,
    title: "Complete Machine Learning Playlist",
    about: "Dive into the world of machine learning with carefully selected playlist, featuring tutorials and lectures.",
    icon: "psychology",
    link: "https://www.youtube.com/playlist?list=PLZoTAELRMXVPBTrWtJkn3wWQxZkmTXGwe"
  },
];

const colors = ["purple", "pink", "indigo"];

const MachineLearn = () => {
  return (
    <div className="min-h-screen bg-bg-dark">
      <NavBar />
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Machine Learning</h1>
          <p className="text-slate-400 text-lg">Curated resources and playlists for ML interview preparation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataDescription.map((data, i) => {
            const color = colors[i % colors.length];
            return (
              <a
                key={data.id}
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="group glass-card rounded-2xl p-6 block"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-400 ring-1 ring-${color}-500/20 shrink-0`}>
                    <span className="material-symbols-outlined text-2xl">{data.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{data.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">{data.about}</p>
                    <span className="text-primary text-sm font-medium group-hover:text-primary/80 flex items-center gap-1">
                      Watch playlist <span className="material-symbols-outlined text-sm">play_circle</span>
                    </span>
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

export default MachineLearn