import * as React from "react";
import withRoot from "../withRoot";
import Home from "./Home";

function Index() {
  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}
export default withRoot(Index);
