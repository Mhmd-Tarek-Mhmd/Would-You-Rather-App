export const SET_THEME = "SET_THEME";

const key = "wouldYouRatherAppTheme";

function setTheme(theme) {
  return {
    type: SET_THEME,
    theme,
  };
}

export function handleSetTheme(theme) {
  const page = document.querySelector("html");
  theme === "light"
    ? page.classList.remove("dark")
    : page.classList.add("dark");

  return (dispatch) => {
    dispatch(setTheme(theme));
    localStorage.setItem(key, theme);
  };
}

export function handleGetTheme() {
  return (dispatch) => {
    localStorage[key] && dispatch(handleSetTheme(localStorage[key]));
  };
}
