import styled from "styled-components";

const CardStyles = styled.div`
  
  width: 262px;
  height: 272px;

  display: grid;
  grid-template-rows: 3fr 3fr 3fr;
  grid-template-areas: 
    "img1"
    "img2"
    "img3"
    ;

  img {
    width: 10rem;
    border-radius: 50%;
    grid-area: img1;
  }

`

export default CardStyles; 
