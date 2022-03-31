import { connect } from "react-redux";

import { handleSetTheme } from "../../store/actions";

function ThemeToggler({ theme, handleSetTheme }) {
  const handleToggle = () => {
    theme === "light" && handleSetTheme("dark");
    theme === "dark" && handleSetTheme("light");
  };

  return (
    <button
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="center-flex"
      onClick={handleToggle}
    >
      {theme === "light" ? (
        <svg
          aria-hidden='true'
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="26"
          height="26"
        >
          <path
            fill="#FEFCD7"
            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
          />
        </svg>
      ) : (
        <svg
          aria-hidden='true'
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
        >
          <path
            fill="#FDB813"
            fillRule="evenodd"
            d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
          />
        </svg>
      )}
    </button>
  );
}

export default connect((state) => ({ theme: state.theme }), { handleSetTheme })(
  ThemeToggler
);
