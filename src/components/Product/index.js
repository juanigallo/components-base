import React from "react";

function Product(props) {
  // props.name = "Juani"; // <- No lo queremos hacer bajo ningun punto de vista
  return <div>{props.name}</div>;
}

export default Product;
