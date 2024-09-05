import CampoTextoStyles from "./styled";

const CampoTexto = (props) => {

  let value = 'Bruno';

  const aoDigitado = (event) => {
    value = event.target.value; 
    console.log (value);
  }

  return (
    <CampoTextoStyles>
      <label>
        {props.label}
      </label>
      <input 
        value={value}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder} 
      />
    </CampoTextoStyles>
  );
};

export default CampoTexto;
