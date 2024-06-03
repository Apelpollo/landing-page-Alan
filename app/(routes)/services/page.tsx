import AvatarServices from "@/components/ui/avatar-servicies";
import CircleImage from "@/components/ui/circle-image";
import SliderServices from "@/components/ui/slider-services";
import TransitionPage from "@/components/ui/TranstionPage";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            {/* <AvatarServices className="z-40"/> */}
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-purple"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                    <button className="px-3 py-2 rounded-lg bg-purple hover:bg-purple-900">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;