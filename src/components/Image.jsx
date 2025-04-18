import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="center">
        <div className="design">
          <div className="circle-1 center color-border">
            <div className="circle-2 center color-border">
              <div className="circle-3 center color-border">
                <div className="circle-4 center color-border">
                  <div className="circle-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="mountain-1 shape shadow" />
          <div className="mountain-2 shape" />
          <div className="mountain-3 shape shadow" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .design {
    height: 200px;
    width: 200px;
    border-radius: 40px;
    background: rgb(255, 11, 0);
    background: linear-gradient(
      180deg,
      rgba(255, 11, 0, 1) 13%,
      rgba(255, 158, 0, 1) 100%
    );
    position: relative;
    overflow: hidden;
  }

  .color-border {
    border-radius: 50%;
    background-color: #ffffff20;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  }
  .circle-1 {
    height: 220px;
    width: 220px;
    position: absolute;
    right: -50px;
    top: -50px;
  }
  .circle-2 {
    height: 180px;
    width: 180px;
  }
  .circle-3 {
    height: 140px;
    width: 140px;
  }
  .circle-4 {
    height: 105px;
    width: 105px;
  }
  .circle-5 {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: #ffffff;
  }

  .shape {
    height: 200px;
    width: 200px;
    background-color: #484848;
    transform: rotate(45deg);
    position: absolute;
  }
  .shadow {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  }
  .mountain-1 {
    z-index: 1;
    bottom: -100px;
    left: -100px;
  }
  .mountain-2 {
    bottom: -110px;
    left: -30px;
  }
  .mountain-3 {
    z-index: 2;
    bottom: -150px;
    left: 90px;
  }
`;

export default Card;
