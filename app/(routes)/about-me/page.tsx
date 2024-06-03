"use client"

import { Avatar } from "@/components/ui/avatar";
import ContainerPage from "@/components/ui/container-page";
import CounterServices from "@/components/ui/CounterServices";
import TimeLine from "@/components/ui/time-line";
import TransitionPage from "@/components/ui/TranstionPage";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-purple">
                        trayectoria profesional
                    </span>
                </h1>

                <CounterServices />

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;