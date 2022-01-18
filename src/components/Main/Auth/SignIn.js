import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { setAuthedUser, openModal } from "../../../store/actions";

import styles from "./auth.module.css";
import ComboBox, { Option } from "./ComboBox";

function SignIn({ users, setAuthedUser, openModal }) {
  const [id, setID] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(
    () => (document.title = "Sign in - Would You Rather App"),
    []
  );

  const handleLogin = () => {
    if (id.length) {
      const pathname = window.location.pathname;

      setAuthedUser(id);
      if (pathname === "/sign-in") {
        navigate("/");
        openModal(<Title style={{ lineHeight: "1.5" }} />, <Content />);
      } else {
        navigate(pathname);
      }
    } else {
      const ErrorMsg = () => (
        <p style={{ fontSize: ".9em" }}>Please select a user to sign in</p>
      );
      openModal(<ErrorMsg />);
    }
  };

  return (
    <>
      <h2>Sign in</h2>

      <ComboBox
        setVal={setID}
        placeHolder="Select user..."
        style={{ marginBottom: "15px" }}
      >
        {users.map((user) => (
          <Option key={user.id} dataVal={user.id}>
            <img
              src={user.avatarURL}
              alt={`Avatar of ${user.name}`}
              style={{ width: "30px" }}
            />
            <span>{user.name}</span>
          </Option>
        ))}
      </ComboBox>

      <button className="btn" onClick={handleLogin}>
        Sign in
      </button>
      <div className={styles.OR}>OR</div>
      <Link to="/sign-up" className="btn" style={{ display: "block" }}>
        Sign Up
      </Link>
    </>
  );
}

export default connect(
  (state) => ({
    users: Object.values(state.users).sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  }),
  {
    setAuthedUser,
    openModal,
  }
)(SignIn);

/**
 * Modal args
 */

const Title = () => (
  <>
    Welcome in <br /> Would You Rather App
  </>
);
const Content = () => (
  <>
    <em style={{ margin: "30px 0", fontWeight: "300" }}>
      A competitive game made by react & redux
    </em>

    <div style={{ textAlign: "left" }}>
      <h5
        style={{
          marginBottom: "15px",
          display: "inline-block",
          borderBottom: "1px solid",
        }}
      >
        Notes:
      </h5>

      <ul
        style={{
          fontSize: "14px",
          listStyleType: "disc",
          paddingInlineStart: "30px",
        }}
      >
        <li>Use the nav bar to navigate between pages of the site.</li>
        <li>Do not refresh the page or use the address bar of the browser.</li>
        <li>
          If you try doing any of the above note, you will be asked to re-login.
        </li>
      </ul>
    </div>
  </>
);
