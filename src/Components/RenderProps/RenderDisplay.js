import React from "react";

function RenderDisplay(props) {
  const productList = props.products.map(shoe => {
    return (
      <div key={shoe.name}>
        <img src={shoe.image} alt="shoe" />
      </div>
    );
  });
  return <div>{productList}</div>;
}

export default RenderDisplay;
