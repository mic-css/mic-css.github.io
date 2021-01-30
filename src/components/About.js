/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

const container = css`
  padding: 1.2rem;
  margin: 3rem 0;
  @media (min-width: 420px) {
    width: 58rem;
    margin: 6rem auto;
    padding: 0;
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%);
  } to {
    opacity: 1;
    transform: translateY(0);
  }`;

const heading = css`
  opacity: 0;
  font-size: 2.6rem;
  animation: ${fadeUp} 0.5s ease-in 0s forwards;
  @media (min-width: 420px) {
    font-size: 4.2rem;
  }
`;

const animateWidth = keyframes`
  from {
    width: 0px;
  } to {
    width: 4rem;
  }
`;

const divider = css`
  height: 3px;
  width: 0px;
  background-color: gainsboro;
  border-radius: 1.5px;
  animation: ${animateWidth} 0.5s ease-in-out 0.5s forwards;
`;

const subheading = css`
  opacity: 0;
  font-size: 1.25rem;
  line-height: 2rem;
  animation: ${fadeUp} 0.5s ease-out 1s forwards;
  @media (min-width: 420px) {
    font-size: 1.5rem;
  }
`;

export default function About() {
  return (
    <div css={container}>
      <h1 css={heading}>Web developer & product engineer.</h1>
      <div css={divider} />
      <p css={subheading}>
        Hi, I’m Mic! I’m a product engineer with over five years of experience
        in web development and product design. Keep scrolling to find out more
        about my work!
      </p>
    </div>
  );
}
