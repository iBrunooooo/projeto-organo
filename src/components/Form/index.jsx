import Title from "../Title";
import Button from "./Button";
import CampoTexto from "./CampoTexto";
import ListaSuspensa from "./ListaSuspensa";
import itens from "./itensListaSuspensa.json";
import FormStyles from "./styled";

const Form = () => {

  const aoSalvar = (event) => {
    event.preventDefault (); 
    console.log ("Form submetido");
  }

  return (
    <FormStyles onSubmit={aoSalvar}>
      <Title text="Preencha os dados para criar o card." />
      <CampoTexto obrigatorio={true} label="Nome:" placeholder={`Digite o vosso nome...`} />
      <CampoTexto obrigatorio={true} label="Cargo:" placeholder={`Digite o vosso cargo...`} />
      <CampoTexto  label="Imagem:" placeholder={`Digite o endereço da vossa imagem...`} />
      <ListaSuspensa label="Time:" itens={itens} />
      <Button text="Criar card" />
    </FormStyles>
  );
};

export default Form;
