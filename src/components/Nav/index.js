import styles from "./nav.module.css";
import Links from "./Links";
import UserControls from "./UserControls";

function Nav() {
  return (
    <nav className={`${styles.Nav} space-between-flex`}>
      <Links />
      <UserControls />
    </nav>
  );
}

export default Nav;
