
import React, { useState, useRef, createContext } from 'react'
import NavBar from '../components/NavBar'
import Resumephotologo from '../assets/Resumephotologo.png'
import ResumeForm from './ResumeForm'
import ResumePreview from './ResumePreview'
import { useAuth } from "../AuthContext";

const personaldetail = createContext();
const educationaldetail = createContext();
const experiencedetail = createContext();
const skilldetail = createContext();
const projectdetail = createContext();
const achievementdetail = createContext();
const pordetail = createContext();
const extracurriculardetail = createContext();

const ResumeMaker = () => {
    const { isAuthenticated } = useAuth();
    const [formData, setformData] = useState({
        fullname: '',
        emailId: '',
        phoneNumber: '',
        linkedin: '',
        github: '',
    });
    const [confirmedData, setconfirmedData] = useState([]);
    const [allEducationData, setallEducationData] = useState([]);
    const [allExperienceData, setallExperienceData] = useState([]);
    const [skillData, setskillData] = useState({
        programmingLang: '',
        libraries: '',
        areaOfInterest: ''
    });
    const [allskillData, setallskillData] = useState([]);
    const [allProjectData, setallProjectData] = useState([]);
    const [allAchievementData, setallAchievementData] = useState([]);
    const [allPorData, setallPorData] = useState([]);
    const [allExtraCurricularData, setallExtraCurricularData] = useState([]);

    const nextViewportRef = useRef(null);

    const handleScrollToNextViewport = () => {
        if (isAuthenticated) {
            nextViewportRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Please login to access this feature.');
        }
    };

    return (
        <div className="min-h-screen bg-bg-dark">
            <NavBar />

            {/* Hero Section */}
            <div className="relative w-full overflow-hidden mesh-bg">
                <div className="absolute inset-0 hero-gradient pointer-events-none" />
                <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-16 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Text */}
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6">
                                An <span className="gradient-text">Excellent</span> and
                                <br />a very <span className="gradient-text">Easy</span> way to
                                <br />build a <span className="text-secondary font-black">Resume</span>
                            </h1>
                            <p className="text-slate-400 text-lg mb-8 max-w-lg">
                                Create ATS-friendly resumes with our builder and professional templates. Stand out from the crowd.
                            </p>
                        </div>
                        {/* Image */}
                        <div className="flex-shrink-0 w-full md:w-[350px]">
                            <img src={Resumephotologo} alt="Resume Templates" className="w-full drop-shadow-2xl" />
                        </div>
                    </div>

                    {/* CTA Bar */}
                    <div className="mt-12 glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-white font-bold text-lg sm:text-xl">
                            Start building awesome resume 🛠️📑
                        </p>
                        <button
                            className="glow-button px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold text-base flex items-center gap-2"
                            onClick={handleScrollToNextViewport}
                        >
                            Get Started
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Resume Form & Preview (authenticated only) */}
            {isAuthenticated && (
                <div ref={nextViewportRef} className="bg-bg-dark">
                    <div className="max-w-[1400px] mx-auto px-6 py-12">
                        <p className="text-2xl md:text-3xl text-slate-300 text-center mb-8">
                            One step closer to seeking job opportunities
                        </p>
                        <div className="flex flex-col md:flex-row w-full gap-6">
                            <personaldetail.Provider value={{ formData, setformData, confirmedData, setconfirmedData }}>
                                <educationaldetail.Provider value={{ allEducationData, setallEducationData }}>
                                    <experiencedetail.Provider value={{ allExperienceData, setallExperienceData }}>
                                        <skilldetail.Provider value={{ skillData, setskillData, allskillData, setallskillData }}>
                                            <projectdetail.Provider value={{ allProjectData, setallProjectData }}>
                                                <achievementdetail.Provider value={{ allAchievementData, setallAchievementData }}>
                                                    <pordetail.Provider value={{ allPorData, setallPorData }}>
                                                        <extracurriculardetail.Provider value={{ allExtraCurricularData, setallExtraCurricularData }}>
                                                            <ResumeForm />
                                                            <ResumePreview />
                                                        </extracurriculardetail.Provider>
                                                    </pordetail.Provider>
                                                </achievementdetail.Provider>
                                            </projectdetail.Provider>
                                        </skilldetail.Provider>
                                    </experiencedetail.Provider>
                                </educationaldetail.Provider>
                            </personaldetail.Provider>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ResumeMaker

export { personaldetail, educationaldetail, experiencedetail, skilldetail, projectdetail, achievementdetail, pordetail, extracurriculardetail }
