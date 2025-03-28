import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader ">
        <span className="hour" />
        <span className="min" />
        <span className="circel" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    width: 65px;
    height: 65px;
    border: 8px solid #212121;
    border-radius: 50px;
    position: relative;
  }

  .loader span {
    display: block;
    background: #ee9b00;
  }

  .loader .hour,
  .loader .min {
    width: 6px;
    height: 22px;
    border-radius: 50px;
    position: absolute;
    top: 24.5px;
    left: 21px;
    animation: load9243 1.2s linear infinite;
    transform-origin: top center;
  }

  .loader .min {
    height: 17px;
    animation: load9243 4s linear infinite;
  }

  .loader .circel {
    width: 10px;
    height: 10px;
    border-radius: 50px;
    position: absolute;
    top: 19px;
    left: 19px;
  }

  @keyframes load9243 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
