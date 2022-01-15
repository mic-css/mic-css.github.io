/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import laptop from "../assets/laptop.jpg"

const container = css`
  width: 100%;
  height: 30rem;
  background: url(${laptop}) no-repeat center center;
  background-size: cover;
  background-blend-mode: darken;
  background-color: #0007;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 420px) {
    height: 60rem;
  }
`

const text = css`
  color: white;
  font-size: 1.8em;
  font-weight: bold;
  width: 80%;

  @media (min-width: 420px) {
    font-size: 4.25em;
    width: 60%;
  }
`

export default function Quote() {
  return (
    <div css={container}>
      <p css={text}>
        A program is a building of thought. It is costless to build, it is
        weightless, and it grows easily under our typing hands.
      </p>
    </div>
  )
}
