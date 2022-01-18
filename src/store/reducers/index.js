import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

import theme from "./theme";
import modal from "./modal";
import users from "./users";
import questions from "./questions";
import authedUser from "./authedUser";

export default combineReducers({
  theme,
  modal,
  users,
  questions,
  authedUser,
  loadingBar: loadingBarReducer,
});
