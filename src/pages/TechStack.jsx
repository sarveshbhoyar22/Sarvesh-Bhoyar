import React, { useEffect, useState, useRef } from "react";
import { FaReact, FaNode, FaGit } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";
import { SiTailwindcss, SiMongodb, SiCplusplus } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import styled from "styled-components";

const icons = [
  { component: <FaReact className="text-blue-400" />, color: "142, 249, 252" },
  { component: <FaNode className="text-green-400" />, color: "142, 252, 204" },
  {
    component: <RiJavascriptFill className="text-yellow-400" />,
    color: "252, 208, 142",
  },
  {
    component: <IoLogoHtml5 className="text-orange-400" />,
    color: "252, 142, 142",
  },
  {
    component: <SiTailwindcss className="text-blue-400" />,
    color: "204, 142, 252",
  },
  {
    component: <SiMongodb className="text-green-400" />,
    color: "142, 202, 252",
  },
  {
    component: <SiCplusplus className="text-blue-400" />,
    color: "252, 142, 239",
  },
  { component: <FaGit className="text-red-400" />, color: "252, 252, 142" },
  {
    component: <TbBrandThreejs className="text-blue-400" />,
    color: "142, 252, 157",
  },
];

const TechStack = () => {
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
      id="techStack"
      className={`flex flex-col items-center border-2 border-gray-700 p-10 sm:w-[70%] w-[95%] rounded-3xl m-auto mt-10 mb-10 
      transform transition-all duration-1000 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <StyledWrapper>
        <h1 className="font-bold text-2xl mb-20">Tech Stack</h1>

        <div className="wrapper">
          <div className="inner">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="card"
                style={{ "--index": index, "--color-card": icon.color }}
              >
                <div className="img">{icon.component}</div>
              </div>
            ))}
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    background: linear-gradient(to right, #444, #222);
    padding: 10px 30px;
    border-radius: 50px;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
  }

  .wrapper {
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
  }

  .inner {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%) perspective(1000px);
    animation: rotating 15s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: translate(-50%, -50%) perspective(1000px) rotateY(0deg);
    }
    to {
      transform: translate(-50%, -50%) perspective(1000px) rotateY(360deg);
    }
  }

  .card {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(var(--color-card), 0.2);
    border: 2px solid rgba(var(--color-card), 0.4);
    transform: rotateY(calc(40deg * var(--index))) translateZ(150px);

    @media (min-width: 1024px) {
      transform: rotateY(calc(40deg * var(--index))) translateZ(250px);
    }

    @media (min-width: 1440px) {
      transform: rotateY(calc(40deg * var(--index))) translateZ(250px);
    }
  }

  .img {
    font-size: 3rem;
    transition: transform 0.3s ease;
  }

  .card:hover .img {
    transform: scale(1.2);
  }
`;

export default TechStack;
