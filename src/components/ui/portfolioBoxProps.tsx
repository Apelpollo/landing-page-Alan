import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        subtitle?: string,
        description?: string,
        image: string,
        urlGithub?: string,
        urlDemo?: string,
        urlFigma?: string,
        type: "development" | "design"
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, subtitle, description, image, urlDemo, urlGithub, urlFigma, type } = data

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
        >
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            {subtitle && (
                <p className="mb-3 text-sm text-gray-400">{subtitle}</p>
            )}
            
            {/* Imagen con tooltip */}
            <div className="relative group">
                <Image
                    src={image}
                    alt="Image"
                    width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-auto cursor-pointer"
                />
                {/* Tooltip que ocupa casi toda la imagen */}
                {description && (
                    <div className="absolute inset-0 bg-black/70 text-white text-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center p-4 text-center z-10">
                        {description}
                    </div>
                )}
            </div>

            <div className="flex gap-5 mt-5">
                {type === "development" ? (
                    <>
                        <Link
                            href={urlGithub || "#!"}
                            target="_blank"
                            className="p-2 transition duration-150 rounded-lg bg-purple hover:bg-purple-900"
                        >
                            Github
                        </Link>

                        <Link
                            href={urlDemo || "#!"}
                            target="_blank"
                            className="p-2 transition duration-150 rounded-lg bg-purple hover:bg-purple-900"
                        >
                            Demo
                        </Link>
                    </>
                ) : (
                    <Link
                        href={urlFigma || "#!"}
                        target="_blank"
                        className="p-2 transition duration-150 rounded-lg bg-purple hover:bg-purple-900"
                    >
                        Figma
                    </Link>
                )}
            </div>
        </div>
    );
}

export default PortfolioBox