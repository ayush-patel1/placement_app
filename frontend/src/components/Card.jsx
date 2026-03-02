import React from 'react';
import { useNavigate } from 'react-router-dom';

// Icon + color config per card type
const cardStyles = {
    dsa: { icon: "data_object", color: "blue", gradient: "from-blue-600 to-blue-400" },
    ml: { icon: "psychology", color: "purple", gradient: "from-purple-600 to-purple-400" },
    webd: { icon: "code", color: "orange", gradient: "from-orange-600 to-orange-400" },
    csfundamental: { icon: "dns", color: "teal", gradient: "from-teal-600 to-teal-400" },
};

const Cards = ({ img, title, description, link }) => {
    const navigate = useNavigate();

    // Determine style from link
    const key = link?.replace("/", "") || "dsa";
    const style = cardStyles[key] || cardStyles.dsa;

    return (
        <div
            className="group relative glass-card rounded-2xl p-5 cursor-pointer"
            onClick={() => navigate(link)}
        >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Icon + badge */}
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-2.5 rounded-lg bg-${style.color}-500/10 text-${style.color}-400 ring-1 ring-${style.color}-500/20`}>
                        <span className="material-symbols-outlined">{style.icon}</span>
                    </div>
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold ring-1 ring-emerald-500/20">
                        Explore →
                    </span>
                </div>

                {/* Content */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
                    {description && (
                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{description}</p>
                    )}

                    {/* Decorative progress bar */}
                    <div className="h-2 w-full bg-slate-700/30 rounded-full overflow-hidden ring-1 ring-white/5">
                        <div className={`h-full bg-gradient-to-r ${style.gradient} w-[65%] rounded-full progress-glow-${style.color}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;