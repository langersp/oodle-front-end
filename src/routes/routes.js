import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Spinner from "../components/spinner";

import { BEER_PATH } from "./paths";

const HomePage = lazy(() => import("../pages/HomePage"));
const BeerPage = lazy(() => import("../pages/BeerPage"));

const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path={BEER_PATH}>
          <BeerPage />
        </Route>

        {/* <Route path={ERROR_PAGE_PATH[404]}>
          <ErrorPage404 />
        </Route> */}
      </Switch>
    </Suspense>
  );
};

export default Routes;
