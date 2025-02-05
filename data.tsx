import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech,Github,Mail ,MessageCircleMore,File, Download   } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // {
    //     id: 5,
    //     title: "Home",
    //     icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    //     link: "/testimonials",
    // },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "universidad tecnologica de chihuahua",
        subtitle: "TSU ",
        description: "termine mi tsu(Tecnico superior universitario) en la especialidad tecnnologias de la informacion en el Area: Desarrollo de software Multiplataformas",
        date: "sep 2021-23 ",
    },
    {
        id: 2,
        title: "Frond-end",
        subtitle: "diseño UX/UI",
        description: "Diseñé y desarrollé interfaces de usuario utilizando React y Material-UI, mejorando la experiencia del usuario en un 30%. crean un menu el cual te permita navegar facilmente. ",
        
        
        date: "sep 2023-24",
    },
    {
        id: 3,
        title: "Proyectos",
        subtitle: "happybara",
        description: "Desarrollé una plataforma innovadora que ayuda a los usuarios a describir sus emociones a través de una interfaz amigable y accesible para todas las edades. Cada emoción se representa mediante la mascota de la página y una paleta de colores intuitiva, lo que facilita la identificación y expresión de las emociones de manera visual y comprensible.",
        date: "Ago 2019",
    },
    // {
    //     id: 4,
    //     title: "Prácticas Grado",
    //     subtitle: "WebWizards Inc.",
    //     description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
    //     date: "Mar 2018",
    // },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: " años de experiencia laboral",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 3,
        text: "años de desarrollo de software",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 5,
        text: "Proyectos realizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: "",
        endCounter: "-",
        text: "",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "HappyBara",
        image: "/imagen1.png",
        urlGithub: "https://github.com/Apelpollo/happybara",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "juice animation",
        image: "/imagen2.png",
        urlGithub: "https://github.com/Apelpollo/juice",
        urlDemo: "https://juice-animation.netlify.app/",
    },
    {
        id: 3,
        title: "Figma profile UX/UI",
        image: "/project_figma.png",
        urlGithub: "https://www.figma.com/proto/QA0XXU0AIQQUOdNSsIcJma/Mobile-mock-Alan-Erives?node-id=0-1&t=LMZmemQkrLaM5Tvd-1",
        urlDemo: "https://www.figma.com/proto/QA0XXU0AIQQUOdNSsIcJma/Mobile-mock-Alan-Erives?node-id=0-1&t=LMZmemQkrLaM5Tvd-1",
    },
    // {
    //     id: 4,
    //     title: "Ideas Creativas",
    //     image: "/image-4.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
  
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];
export const contact =[
{
    id:1,
    logo:<Mail size={40} strokeWidth={1} />,
    urlsite:"mailto:alanerives08@gmail.com",
},
{
    id:2,
    logo: <Github size={40} strokeWidth={1}/> ,
    urlsite:"https://github.com/Apelpollo",
},
{
    id:3,
    logo: <MessageCircleMore  size={40} strokeWidth={1}/> ,
    urlsite:"https://wa.me/526143968333",
},
// {
//     id:4,
//     logo: <File  size={30} strokeWidth={1}/> ,
//     urlsite:"/tsu.Alan paul Erives Lujan software developer" ,
// },

];