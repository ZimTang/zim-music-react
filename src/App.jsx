import React, { memo } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "./router";

import ZimAppHeader from "./components/app-header";
import ZimAppFooter from "./components/app-footer";

const App = memo(({ route }) => {
  return (
    <HashRouter>
      <ZimAppHeader />
      {renderRoutes(routes)}
      <ZimAppFooter />
    </HashRouter>
  );
});

export default App;
