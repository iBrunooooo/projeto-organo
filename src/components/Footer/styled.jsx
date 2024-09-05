import styled from "styled-components";
import fundo from "/img/fundo.png";

const FooterStyles = styled.footer`

  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 213px;
  background-color: #6278f7;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ul {
    display: flex;
    gap: 2rem;
  }

  li a img {
    width: 50px;
    height: 50px;
  }

  img {
    width: 166px;
    height: 63px;
  }

  h3 {
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: 600;
  }

`

export default FooterStyles;
