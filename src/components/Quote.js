/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import laptop from "../assets/laptop.jpg"

const container = css`
  width: 100%;
  height: 35rem;
  position: relative;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 60rem;
  }

  :before {
    content: "";
    position: absolute;
    top: -50px;
    background: url(${laptop}) no-repeat center center;
    background-size: cover;
    background-blend-mode: darken;
    background-color: #0007;
    width: 100%;
    height: calc(100% + 50px);
    z-index: -1;
    clip-path: polygon(0% 50px, 100% 0%, 100% 100%, 0% 100%);
  }
`

const textContainer = css`
  width: 80%;

  @media (min-width: 768px) {
    width: 60%;
  }
`

const text = css`
  color: white;
  font-size: 1.8em;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 4.25em;
  }
`

const quoteAttribution = css`
  color: gainsboro;
  font-size: 0.9em;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`

const imageAttribution = css`
  font-size: 0.1em;
  color: gainsboro;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 1em 2em;

  a {
    color: gainsboro;
  }

  @media (min-width: 768px) {
    font-size: 0.5em;
  }
`

export default function Quote() {
  return (
    <div css={container}>
      <div css={textContainer}>
        <p css={text}>
          A program is a building of thought. It is costless to build, it is
          weightless, and it grows easily under our typing hands.
        </p>

        <p css={quoteAttribution}>
          &#8211; Marijn Haverbeke, <em>Eloquent JavaScript</em>
        </p>
      </div>

      <p css={imageAttribution}>
        Photo by{" "}
        <a href="https://unsplash.com/@joshuaryanphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Joshua Reddekopp
        </a>
      </p>
    </div>
  )
}
