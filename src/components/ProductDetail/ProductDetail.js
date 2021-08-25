import React from "react";

import "./ProductDetail.scss";

const ProductDetail = ({ beerSelected }) => {
  const { id, abv, name, image, description, pairing } = beerSelected;

  return (
    <section className="product-detail" id={id}>
      <div className="product-details" data-product-id={id}>
        <div className="product-details__image">
          <img src={image} alt={name} />
        </div>
        <div className="product-details__info">
          <div className="product-details__abv">
            <strong>ABV:</strong> {abv}
          </div>
          <div className="product-details__name">{name}</div>
          <div className="product-details__tagline">{description}</div>
          <div className="product-details__pairing">
            <strong>Why not try with:</strong>
            <ul>
              {pairing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
