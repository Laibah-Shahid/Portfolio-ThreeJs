/* eslint-disable no-unused-vars */
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
    docker,
    meta,
    ncl,
    tesla,
    shopify,
    threejs,
    hospital,
    zentry,
    admin,
    fizzi,
    ecommerce,
    portfolionext,
    nexus,
    githubClone,
    brainwave,
    atompoint,
    klobbi,
    
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
      title: "Frontend Engineer",
      icon: web,
    },
    {
      title: "AI Engineer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Backend Engineer",
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Engineer",
      company_name: "Atompoint-Cloudnosys",
      icon: atompoint,
      iconBg: "#383E56",
      date: "Nov 2025 - Present",
      points: [
        "Built and optimized responsive frontend features using React, TypeScript, and Tailwind CSS, improving rendering efficiency and contributing to a 20% increase in user engagement across key product flows.",
        "Refactored and modernized legacy frontend components, enhancing maintainability and performance while preserving 95% functional and UI accuracy during feature updates.",
        "Worked closely with product, design, and backend teams to deliver UI improvements, resolve production issues, and ensure scalable, user-centric interfaces across the Cloudnosys platform.",
      ],
    },
    {
      title: "Junior Web Developer",
      company_name: "Klobbi Pvt Ltd",
      icon: klobbi,
      iconBg: "#E6DEDD",
      date: "Jun 2025 - Oct 2025",
      points: [
        "Converted a React-based multipage template into a Laravel + Tailwind CSS architecture, improving scalability and maintainability while reducing page load time by 25%.",
        "Managed dynamic product content through a custom CMS, ensuring smooth backend-frontend synchronization and maintaining 99% content accuracy.",
        "Built responsive, interactive UI components for marketing platforms and contributed to AI-driven solution concepts, resulting in a 30% improvement in mobile responsiveness.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Neuro Computational Lab",
      icon: ncl,
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Oct 2024",
      points: [
        " Designed and developed responsive and visually appealing UI components using React, ensuring seamless cross-device compatibility.",
        "Migrated existing PHP-based UI designs to React, enhancing performance, efficiency, and modernizing the codebase maintaining 95% accuracy.",
        "Integrated and linked multiple pages for smooth user interactions, optimizing navigation and overall user experience.",
        " Optimized UI performance through efficient rendering and state management techniques resulting in a20% average increase in user engagement.",
      ],
    },
   
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
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Zentry",
      description:
        "Zentry clone replicating an award-winning website with a focus on sleek design, seamless functionality, and user experience for performance and responsiveness.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "gsap",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: zentry,
      source_code_link: "https://github.com/Laibah-Shahid/Zentry-React-GSAP",
    },
    {
      name: "Patient Management",
      description:
        "Healthcare platform for patient registration, appointment scheduling, medical record management, and SMS notifications, ensuring efficient healthcare services.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: hospital,
      source_code_link: "https://github.com/Laibah-Shahid/patient-management-system",
    },
    {
      name: "Admin Dashboard",
      description:
        "React Admin Dashboard application with light/dark modes, interactive charts, data tables, FAQ, forms, and calendar integration for streamlined admin management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "materialui",
          color: "green-text-gradient",
        },
        {
          name: "nivo",
          color: "pink-text-gradient",
        },
      ],
      image: admin,
      source_code_link: "https://github.com/Laibah-Shahid/Admin-Dashboard",
    },
    {
      name: "Fizzi-Soda Site",
      description:
        "Fizzi, an engaging soda website with captivating animations and 3D models, offering an immersive and interactive experience.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "gsap",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: fizzi,
      source_code_link: "https://github.com/Laibah-Shahid/Fizzi-ThreeJS-GSAP",
    },
    {
      name: "Portfolio",
      description:
        "A Next.js portfolio website with multiple pages, showcasing skills, projects, and a contact section for a comprehensive personal presentation.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolionext,
      source_code_link: "https://github.com/Laibah-Shahid/portfolio-nextjs",
    },
    {
      name: "Brainwave AI",
      description:
        "A website demonstrating the transformative capabilities of artificial intelligence through innovative features and applications.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: brainwave,
      source_code_link: "https://github.com/Laibah-Shahid/Brainwave-AI",
    },
    {
      name: "Github Clone ",
      description:
        "A seamless and responsive clone of GitHub's homepage, featuring a clean layout and intuitive navigation for an optimal user experience.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "framermotion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: githubClone,
      source_code_link: "https://github.com/Laibah-Shahid/github-clone",
    },
    {
      name: "Creative Nexus ",
      description:
        "A multi-page website designed with a focus on sleek, modern aesthetics, seamless functionality, and an exceptional user experience, ensuring easy navigation and interactive features.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nexus,
      source_code_link: "https://github.com/Laibah-Shahid/Creative-Nexus",
    },
    {
      name: "Ecommerce",
      description:
        "A multi-page eCommerce website showcasing products with features like product pages, shopping cart, and order review for a smooth shopping experience.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/Laibah-Shahid/E-Commerce-Site",
    },
    // {
    //   name: "Car Rent",
    //   description:
    //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: carrent,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };