const ListaSuspensa = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => (
          <option key={item.id}>{item.area}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
