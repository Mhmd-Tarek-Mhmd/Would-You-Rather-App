import { connect } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./home.module.css";
import Card, { CardHead, CardBody, CardImage } from "../../Card";

function Poll({ users, question, toParent }) {
  const user = users[question.author];
  const text = question.optionOne.text;

  return (
    <Card className={styles.card}>
      <CardHead Variant="h3" title={`${user.name} asks:`} />

      <CardBody isFlex={true}>
        <CardImage src={user.avatarURL} alt={`Avatar of ${user.name}`} />

        <div className={styles.wrapper}>
          <strong>Would you rather</strong>

          <p className={styles.text}>
            ...{text.substring(0, text.length / 2).toLowerCase()}...
          </p>

          <Link to={toParent} className={`${styles.toParent} center-flex`}>
            View Poll
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}

export default connect((state) => ({ users: state.users }))(Poll);
