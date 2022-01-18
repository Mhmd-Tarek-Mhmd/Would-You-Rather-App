import styles from "./leader-board.module.css";
import Card, { CardHead, CardBody } from "../../Card";

function Score({ name, questions, answers }) {
  const score = questions.length + answers.length;

  return (
    <div className={`${styles.Score} space-between-flex`}>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>

        <div className="space-between-flex">
          <p>Answered questions</p>
          <span>{answers.length}</span>
        </div>

        <div className={styles.separator} />

        <div className="space-between-flex">
          <p>Created questions</p>
          <span>{questions.length}</span>
        </div>
      </div>

      <Card className={`${styles.scoreNum} text-center`}>
        <CardHead style={{ fontSize: ".9em" }}>Score</CardHead>
        <CardBody>
          <span>{score}</span>
        </CardBody>
      </Card>
    </div>
  );
}

export default Score;
