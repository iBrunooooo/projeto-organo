import TitleStyles from "./styled"

const Title = (props) => {
  return (
    <TitleStyles>
      {props.text}
    </TitleStyles>
  )
}

export default Title; 
