
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    c,
    meta,
    starbucks,
    lereacteur,
    school42,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    saas_shirt,
    metaverse,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "c",
      icon: c,
    },
  ];
  
  const experiences = [
    {
      title: "Formation FullStack Web & Application Mobile",
      company_name: "Le Réacteur",
      icon: lereacteur,
      iconBg: "#383E56",
      date: "03/2020 - 05/2020",
      points: [
        "HTML CSS JavaScript",
        "Front-End & Back-End",
        "React React Native",
        "One-Page, E-Commerce, Blog, Corporate, Forum - React",
        "Mobile Application - React Native",
        "SEO",
      ],
    },
    {
      title: "Expert  informatique",
      company_name: "École 42",
      icon: school42,
      iconBg: "#E6DEDD",
      date: "11/2022 - 11/2023",
      points: [
        "C",
        "C++",
        "HTML CSS Javascrit JQuery",
        "VM",
      ],
    },
    // {
    //   title: "Web Developer | Content Creator",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    // ""
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Jonathan proved me wrong.",
      name: "Lisa Buckhee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Jonathan does.",
      name: "David Martèz",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Jonathan optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Patricia Chang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SaaS T-Shirt",
      description:
        "<EN> A software for designing and selling custom t-shirts, featuring design tools and e-commerce integration. <FR> Un logiciel pour concevoir et vendre des t-shirts personnalisés, avec des outils de conception et une intégration e-commerce.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: saas_shirt,
      source_code_link: "https://github.com/0Jonathan/saas_shirtmodel",
    },
    {
      name: "Metaverse",
      description:
        "<EN> One-page website with multiple different worlds. <FR> Un site web One-page avec différents monde.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "framer-motion",
          color: "pink-text-gradient",
        },
      ],
      image: metaverse,
      source_code_link: "https://github.com/0Jonathan/metaverse",
    },
    {
      name: "Trip Guide",
      description:
        " <EN> A comprehensive travel booking platform that allows users to book flights, hotels, etc. With curated recommendations for popular destinations. <FR> Une plateforme complète de réservation de voyages qui permet aux utilisateurs de réserver des vols, des hôtels. Il propose des recommandations personnalisées pour les destinations populaires.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/0Jonathan/travel_guide",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };