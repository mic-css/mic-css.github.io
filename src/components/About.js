/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"

const container = css`
  padding: 1.2rem;
  margin: 4rem 0 6rem;
  @media (min-width: 420px) {
    width: 58rem;
    margin: 12rem auto 14rem;
    padding: 0;
  }
`

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%);
  } to {
    opacity: 1;
    transform: translateY(0);
  }`

const heading = css`
  opacity: 0;
  font-size: 2.6rem;
  @media (min-width: 420px) {
    font-size: 4.2rem;
  }
  :first-of-type {
    animation: ${fadeUp} 0.5s ease-in 0s forwards;
  }
  :nth-of-type(2) {
    animation: ${fadeUp} 0.5s ease-in 0.5s forwards;
  }
`

const headingContainer = css`
  display: flex;
`

const animateWidth = keyframes`
  from {
    width: 0px;
  } to {
    width: 4rem;
  }
`

const divider = css`
  height: 3px;
  width: 0px;
  background-color: gainsboro;
  border-radius: 1.5px;
  animation: ${animateWidth} 0.5s ease-in-out 1s forwards;
`

const about = css`
  opacity: 0;
  animation: ${fadeUp} 0.5s ease-out 1.5s forwards;
  font-size: 1.25rem;
  line-height: 2rem;
  @media (min-width: 420px) {
    font-size: 1.5rem;
  }
`

export default function About() {
  return (
    <div css={container}>
      <div css={headingContainer}>
        <h1 css={heading}>Product&nbsp;</h1>
        <h1 css={heading}>Engineer</h1>
      </div>
      <div css={divider} />
      <div css={about}>
        <p>
          Hi, I&#x2019;m Mic! I&#x2019;m a product-focused software engineer
          with over five years of experience developing digital products. I
          currently work at Shopify to make commerce better for everyone.
        </p>

        <p>More details about my work coming soon.</p>
      </div>
    </div>
  )
}
