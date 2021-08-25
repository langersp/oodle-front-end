import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import Spinner from "../../components/spinner";
import Header from "../../components/Header";
import PunkFooter from "../../components/PunkFooter";
import Product from "../../components/Product";
import useBeersService from "../../services/Beers";
import { Redirect } from "react-router-dom";
import { useGlobalContext } from "../../context/StateProvider";
import { BEER_SELECTED_ACTION_ADD } from "../../context/actions";

import "./styles.scss";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [redirectTo, setRedirectTo] = useState("");
  const [beers, setBeers] = useState({ items: [], hasMore: false });
  const beersService = useBeersService();
  const [, dispatch] = useGlobalContext();

  const fetchBeers = useCallback(async () => {
    let beersData;
    setIsLoading(true);
    try {
      beersData = await beersService.get();
      setBeers(beersData);
    } catch (err) {
      console.log(err, "error requesting beer data");
      setIsLoading(false);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBeers();
  }, [fetchBeers]);

  const handleBeerClick = (beer) => {
    dispatch({
      type: BEER_SELECTED_ACTION_ADD,
      beerSelected: beer,
    });
    setRedirectTo(`/beer/${beer.id}`);
  };

  return (
    <>
      <Helmet>
        <title>Punk Beers</title>
      </Helmet>
      {redirectTo !== "" && <Redirect to={redirectTo} push />}

      <main>
        <Header />
        <div className="products">
          {isLoading && <Spinner />}
          {beers.items.map((beer) => (
            <Product
              beer={beer}
              handleBeerClick={handleBeerClick}
              key={beer.id}
            />
          ))}
        </div>
        <PunkFooter />
      </main>
    </>
  );
};

export default HomePage;
