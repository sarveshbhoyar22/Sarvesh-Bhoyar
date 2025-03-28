import { useEffect, useState } from "react";
import Card from "../components/Card";
import Asthetic from "../components/Asthetic";
const FirstPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for smoother effect
  }, []);

  return (
    <div
      id="firstPage"
      className={`mt-15 border-2 border-gray-700 p-10 sm:w-[70%] w-[95%] rounded-3xl m-auto 
      transform transition-all duration-1000 ease-out 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <div className="flex sm:flex-row flex-col sm:justify-center items-center gap-12">
        
        <Card />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-center text-gray-300 sm:text-3xl text-xl mt-4 font-bold">
          FULL STACK WEB DEVELOPER
        </h2>
        <h3 className="text-center text-gray-200 font-semibold p-1 sm:text-2xl text-xl mt-1 sm:w-[700px] w-auto m-auto">
          IIT (ISM) Dhanbad
        </h3>
        <Asthetic />
      </div>

      <div className="flex justify-center items-center mt-5">
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;1+Year&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;1+Year&nbsp;
          </span>
        </button>
      </div>

      <div className="text-center border-2 border-gray-500 p-3 sm:w-[200px] w-[150px] rounded-full m-auto justify-center items-center text-gray-200 sm:text-2xl mt-4 font-bold">
        Experience
      </div>
    </div>
  );
};

export default FirstPage;
