import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Apple Math Pad Clone",
    imgSrc: "/project-imgs/apple-mathpad-clone.png",
    code: "https://github.com/ThousifXahamed07/Apple-math-padclone",
    projectLink: "https://calc-fe.vercel.app/",
    tech: ["TypeScript", "Python","React", "Gemini API"],
    description:
      "Apple Math Pad Clone is an AI-powered calculator app utilizing the Gemini API to deliver intelligent, context-aware solutions for mathematical queries. Designed with a sleek and user-friendly interface, it empowers users to perform basic and advanced calculations effortlessly.",
    modalContent: (
      <>
        <p>
          Apple Math Pad Clone is an innovative AI-powered calculator application inspired by Apple's Math Pad. The app integrates the Gemini API to enhance its functionality, offering intelligent solutions, step-by-step guidance, and error correction for various mathematical problems.
        </p>
        <p>
          The frontend is developed using TypeScript and React, ensuring a responsive and visually appealing interface, while the backend leverages Python with FastAPI for efficient and robust computation. This combination ensures accurate and real-time results for users.
        </p>
        <p>
          Apple Math Pad Clone is perfect for students, educators, and professionals, providing a dependable platform for solving equations, exploring concepts, and performing symbolic computations with ease.
        </p>
        <p>
          The app is hosted on Vercel at <a href="https://calc-fe.vercel.app/" target="_blank">calc-fe.vercel.app</a>, ensuring a fast and reliable experience for users.
        </p>
      </>
    ),
  },  
  {
    title: "Soul-OTT",
    imgSrc: "/project-imgs/movix-website.png",
    code: "https://github.com/ThousifXahamed/Soul-ott",
    projectLink: "https://soul-ott.vercel.app/",
    tech: ["React", "TailwindCSS", "IMDB API"],
    description:
      "Soul-OTT is a movie and TV show discovery platform that utilizes the IMDB API to provide information on various titles, allowing users to search, explore, and get detailed insights into their favorite movies and series.",
    modalContent: (
      <>
        <p>
          Soul-OTT is a web application that helps users discover and explore movies and TV shows. With an intuitive and visually appealing interface built using React and Tailwind CSS, users can browse through a vast collection of movies and shows.
        </p>
        <p>
          By leveraging the IMDB API, MOVIX offers real-time data on movie details, ratings, and reviews. Users can also search for specific titles, explore popular genres, and stay up-to-date with trending content.
        </p>
        <p>
          Whether you're looking for the latest blockbuster or a classic hit, Soul-OTT makes it easy to find the perfect entertainment.
        </p>
        <p>
          Soul-OTT is hosted on Vercel, ensuring fast and reliable performance for all users.
        </p>
      </>
    ),
  },
  {
    title: "Gemini-Clone",
    imgSrc: "/project-imgs/gemini-clone-website.png",
    code: "https://github.com/ThousifXahamed/Vbot-assistance",
    projectLink: "https://vbot-assistance.vercel.app/",
    tech: ["React", "Vite.js", "TailwindCSS"],
    description:
      "Gemini-Clone is a replica of Google's Gemini AI interface, built with React, Vite.js, and Tailwind CSS to deliver a fast, modern, and responsive experience that mimics the real-time AI search interactions of the original Gemini platform.",
    modalContent: (
      <>
        <p>
          Gemini-Clone is a Google Gemini-inspired search interface that simulates real-time AI-powered search interactions. Built with React and Vite.js for optimized performance, the platform showcases fast, responsive features and dynamic user interactions.
        </p>
        <p>
          The design, powered by Tailwind CSS, mirrors the sleek, minimalistic look of Google's Gemini, offering users a clean and intuitive interface that enhances the overall search experience.
        </p>
        <p>
          With Gemini-Clone, users can experience a similar AI-driven search experience, replicating the speed and efficiency of Google Gemini's AI capabilities in a streamlined web app.
        </p>
        <p>
          Hosted on Vercel, Gemini-Clone is designed for quick loading and smooth performance, making it a go-to option for those interested in AI-powered search technologies.
        </p>
      </>
    ),
  },  
  {
    title: "Homyz",
    imgSrc: "/project-imgs/homyz-website.png",
    code: "https://github.com/ThousifXahamed/houzey-frontend",
    projectLink: "https://real-estate-website-enp.pages.dev/",
    tech: ["React", "TailwindCSS"],
    description:
      "Homyz is a modern, responsive real estate landing page built with React and Tailwind CSS, designed to showcase properties in an elegant and user-friendly way. It offers a seamless browsing experience for users looking to explore available properties and services.",
    modalContent: (
      <>
        <p>
          Homyz is a sleek and professional landing page designed specifically for real estate businesses. Built with React and Tailwind CSS, it provides a fully responsive and visually appealing interface that adapts perfectly to any device.
        </p>
        <p>
          The website offers users an easy way to browse through listed properties, view detailed information, and connect with real estate agents. Its clean design, optimized for both performance and aesthetics, ensures a smooth user experience.
        </p>
        <p>
          Homyz is tailored to meet the needs of modern real estate businesses, featuring sections for property listings, testimonials, contact forms, and more.
        </p>
        <p>
          Hosted on Vercel, Homyz provides fast load times and reliable performance, making it a perfect solution for real estate professionals looking to create an online presence.
        </p>
      </>
    ),
  },  
  {
    title: "Foodzie",
    imgSrc: "/project-imgs/foodzie-website.png",
    code: "https://github.com/ThousifXahamed/Foodzie",
    projectLink: "https://foodzie-five.vercel.app/",
    tech: ["React", "Vite.js", "TailwindCSS"],
    description:
      "Foodzie is a sleek, modern restaurant landing page built with React, Vite.js, and Tailwind CSS, designed to showcase restaurant menus, services, and reservations with a visually appealing and responsive design.",
    modalContent: (
      <>
        <p>
          Foodzie is a beautifully crafted restaurant landing page that offers a seamless browsing experience for customers looking to explore a restaurant's menu, services, and special offers.
        </p>
        <p>
          Built with React and Vite.js, the site ensures optimized performance and quick load times. Tailwind CSS is used to deliver a modern, clean design that looks great on any device, providing a responsive and intuitive user experience.
        </p>
        <p>
          Foodzie allows customers to view featured dishes, explore the full menu, and make reservations effortlessly, creating a one-stop solution for restaurants to engage with their audience online.
        </p>
        <p>
          Hosted on Vercel, Foodzie ensures fast performance and reliable access, making it a perfect platform for restaurant businesses looking to attract and retain customers with an impressive online presence.
        </p>
      </>
    ),
  },
  {
    title: "3D Landing Page",
    imgSrc: "/project-imgs/3d-landing-page.png",
    code: "https://github.com/ThousifXahamed/ByteBrigade-3d-Landingpage",
    projectLink: "https://byte-brigade-3d-landingpage.vercel.app/",
    tech: ["React", "TypeScript", "TailwindCSS"],
    description:
      "A cutting-edge 3D landing page built using React, TypeScript, and Tailwind CSS, providing an immersive, interactive experience with dynamic 3D elements and smooth animations.",
    modalContent: (
      <>
        <p>
          The 3D Landing Page is a visually stunning and interactive website designed to captivate users with real-time 3D elements and animations. Powered by React and TypeScript, it provides a high-performance, type-safe environment for creating immersive web experiences.
        </p>
        <p>
          Using Tailwind CSS, the design maintains a clean, responsive layout that works seamlessly across all devices. The 3D components, powered by libraries like Three.js or React Three Fiber, create an engaging, futuristic look.
        </p>
        <p>
          Whether it's for showcasing products or providing a unique brand experience, the 3D Landing Page is perfect for businesses or individuals looking to make a bold statement online.
        </p>
        <p>
          Hosted on Vercel, this project combines smooth interactions, fast load times, and responsive design, ensuring a compelling user experience from start to finish.
        </p>
      </>
    ),
  }
  
  
];
