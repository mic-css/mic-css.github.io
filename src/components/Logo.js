/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logo from "../assets/micmoji.png";

const wrapper = css`
  width: 4rem;
  height: 4rem;
  background-color: papayawhip;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const image = css`
  width: 110%;
`;

export default function Logo() {
  return (
    <div css={wrapper}>
      <img src={logo} css={image} />
    </div>
  );
}
