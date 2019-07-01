import React from "react";
import { Switch, Route } from "react-router-dom";
import HOCDisplay from "./Components/HOC/HOCDisplay";
import RenderDisplay from "./Components/RenderProps/RenderDisplay";
import DataFetcher from "./Components/RenderProps/DataFetcher";

export default (
  <Switch>
    <Route exact path="/" />
    <Route path="/hoc" component={HOCDisplay} />
    <Route
      path="/render-props"
      render={() => {
        return (
          <DataFetcher
            url="/api/products"
            renderDisplay={data => {
              return <RenderDisplay products={data} />;
            }}
          />
        );
      }}
    />
  </Switch>
);
