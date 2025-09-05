"use client"

import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "../../../data";
import { useLanguage } from "@/contexts/LanguageContext";

import TransitionPage from "@/components/ui/TranstionPage";
import ContainerPage from "@/components/ui/container-page";
import PortfolioBox from "@/components/ui/portfolioBoxProps";


const PortfolioPage = () => {
    const { language } = useLanguage();
    
    const titles = {
        es: {
            main: "Mis últimos",
            highlight: "trabajos realizados"
        },
        en: {
            main: "My latest",
            highlight: "completed works"
        }
    };

    return (
        <ContainerPage>
            <TransitionPage />
            {/* <AvatarPortfolio /> */}
            {/* <CircleImage /> */}
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    {titles[language].main}{' '}
                    <span className="font-bold text-purple">{titles[language].highlight}</span>
                </h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio[language].map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;