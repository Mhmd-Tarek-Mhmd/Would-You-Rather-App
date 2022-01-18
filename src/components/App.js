import React from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

import { handleGetData } from "../store/actions";

import Nav from "./Nav";
import Main from "./Main";

function App({ authedUser, loadingBar, handleGetData }) {
  React.useEffect(handleGetData, [handleGetData]);

  return loadingBar.default === 1 ? (
    <LoadingBar />
  ) : (
    <>
      {authedUser !== null && <Nav />}
      <Main />
    </>
  );
}

export default connect(
  (state) => ({
    loadingBar: state.loadingBar,
    authedUser: state.authedUser,
  }),
  { handleGetData }
)(App);
