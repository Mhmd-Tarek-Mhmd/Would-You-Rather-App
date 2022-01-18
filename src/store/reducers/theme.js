import { SET_THEME } from "../actions/theme";

export default function theme(state = "light", action) {
  if (action.type === SET_THEME) {
    return action.theme;
  } else {
    return state;
  }
}
