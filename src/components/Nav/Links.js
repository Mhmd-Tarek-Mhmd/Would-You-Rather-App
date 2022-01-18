import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./nav.module.css";

function Links() {
  const list = React.useRef();
  const [isHide, setIsHide] = React.useState(true);

  React.useEffect(() => {
    !isHide && list.current.firstElementChild.firstElementChild.focus();
  }, [isHide]);

  const handleToggle = (e) => {
    setIsHide(!isHide);
    e.target.ariaLabel = isHide ? "Show nav links" : "Hide nav links";
  };

  const linksText = ["Home", "New Question", "Leader Board"];
  const linksHref = ["", "new", "leader-board"];

  return (
    <>
      <button
        className={styles.btn}
        aria-label="Show nav links"
        onClick={(e) => handleToggle(e)}
      >
        ≡
      </button>

      <ul
        ref={list}
        onKeyDown={(e) => e.key === "Escape" && setIsHide(true)}
        className={`center-flex ${styles.Links} ${isHide ? styles.hide : ""}`}
      >
        {linksText.map((link, i) => (
          <li>
            <NavLink
              tabIndex="0"
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={linksHref[i]}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Links;
