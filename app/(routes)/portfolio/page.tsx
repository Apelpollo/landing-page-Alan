import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "../../../data";

// import AvatarPortfolio from "@/components/ui/avatar-portfolio";
// import CircleImage from "@/components/ui/circle-image";
import TransitionPage from "@/components/ui/TranstionPage";
import ContainerPage from "@/components/ui/container-page";
import PortfolioBox from "@/components/ui/portfolioBoxProps";


const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            {/* <AvatarPortfolio /> */}
            {/* <CircleImage /> */}
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-purple">trabajos realizados</span></h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;