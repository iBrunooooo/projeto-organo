import FooterStyles from "./styled";
import RedeSocial from "./RedeSocial.json";
import Logo from "/img/logo.png"; 

const Footer = () => {
  return (
    <FooterStyles>
      <ul>
        {RedeSocial.map((item) => (
          <li key={item.id}>
            <a href={item.link} target="_blank">
              <img src={item.img} alt={`Imagem da rede social ${item.redeSocial}`} />
            </a>
          </li>
        ))}
      </ul>
      <img src={Logo} alt="Logo da projeto Organo." />
      <h3>Desenv. por Bruno Alves.</h3>
    </FooterStyles>
  );
};

export default Footer;
