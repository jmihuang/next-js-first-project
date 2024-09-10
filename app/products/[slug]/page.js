import React from "react";

function product({ params }) {
  return (
    <div>
      product
      <p>{params.slug}</p>
    </div>
  );
}

export default product;
