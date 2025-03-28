import React from "react";
import styled from "styled-components";

const cardData = [
  { text1: "You can connect with me", text2: "Anytime" },
  { text1: "Open for work", text2: "Let's collaborate!" },
  { text1: "Passionate about my work", text2: "Best is yet to come" },
  { text1: "Want to Build StartUp", text2: "Connect with me" },
  { text1: "Let's build together", text2: "Innovate & grow" },
];

// Duplicating items for an infinite loop effect
const loopData = [...cardData, ...cardData];

const CircularCardSlider = () => {
  return (
    <div className="border-2 p-2 rounded-3xl sm:w-full w-80 border-gray-600">

    <SliderWrapper>
      <SliderTrack>
        {loopData.map((card, index) => (
            <SliderItem key={index}>
            <Card>
              <p className="text-lg font-semibold">{card.text1}</p>
              <p className="text-sm">{card.text2}</p>
            </Card>
          </SliderItem>
        ))}
      </SliderTrack>
    </SliderWrapper>
        </div>
  );
};

export default CircularCardSlider;

// Styled Components
const SliderWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  position: relative;
  margin: auto;
`;

const SliderTrack = styled.div`
  display: flex;
  gap: 20px;
  animation: scroll 20s linear infinite;
  width: max-content;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-220px * ${cardData.length}));
    }
  }
`;

const SliderItem = styled.div`
  width: 200px;
  flex-shrink: 0;
  text-align: center;
`;

const Card = styled.div`
  width: 200px;
  height: 120px;
  padding: 15px;
  border-radius: 10px;

  // background: linear-gradient(135deg, #855, #143);
  background: linear-gradient(135deg, #000000, #00aaff);

  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.5s ease;
    cursor: pointer;
    background: linear-gradient(100deg, #00aaff, #910eeb);
    box-shadow: 0px 8px 20px rgba(100, 100, 100, 3);
  }
`;
