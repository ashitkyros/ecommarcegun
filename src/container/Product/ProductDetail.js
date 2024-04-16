import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const product = useSelector(state =>
    state.user.find(product => product.id === parseInt(id))
  );
  console.log(product);
  return (
    <>
      <h1>Product Detail</h1>
      {product.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h1>{item.price}</h1>
            <h1>{item.description}</h1>
          </div>
        );
      })}
    </>
  );
}

export default ProductDetail;   
