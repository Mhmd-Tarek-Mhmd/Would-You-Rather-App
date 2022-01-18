import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handleAnswer } from "../../../store/actions";

import styles from "./question.module.css";
import NotFound from "../NotFound";
import Card, { CardHead, CardBody, CardImage } from "../../Card";

function Question({ users, questions, handleAnswer }) {
  const navigate = useNavigate();
  const qid = window.location.pathname.substr(10);
  if (!Object.keys(questions).includes(qid)) {
    return <NotFound msg="This Question doesn't exist." />;
  }

  document.title = "Question - Would You Rather App";
  const question = questions[qid];
  const user = users[question.author];

  const handleSubmit = (e) => {
    e.preventDefault();

    const answer = e.target.option.value;
    handleAnswer(qid, answer);
    navigate(`/result/${qid}`);
  };

  return (
    <Card>
      <CardHead Variant="h2" title={`${user.name} asks:`} />

      <CardBody isFlex={true}>
        <CardImage src={user.avatarURL} alt={`Avatar of ${question.author}`} />

        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <h3 className={styles.title}>Would You Rather ...</h3>

          <label className={styles.label}>
            <input
              type="radio"
              name="option"
              value="optionOne"
              defaultChecked
            />
            <span>{question.optionOne.text}</span>
          </label>

          <label className={styles.label}>
            <input type="radio" name="option" value="optionTwo" />
            <span>{question.optionTwo.text}</span>
          </label>

          <button type="Submit" className={`${styles.btn} btn`}>
            Submit
          </button>
        </form>
      </CardBody>
    </Card>
  );
}

export default connect(
  (state) => ({
    users: state.users,
    questions: state.questions,
  }),
  { handleAnswer }
)(Question);
