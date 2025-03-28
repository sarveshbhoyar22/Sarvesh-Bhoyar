import React, { useEffect, useState, useRef } from "react";
import Card from "../components/MobileCard";
import Box from "../components/Box";
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="projects"
      className={`flex flex-col items-center border-2 border-gray-700 p-10 sm:w-[70%] w-[95%] rounded-3xl m-auto mt-10 mb-10 
      transform transition-all duration-1000 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    > 
    <div className="flex flex-row mb-10 gap-10">
        <Box/>

      <h1 className="font-bold sm:text-4xl text-2xl mb-20">
        Selected Projects</h1>
    </div>

      <div className="sm:flex items-center gap-20">
        <a href="https://mern-bank-system.onrender.com/">
          <Card
            title="Auth Banking System"
            image="/authBank.png"
            description="A secure, full-stack banking system built with React.js, Tailwind CSS, Node.js, Express.js, and MongoDB, featuring user authentication, account management, transactions, loans, and notifications."
          />
        </a>

        <a href="https://openchat-amz0.onrender.com/">
          <Card title="Open Chat App" image="/openChat.png" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
