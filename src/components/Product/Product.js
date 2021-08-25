import React from "react";

import "./Product.scss";

const Product = ({ beer, handleBeerClick }) => {
  const { id, name, image, tagline } = beer;

  return (
    <section className="product" id={id} onClick={() => handleBeerClick(beer)}>
      <div className="product__details" data-product-id={id}>
        <div className="product__image">
          <img src={image} alt={name} />
        </div>
        <div className="product__info">
          <div className="product__name">{name}</div>
          <div className="product__tagline">{tagline}</div>
        </div>
      </div>
    </section>
  );
};

export default Product;
