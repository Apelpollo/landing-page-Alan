"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { useLanguage } from '@/contexts/LanguageContext';

const Introduction = () => {
    const { language } = useLanguage();
    
    const content = {
        es: {
            main: "Si puedes pensarlo,",
            animations: [
                'puedo programarlo',
                1000,
                'puedo optimizarlo',
                1000,
                'puedo implementarlo',
                1000,
                'puedo desarrollarlo',
                1000
            ],
            description: "Como desarrollador frontend mi objetivo es combinar tanto diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.",
            buttons: {
                projects: "Ver proyectos",
                contact: "Contacta conmigo"
            }
        },
        en: {
            main: "If you can think it,",
            animations: [
                'can program it',
                1000,
                'can optimize it',
                1000,
                'can implement it',
                1000,
                'can development it',
                1000
            ],
            description: "As a frontend developer, my goal is to combine both design and functionality to create impactful and accessible digital experiences.",
            buttons: {
                projects: "View projects",
                contact: "Contact me"
            }
        }
    };

    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="700" height="600" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        {content[language].main} <br />
                        <TypeAnimation
                            sequence={content[language].animations}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-purple"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        {content[language].description}
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            {content[language].buttons.projects}
                        </a>
                        <a href="/services"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            {content[language].buttons.contact}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;