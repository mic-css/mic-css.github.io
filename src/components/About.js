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

const about = css`
  opacity: 0;
  animation: ${fadeUp} 0.5s ease-out 1s forwards;
  font-size: 1.25rem;
  line-height: 2rem;
  @media (min-width: 420px) {
    font-size: 1.5rem;
  }
`;

const details = css`
  font-size: 0.8em;
  background-color: aliceblue;
  border-radius: 0.5rem;
  & p {
    padding: 0.4rem 0.8rem;
  }
`;

const summary = css`
  cursor: pointer;
  padding: 0.4rem 0.8rem;
`;

const detailsContent = css`
  padding: 0.4rem 0.8rem;
  margin: 0;
`;

export default function About() {
  return (
    <div css={container}>
      <h1 css={heading}>Product. Engineer.</h1>
      <div css={divider} />
      <div css={about}>
        <p>
          Hi, I’m Mic! I’m a software engineer with a background in business
          management and computer science and over five years of experience
          developing digital products.
        </p>

        <details css={details}>
          <summary css={summary}>What's a product engineer?</summary>
          <p css={detailsContent}>
            A product engineer is a software engineer with a strong interest and
            understanding in product development. They marry full-stack
            technical skills with product management, strategy and design.
            <br /> This excellent{" "}
            <a
              href="https://blog.pragmaticengineer.com/the-product-minded-engineer/"
              target="_blank"
              rel="noreferrer"
            >
              blog post
            </a>{" "}
            explains it in detail.
          </p>
        </details>

        <p>More about my work coming soon!</p>
      </div>
    </div>
  );
}
