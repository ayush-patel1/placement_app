import React from 'react'
import NavBar from '../components/NavBar'

const dataDescription = [
    {
        id: 1,
        title: "Operating System (OS) Preparation",
        about: "OS interview prep: grasp process management, memory allocation, file systems, networking, and key algorithms.",
        icon: "memory",
        link: "https://drive.google.com/file/d/1-ELGdN8DLwoTpylILrMKhQRvdy5xbsbr/view?usp=sharing",
        ytlink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG"
    },
    {
        id: 2,
        title: "Database Management System (DBMS)",
        about: "DBMS interview prep involves mastering SQL, relational concepts, normalization, and transaction management.",
        icon: "storage",
        link: "https://drive.google.com/file/d/1l6xuJr_zkQCbb3nD6LF8K4r8IgRkDPls/view?usp=sharing",
        ytlink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU"
    },
    {
        id: 3,
        title: "Computer Networks (CN)",
        about: "Computer Networks interview: questions on OSI model, TCP/IP, security, routing, and network topologies.",
        icon: "lan",
        link: "https://www.interviewbit.com/networking-interview-questions/",
        ytlink: "https://www.youtube.com/watch?v=IPvYjXCsTg8&ab_channel=KunalKushwaha"
    },
    {
        id: 4,
        title: "Object Oriented Programming (OOPs)",
        about: "OOP interview prep: grasp encapsulation, inheritance, polymorphism, and abstraction in Java or C++.",
        icon: "category",
        link: "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/",
        ytlink: "https://www.youtube.com/playlist?list=PLA8BpojmT5JF4KKQCEIqURc71z6nvYXEK"
    }
];

const colors = ["teal", "blue", "orange", "purple"];

const Csfundamental = () => {
    return (
        <div className="min-h-screen bg-bg-dark">
            <NavBar />
            <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-16">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">CS Fundamentals</h1>
                    <p className="text-slate-400 text-lg">OS, DBMS, Networks & OOPs — core concepts for every engineer.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dataDescription.map((data, i) => {
                        const color = colors[i % colors.length];
                        return (
                            <div key={data.id} className="glass-card rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-400 ring-1 ring-${color}-500/20 shrink-0`}>
                                        <span className="material-symbols-outlined text-2xl">{data.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-2">{data.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">{data.about}</p>
                                        <div className="flex gap-4">
                                            <a href={data.link} target="_blank" rel="noreferrer"
                                                className="text-primary text-sm font-medium hover:text-primary/80 flex items-center gap-1">
                                                Notes <span className="material-symbols-outlined text-sm">open_in_new</span>
                                            </a>
                                            <a href={data.ytlink} target="_blank" rel="noreferrer"
                                                className="text-secondary text-sm font-medium hover:text-secondary/80 flex items-center gap-1">
                                                Watch <span className="material-symbols-outlined text-sm">play_circle</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Csfundamental