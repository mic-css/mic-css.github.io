/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Logo from "./Logo"

const container = css`
  padding: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin: 2rem auto;
    padding: 0;
    max-width: 58rem;
  }
`

const navLink = css`
  color: black;
  font-weight: 500;
  margin-left: 1rem;
  display: inline-block;
  transition: transform 0.1s ease-in-out;
  a {
    color: black;
  }
  :hover,
  :focus {
    transform: translateY(-2px);
    transition: transform 0.1s ease-in-out;
    a {
      color: dodgerblue;
    }
  }
  @media (min-width: 768px) {
    margin-left: 2rem;
  }
`

export default function Header() {
  return (
    <header css={container}>
      <Logo />

      <nav>
        <div css={navLink}>
          <a href="https://github.com/mic-css" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <div css={navLink}>
          <a
            href="https://www.linkedin.com/in/mic-cassano"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div css={navLink}>
          <a
            href="https://twitter.com/mic_css"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
      </nav>
    </header>
  )
}
