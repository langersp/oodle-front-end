import React from "react";
import { Helmet } from "react-helmet";
import ProductDetail from "../../components/ProductDetail";
import Header from "../../components/Header";
import PunkFooter from "../../components/PunkFooter";
import { useGlobalContext } from "../../context/StateProvider";

import "./styles.scss";

const BeerPage = () => {
  const [{ beerSelected }] = useGlobalContext();

  return (
    <>
      <Helmet>
        <title>Punk Beers - {beerSelected.name}</title>
      </Helmet>
      <main>
        <Header />
        <ProductDetail beerSelected={beerSelected} />
        <PunkFooter />
      </main>
    </>
  );
};

export default BeerPage;
