import styled from "styled-components";

const FormStyles = styled.form`

  max-width: 80%;
  background-color: #f6f6f6;
  text-align: left;
  margin: 4rem auto;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 2.5rem 5rem;

  h2 {
    font-size: 40px;
    margin-bottom: 3rem;
  }

  label {
    display: block;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 600;
  }

  select, option, input {
    background-color: #ffffff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;

    ::placeholder {
      color: #afafaf;
    }

  }

  button {
    width: 167px;
    height: 80px;
    border: none;
    border-radius: 10px;
    background-color: #6278f7;
    color: #ffffff;
    margin-top: 2.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    transition: .2s;
    cursor: pointer;

    &:hover {
      color: #95ffd4;
      box-shadow: 5px 5px 0 rgba(0, 0, 0, .5);
      transition: .2s;
  }

  }
`

export default FormStyles;
