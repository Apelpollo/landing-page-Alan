
"use client"

import CircleImage from "@/components/ui/circle-image";
import SliderServices from "@/components/ui/slider-services";
import TransitionPage from "@/components/ui/TranstionPage";
import { contact } from "../../../data";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import {File } from "lucide-react"

const ServicesPage = () => {
    const { language } = useLanguage();
    
    const titles = {
        es: {
            main: "Mis",
            highlight: "Contactos"
        },
        en: {
            main: "My",
            highlight: "Contacts"
        }
    };

    return (
        <>

            <TransitionPage />
            <CircleImage />
            {/* <AvatarServices className="z-40"/> */}
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">


                <div className="max-w-[400px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 mt-40">
                        {titles[language].main}{' '}
                        <span className="font-bold text-purple">{titles[language].highlight}</span>
                    </h1>
                    <div className="flex justify-center ">
                        {contact.map(({ logo, urlsite, id }) => (
                            <Link
                                key={id}
                                href={urlsite}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary mr-10 grow"
                            >
                                {logo}
                            </Link>

                        ))}

                        <a href="/2.pdf" download><File size={40} strokeWidth={1}> </File></a>
                       
                    </div>
                </div>

               

                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;