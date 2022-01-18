import { connect } from "react-redux";

import styles from "./results.module.css";
import ProgressBar from "./ProgressBar";

function Option({ OptionText, votes, totalVotes, authedUser }) {
  const isVoted = votes.includes(authedUser);

  return (
    <div className={`${styles.Option} ${isVoted ? styles.voted : ""}`}>
      <h4>{OptionText}</h4>

      <ProgressBar percentage={(votes.length * 100) / totalVotes} />

      <div className={styles.info}>
        {votes.length} out of {totalVotes} votes
      </div>

      {isVoted && (
        <div className={`${styles.vote} center-flex text-center`}>
          Your Vote
        </div>
      )}
    </div>
  );
}

export default connect((state) => ({ authedUser: state.authedUser }))(Option);
