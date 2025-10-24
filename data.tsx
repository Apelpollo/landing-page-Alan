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
        src: "https://www.linkedin.com/in/alan-erives-83816624b/",
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


export const itemsNavbar = {
    es: [
        {
            id: 1,
            title: "Inicio",
            icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
            link: "/",
        },
        {
            id: 2,
            title: "Usuario",
            icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
            link: "/about-me",
        },
        {
            id: 3,
            title: "Servicios",
            icon: <BookText size={25} color="#fff" strokeWidth={1} />,
            link: "/services",
        },
        {
            id: 4,
            title: "Portafolio",
            icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
            link: "/portfolio",
        },
    ],
    en: [
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
            title: "Services",
            icon: <BookText size={25} color="#fff" strokeWidth={1} />,
            link: "/services",
        },
        {
            id: 4,
            title: "Portfolio",
            icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
            link: "/portfolio",
        },
    ]
};

export const dataAboutPage = {
    es: [
        {
            id: 1,
            title: "Universidad Tecnológica de Chihuahua",
            subtitle: "Ingeniería",
            description: "Terminé mi ingeniería en la especialidad de Tecnologías de la Información en el Área: Desarrollo de Software Multiplataforma",
            date: "sep 2021-25",
        },
        {
            id: 2,
            title: "Desarrollador Backend",
            subtitle: "Play Lab",
            description: "Desarrollé e implementé un sistema seguro con Python (Django) que logró una mejora del 80% en seguridad mediante la implementación de autenticación dual para instituciones y usuarios con credenciales proporcionadas por la institución. Aumenté la estabilidad del despliegue en un 70% a través de la integración de GitHub con PythonAnywhere, automatizando la implementación y actualizaciones de código. Optimicé el rendimiento del backend migrando la base de datos de SQLite3 a MySQL, mejorando la escalabilidad y gestión de datos. Construí una función dinámica para recuperar imágenes basadas en puntos de usuario y nivel de inglés, creando una experiencia personalizada. Aseguré un control de versiones eficiente con GitHub y SSH, permitiendo colaboración estructurada y desarrollo continuo.",
            date: "Ene-Sep 2024",
        },
        {
            id: 3,
            title: "Ingeniero en Software",
            subtitle: "(MVP) - CommunityLab",
            description: "Contribuí a la modernización de la plataforma de CommunityLab mejorando módulos existentes y migrándolos a un stack moderno con Next.js, Tailwind, MongoDB y Node.js. Diseñé y validé prototipos de interfaz de usuario en Figma, asegurando alineación con estándares de usabilidad y accesibilidad. Construí librerías de desarrollo reutilizables para optimizar flujos de trabajo y acelerar la entrega de características. Implementé mejoras en la gestión de usuarios y procesos para aumentar la eficiencia del sistema. Utilicé GitHub para control de versiones y desarrollo colaborativo, asegurando integración fluida en todo el equipo.",
            date: "Ene-Sep 2025",
        },
        {
            id: 4,
            title: "Front-end",
            subtitle: "diseño UX/UI",
            description: "Diseñé y desarrollé interfaces de usuario utilizando React y Material-UI, mejorando la experiencia del usuario en un 30%. crean un menu el cual te permita navegar facilmente. ",
            date: "sep 2023-24",
        },
        {
            id: 5,
            title: "Proyectos",
            subtitle: "happybara",
            description: "Desarrollé una plataforma innovadora que ayuda a los usuarios a describir sus emociones a través de una interfaz amigable y accesible para todas las edades. Cada emoción se representa mediante la mascota de la página y una paleta de colores intuitiva, lo que facilita la identificación y expresión de las emociones de manera visual y comprensible.",
            date: "Ago 2019",
        },
    ],
    en: [
        {
            id: 1,
            title: "Technological University of Chihuahua",
            subtitle: "Engineering",
            description: "I completed my engineering degree in Information Technologies specializing in Multi-platform Software Development",
            date: "sep 2021-25",
        },
        {
            id: 2,
            title: "Backend Developer",
            subtitle: "Play Lab",
            description: "Developed and deployed a secure system with Python (Django) that achieved an 80% improvement in security by implementing dual authentication for institutions and users with institution-provided credentials. Increased deployment stability by 70% through the integration of GitHub with PythonAnywhere, automating code implementation and updates. Optimized backend performance by migrating the database from SQLite3 to MySQL, enhancing scalability and data management. Built a dynamic function to retrieve images based on user points and English level, creating a personalized experience. Ensured efficient version control with GitHub and SSH, enabling structured collaboration and continuous development.",
            date: "Jan-Sep 2024",
        },
        {
            id: 3,
            title: "Software Engineer",
            subtitle: "(MVP) - CommunityLab",
            description: "Contributed to the modernization of CommunityLab's platform by improving existing modules and migrating them to a modern stack with Next.js, Tailwind, MongoDB, and Node.js. Designed and validated user interface prototypes in Figma, ensuring alignment with usability and accessibility standards. Built reusable development libraries to optimize workflows and accelerate feature delivery. Implemented user management enhancements and process improvements to increase system efficiency. Leveraged GitHub for version control and collaborative development, ensuring smooth integration across the team.",
            date: "Jan-Sep 2025",
        },
        {
            id: 4,
            title: "Front-end",
            subtitle: "UX/UI design",
            description: "I designed and developed user interfaces using React and Material-UI, improving user experience by 30%. creating a menu that allows you to navigate easily.",
            date: "sep 2023-24",
        },
        {
            id: 5,
            title: "Projects",
            subtitle: "happybara",
            description: "I developed an innovative platform that helps users describe their emotions through a friendly and accessible interface for all ages. Each emotion is represented through the page's mascot and an intuitive color palette, making it easy to identify and express emotions in a visual and understandable way.",
            date: "Aug 2019",
        },
    ]
}

export const dataCounter = {
    es: [
        {
            id: 0,
            endCounter: 3,
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
            endCounter: 7,
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
    ],
    en: [
        {
            id: 0,
            endCounter: 3,
            text: " years of work experience",
            lineRight: true,
            lineRightMobile: true,
        },
        {
            id: 1,
            endCounter: 3,
            text: "years of software development",
            lineRight: true,
            lineRightMobile: false,
        },
        {
            id: 2,
            endCounter: 7,
            text: "Projects completed",
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
    ]
};

export const serviceData = {
    es: [
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
            description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas",
        },
    ],
    en: [
        {
            icon: <Crop />,
            title: "Branding",
            description: "Development of a solid and coherent brand identity, including logo design, colors and visual elements",
        },
        {
            icon: <Pencil />,
            title: "Web Design",
            description: "Creative and professional design of intuitive and attractive web interfaces, focused on user experience",
        },
        {
            icon: <Computer />,
            title: "Web Development",
            description: "Design and development of custom websites, adapted to your needs",
        },
        {
            icon: <Book />,
            title: "Copywriting",
            description: "Creation of persuasive and attractive content that captures your audience's attention",
        },
        {
            icon: <Rocket />,
            title: "SEO",
            description: "Optimization of your online presence through advanced SEO strategies",
        },
    ]
};

export const dataPortfolio = {
    es: [
        {
            id: 1,
            title: "HappyBara",
            subtitle: "Plataforma de salud mental",
            description: "Hecho con JavaScript vanilla, PHP, MySQL con XAMPP y Bootstrap, HTML5, CSS para salud mental",
            image: "/imagen1.png",
            urlGithub: "https://github.com/Apelpollo/happybara",
            urlDemo: "#!",
            type: "development"
        },
        {
            id: 2,
            title: "Animación Juice",
            subtitle: "Animación CSS",
            description: "Animación interactiva creada con CSS puro que demuestra habilidades en animaciones web",
            image: "/imagen2.png",
            urlGithub: "https://github.com/Apelpollo/juice",
            urlDemo: "https://juice-animation.netlify.app/",
            type: "development"
        },
        {
            id: 3,
            title: "Perfil Figma UX/UI",
            subtitle: "Diseño de mobile-mock",
            description: "Diseño de mobile-mock realizado en Figma con enfoque en UX/UI",
            image: "/project_figma.png",
            urlFigma: "https://www.figma.com/proto/QA0XXU0AIQQUOdNSsIcJma/Mobile-mock-Alan-Erives?node-id=0-1&t=LMZmemQkrLaM5Tvd-1",
            type: "design"
        },
        {
            id: 4,
            title: "Front-end",
            subtitle: "Diseño UX/UI",
            description: "Home de una plataforma de streaming con concepto de las películas de Tim Burton",
            image: "/imagentim.png",
            urlFigma: "https://www.figma.com/proto/4oLenoFSZ2SLOezyUZTuUO/profile-v1?node-id=55-104&t=Ad0fDAzl0VRbXa2L-0&scaling=contain&content-scaling=fixed&page-id=0%3A1",
            type: "design"
        },
        {
            id: 5,
            title: "Design Thinking",
            subtitle: "Wireframing",
            description: "Profile manejo de colores y wireframing",
            image: "/imagendesi.png",
            urlFigma: "https://www.figma.com/proto/4oLenoFSZ2SLOezyUZTuUO/profile-v1?node-id=4-386&t=Ad0fDAzl0VRbXa2L-0&scaling=contain&content-scaling=fixed&page-id=0%3A1",
            type: "design"
        },
    ],
    en: [
        {
            id: 1,
            title: "HappyBara",
            subtitle: "Mental health platform",
            description: "Made with vanilla JavaScript, PHP, MySQL with XAMPP and Bootstrap, HTML5, CSS for mental health",
            image: "/imagen1.png",
            urlGithub: "https://github.com/Apelpollo/happybara",
            urlDemo: "#!",
            type: "development"
        },
        {
            id: 2,
            title: "Juice Animation",
            subtitle: "CSS Animation",
            description: "Interactive animation created with pure CSS demonstrating web animation skills",
            image: "/imagen2.png",
            urlGithub: "https://github.com/Apelpollo/juice",
            urlDemo: "https://juice-animation.netlify.app/",
            type: "development"
        },
        {
            id: 3,
            title: "Figma Profile UX/UI",
            subtitle: "Mobile-mock design",
            description: "Mobile-mock design made in Figma with UX/UI focus",
            image: "/project_figma.png",
            urlFigma: "https://www.figma.com/proto/QA0XXU0AIQQUOdNSsIcJma/Mobile-mock-Alan-Erives?node-id=0-1&t=LMZmemQkrLaM5Tvd-1",
            type: "design"
        },
        {
            id: 4,
            title: "Front-end",
            subtitle: "UX/UI Design",
            description: "Home of a streaming platform with Tim Burton movies concept",
            image: "/imagentim.png",
            urlFigma: "https://www.figma.com/proto/4oLenoFSZ2SLOezyUZTuUO/profile-v1?node-id=55-104&t=Ad0fDAzl0VRbXa2L-0&scaling=contain&content-scaling=fixed&page-id=0%3A1",
            type: "design"
        },
        {
            id: 5,
            title: "Design Thinking",
            subtitle: "Wireframing",
            description: "Profile color management and wireframing",
            image: "/imagendesi.png",
            urlFigma: "https://www.figma.com/proto/4oLenoFSZ2SLOezyUZTuUO/profile-v1?node-id=4-386&t=Ad0fDAzl0VRbXa2L-0&scaling=contain&content-scaling=fixed&page-id=0%3A1",
            type: "design"
        },
    ]
};

export const dataTestimonials = {
    es: [
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
    ],
    en: [
        {
            id: 1,
            name: "George Snow",
            description:
                "Incredible platform! The testimonials here are genuine and have helped me make informed decisions. Highly recommended!",
            imageUrl: "/profile1.png",
        },
        {
            id: 2,
            name: "Juan Pérez",
            description:
                "I love the variety of testimonials available on this page. It's inspiring to see how other people have overcome challenges similar to mine. Thanks for this invaluable source of motivation!",
            imageUrl: "/profile2.png",
        },
        {
            id: 3,
            name: "María García",
            description:
                "Excellent resource for getting authentic opinions about different products and services. It has helped me a lot with my online purchases. Bravo for this site!",
            imageUrl: "/profile3.png",
        },
        {
            id: 4,
            name: "Laura Snow",
            description:
                "What a fantastic discovery! The testimonials here are honest and detailed. I feel more confident making decisions after reading the experiences shared by other users.",
            imageUrl: "/profile4.png",
        },
        {
            id: 5,
            name: "Carlos Sánchez",
            description:
                "A gem on the web. The testimonials are easy to find and well organized. Definitely my number one destination when I need reliable references!",
            imageUrl: "/profile5.png",
        },
        {
            id: 6,
            name: "Antonio Martínez",
            description:
                "Fantastic resource for those seeking validation before making important decisions! The testimonials here are truthful and really useful. Thanks for simplifying my decision-making process!",
            imageUrl: "/profile6.png",
        },
    ]
};
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