import React from "react";
import { connect } from "react-redux";

import styles from "./results.module.css";
import Option from "./Option";
import NotFound from "../NotFound";
import Card, { CardHead, CardBody, CardImage } from "../../Card";

function Result({ users, questions }) {
  const qid = window.location.pathname.substr(8);
  if (!Object.keys(questions).includes(qid)) {
    return <NotFound msg="This Result doesn't exist." />;
  }

  document.title = "Result - Would You Rather App";
  const question = questions[qid];
  const user = users[question.author];

  const optionOne = question.optionOne;
  const optionTwo = question.optionTwo;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;

  return (
    <Card>
      <CardHead Variant="h2" title={`Asked by ${user.name}`} />

      <CardBody isFlex={true}>
        <CardImage src={user.avatarURL} alt={`Avatar of ${user.name}`} />

        <div>
          <h3 className={styles.title}>Results:</h3>
          <Option
            OptionText={optionOne.text}
            votes={optionOne.votes}
            totalVotes={totalVotes}
          />
          <Option
            OptionText={optionTwo.text}
            votes={optionTwo.votes}
            totalVotes={totalVotes}
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default connect((state) => ({
  users: state.users,
  questions: state.questions,
}))(Result);
