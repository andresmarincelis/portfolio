import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Mail,
  Github,
  FileUser,
  Monitor,
  Zap,
  GitBranch,
  Smartphone,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <FileUser size={30} strokeWidth={1} />,
    src: "https://www.dropbox.com/scl/fi/fiwv522ggwxk9z0tz44ud/CV-ANDRES-MARIN-2025.pdf?rlkey=3ehxjsbij37jimd05o86uchv6&st=rgu90yco&dl=0",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/andresmarincelis/",
  },
  {
    id: 3,
    logo: <Mail size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 4,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/andresmarincelis",
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
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital. Uso diario de React, Tailwind, Git y TypeScript.",
    date: "Nov 2023",
  },
  {
    id: 2,
    title: "Creador de Experiencias Digitales",
    description:
      "Trabajo en proyectos modernos donde combino diseño e interactividad. Desarrollo de interfaces limpias usando React y nuevas herramientas como React Native desde 2024.",
    date: "Ago 2023",
  },
  {
    id: 3,
    title: "Especialista en Desarrollo Frontend",
    description:
      "Apoyo en la creación de plataformas escalables. Introducción formal a TypeScript y fortalecimiento de habilidades en UI con buenas prácticas y trabajo en equipo.",
    date: "Jun 2023",
  },
  {
    id: 4,
    title: "Prácticas de Desarrollo Web",
    description:
      "Participación en proyectos internos y de clientes. Desarrollo de componentes reutilizables y manejo de lógica en aplicaciones React.",
    date: "Abr 2023",
  },
  {
    id: 5,
    title: "Inicio como Desarrollador Web",
    description:
      "Desde 2023 me dedico a la programación, creando aplicaciones propias y resolviendo problemas reales. Aprendizaje continuo con foco en React, JavaScript y buenas prácticas modernas.",
    date: "Ene 2023",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 2,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 20,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 30,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 20,
    text: "Repositorios en GitHub",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Monitor />,
    title: "Desarrollo frontend",
    description:
      "Interfaces web y móviles con React, TypeScript y Tailwind CSS, enfocadas en usabilidad y diseño básico responsivo.",
  },
  {
    icon: <Zap />,
    title: "Integración de APIs",
    description:
      "Conexión y uso de APIs externas para mejorar funcionalidades en web y móvil.",
  },
  {
    icon: <GitBranch />,
    title: "Control de versiones",
    description:
      "Gestión de repositorios con Git y GitHub, con nociones básicas de metodologías ágiles.",
  },
  {
    icon: <Smartphone />,
    title: "Diseño responsivo",
    description:
      "Adaptación de interfaces para distintos dispositivos, garantizando buena experiencia móvil y desktop.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Calculator App",
    image: "/Apps/appcalculator2.jpg",
    urlGithub: "https://github.com/andresmarincelis/iOSCalculator",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Calories App",
    image: "/Apps/caloriesapp1.jpg",
    urlGithub: "https://github.com/andresmarincelis/CaloriesApp",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Movies App",
    image: "/Apps/moviesapp1.jpg",
    urlGithub: "https://github.com/andresmarincelis/MoviesApp",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "Arsenal App",
    image: "/Apps/arsenalapp1.jpg",
    urlGithub: "https://github.com/andresmarincelis/ArsenalApp",
    urlDemo: "#!",
  },
  {
    id: 5,
    title: "Poke App",
    image: "/Apps/pokeapp1.jpg",
    urlGithub: "https://github.com/andresmarincelis/pokedexApp",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "Gamer Galaxy PF",
    image: "/Apps/gamergalaxypf3.png",
    urlGithub: "https://github.com/andresmarincelis/pfgamergalaxy",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "Countries PI",
    image: "/Apps/countriespi.png",
    urlGithub: "https://github.com/andresmarincelis/PICountries",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "¡En proceso!",
    image: "/Apps/comingsoon.png",
    urlGithub: null,
    urlDemo: null,
    isPlaceholder: true,
  },
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
