import React from "react";
import hoc from "./hoc";

function HOCDisplay(props) {
  const shoeList = props.data.map(shoe => {
    return (
      <div key={shoe.name}>
        <img src={shoe.image} />
      </div>
    );
  });
  return <div>{shoeList}</div>;
}

export default hoc(HOCDisplay, "/api/products");
