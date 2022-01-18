import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import { unSetAuthedUser, openModal } from "../../../store/actions";

import styles from "./auth.module.css";
import Card, { CardHead, CardBody } from "../../Card";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth({ authedUser, unSetAuthedUser }) {
  const [word, setWord] = useState();
  const location = useLocation();

  useEffect(
    () => authedUser !== null && unSetAuthedUser(),
    [authedUser, unSetAuthedUser]
  );

  useEffect(() => {
    let handleWord;
    handleWord = location.pathname !== "/sign-up" ? "in" : "up";
    setWord(handleWord);
  }, [location]);

  return (
    <Card className={`${styles.Auth} text-center`}>
      <CardHead>
        <h1>Welcome to the Would You Rather App!</h1>
        <p>Please sign {word} to continue</p>
      </CardHead>

      <CardBody>
        <img
          src="/img/login.png"
          alt="Would you Rather App logo"
          className={styles.logo}
        />

        <Routes>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </CardBody>
    </Card>
  );
}

export default connect((state) => ({ authedUser: state.authedUser }), {
  unSetAuthedUser,
  openModal,
})(Auth);
