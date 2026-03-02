import React from 'react';
import NavBar from '../components/NavBar';

const dataDescription = [
  {
    id: 1,
    title: "NodeJs Interview Questions",
    about: "Commonly asked queries designed to evaluate a candidate's understanding and expertise in Node.js during job interviews.",
    icon: "dns",
    link: "https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions"
  },
  {
    id: 2,
    title: "ReactJs Introduction",
    about: "An overview of React.js, a popular JavaScript library for building user interfaces, known for its component-based architecture.",
    icon: "code",
    link: "https://www.geeksforgeeks.org/reactjs-introduction/?ref=roadmap"
  },
  {
    id: 3,
    title: "ReactJs Interview Questions",
    about: "A collection of queries designed to assess candidates' proficiency in React.js, covering key concepts and best practices.",
    icon: "quiz",
    link: "https://www.interviewbit.com/react-interview-questions/"
  },
  {
    id: 4,
    title: "Handwritten NodeJs Interview Questions",
    about: "Commonly asked queries designed to evaluate a candidate's understanding and expertise in Node.js during job interviews.",
    icon: "edit_note",
    link: "https://drive.google.com/file/d/1GAynOeRg5hSr-8ydOVv8CSASAgYekGqn/view?usp=sharing"
  }
];

const colors = ["orange", "blue", "purple", "teal"];

const Webd = () => {
  return (
    <div className="min-h-screen bg-bg-dark">
      <NavBar />
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Web Development</h1>
          <p className="text-slate-400 text-lg">Resources and interview questions for web development.</p>
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
                      Learn from here <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Webd;