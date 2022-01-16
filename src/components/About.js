/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import { useEffect } from "react"
import { ReactComponent as ExternalLinkIcon } from "../assets/external-link.svg"

const container = css`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
`

const content = css`
  padding: 4rem 1.2rem 6rem;
  @media (min-width: 420px) {
    width: 58rem;
    padding: 8rem 0 14rem;
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

const shopifyLink = css`
  color: #008060;
`

const externalLinkIcon = css`
  height: 0.8em;
  color: darkgrey;
  stroke-width: 2;
`

const code = css`
  display: none;
  @media (min-width: 420px) {
    display: block;
    position: absolute;
    right: -15%;
    top: 0;
    filter: blur(1.5px);
    font-size: 1.2em;
    color: #0002;
  }
`

export default function About() {
  useEffect(() => {
    function scrollListener() {
      document.querySelector("pre").style.transform = `translateY(${
        window.scrollY * 0.3
      }px)`
    }

    window.addEventListener("scroll", scrollListener)

    return () => window.removeEventListener("scroll", scrollListener)
  })

  return (
    <div css={container}>
      <pre css={code}>{codeMarkup}</pre>

      <div css={content}>
        <div css={headingContainer}>
          <h1 css={heading}>Product&nbsp;</h1>
          <h1 css={heading}>Engineer</h1>
        </div>
        <div css={divider} />
        <div css={about}>
          <p>
            Hi, I&#x2019;m Mic! I&#x2019;m a product-focused software engineer
            with over five years of experience developing digital products. I
            work at{" "}
            <a css={shopifyLink} href="https://shopify.com" target="blank">
              Shopify
              <ExternalLinkIcon css={externalLinkIcon} />
            </a>{" "}
            making commerce better for everyone.
          </p>

          <p>More details about my work coming soon.</p>
        </div>
      </div>
    </div>
  )
}

const codeMarkup = `
const container = css\`
  padding: 1.2rem;
  margin: 4rem 0 6rem;
  @media (min-width: 420px) {
    width: 58rem;
    margin: 12rem auto 14rem;
    padding: 0;
  }
\`

const fadeUp = keyframes\`
  from {
    opacity: 0;
    transform: translateY(10%);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
\`

const heading = css\`
  opacity: 0;
  font-size: 2.6rem;
  animation: \${fadeUp} 0.5s ease-in 0s forwards;
  @media (min-width: 420px) {
    font-size: 4.2rem;
  }
\`

const animateWidth = keyframes\`
  from {
    width: 0px;
  } to {
    width: 4rem;
  }
\`

const divider = css\`
  height: 3px;
  width: 0px;
  background-color: gainsboro;
  border-radius: 1.5px;
  animation: \${animateWidth} 0.5s ease-in-out 0.5s forwards;
\`

const about = css\`
  opacity: 0;
  animation: \${fadeUp} 0.5s ease-out 1s forwards;
  font-size: 1.25rem;
  line-height: 2rem;
  @media (min-width: 420px) {
    font-size: 1.5rem;
  }
\`
`
