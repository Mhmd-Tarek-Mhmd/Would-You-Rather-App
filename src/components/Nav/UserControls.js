import { connect } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./nav.module.css";
import ThemeToggler from "./ThemeToggler";

function UserControls({ user }) {
  return (
    <div className={`center-flex ${styles.UserControls}`}>
      <p>Hello, {user.name}</p>
      <img src={user.avatarURL} alt={`Avatar of ${user.name}`} />

      <ThemeToggler />
      <Link to="sign-in">Logout</Link>
    </div>
  );
}

export default connect((state) => ({
  user: state.users[state.authedUser],
}))(UserControls);
