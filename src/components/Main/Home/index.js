import React from "react";
import { connect } from "react-redux";

import styles from "./home.module.css";
import Poll from "./Poll";

function Home({ questions, answeredIds, unAnsweredIds }) {
  React.useEffect(() => (document.title = "Home - Would You Rather App"), []);
  const [questionFilter, setQuestionFilter] = React.useState("unAnswered");
  const Msg = () => <p className="text-center">There is no polls to show.</p>;

  const UnansweredFilter = (target) => {
    target.classList.add(styles.active);
    target.nextElementSibling.classList.remove(styles.active);
    setQuestionFilter("unAnswered");
  };
  const AnsweredFilter = (target) => {
    target.classList.add(styles.active);
    target.previousElementSibling.classList.remove(styles.active);
    setQuestionFilter("answered");
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button
          className={`${styles.links} ${styles.active}`}
          onClick={(e) => UnansweredFilter(e.target)}
        >
          Unanswered
        </button>
        <button
          className={styles.links}
          onClick={(e) => AnsweredFilter(e.target)}
        >
          Answered
        </button>
      </div>

      <div className={styles.cards}>
        {questionFilter === "unAnswered" ? (
          !unAnsweredIds.length ? (
            <Msg />
          ) : (
            unAnsweredIds.map((id) => (
              <Poll
                key={id}
                question={questions[id]}
                toParent={`/question/${questions[id].id}`}
              />
            ))
          )
        ) : !answeredIds.length ? (
          <Msg />
        ) : (
          answeredIds.map((id) => (
            <Poll
              key={id}
              question={questions[id]}
              toParent={`/result/${questions[id].id}`}
            />
          ))
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const answeredIds = Object.keys(state.users[state.authedUser].answers);
  const questionsIds = Object.keys(state.questions);

  for (const id of answeredIds) {
    questionsIds.splice(questionsIds.indexOf(id), 1);
  }

  return {
    questions: state.questions,
    answeredIds,
    unAnsweredIds: questionsIds,
  };
}

export default connect(mapStateToProps)(Home);
