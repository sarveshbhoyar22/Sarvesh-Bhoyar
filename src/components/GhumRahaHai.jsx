import React from "react";
import styled from "styled-components";

const Card = () => {
  const colors = [
    "142, 249, 252",
    "142, 252, 204",
    "142, 252, 157",
    "215, 252, 142",
    "252, 252, 142",
    "252, 208, 142",
    "252, 142, 142",
    "252, 142, 239",
    "204, 142, 252",
    "142, 202, 252",
  ];

  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="inner" style={{ "--quantity": colors.length }}>
          {colors.map((color, index) => (
            <div
              key={index}
              className="card"
              style={{ "--index": index, "--color-card": color }}
            >
              <div className="img" />
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  }

  .inner {
    --w: 120px;
    --h: 180px;
    --translateZ: calc((var(--w) + var(--h)) * 0.7);
    --rotateX: -15deg;
    --perspective: 1200px;
    position: relative;
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 15s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 3px solid rgba(var(--color-card), 0.8);
    border-radius: 15px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
    transition: transform 0.3s ease-in-out;
  }

  .card:hover {
    transform: scale(1.05)
      rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
  }

  .img {
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(var(--color-card), 0.3) 0%,
      rgba(var(--color-card), 0.7) 80%,
      rgba(var(--color-card), 1) 100%
    );
  }
`;

export default Card;
