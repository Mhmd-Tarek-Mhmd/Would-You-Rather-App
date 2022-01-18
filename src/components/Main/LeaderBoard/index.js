import React from "react";
import { connect } from "react-redux";

import styles from "./leader-board.module.css";
import LeaderBoardCard from "./LeaderBoardCard";

function LeaderBoard({ users }) {
  React.useEffect(
    () => (document.title = "Leader Board - Would You Rather App"),
    []
  );

  return (
    <div className={styles.LeaderBoard}>
      {users.map(
        (user, i) => i < 3 && <LeaderBoardCard key={user.id} user={user} />
      )}
    </div>
  );
}

export default connect((state) => ({
  users: Object.values(state.users).sort((a, b) => {
    const a1 = a.questions.length + Object.values(a.answers).length;
    const b1 = b.questions.length + Object.values(b.answers).length;

    return b1 - a1;
  }),
}))(LeaderBoard);
