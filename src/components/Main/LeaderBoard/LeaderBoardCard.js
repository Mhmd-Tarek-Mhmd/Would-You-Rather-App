import Score from "./Score";
import Trophy from "./Trophy";
import Card, { CardBody, CardImage } from "../../Card";

function LeaderBoardCard({ user }) {
  return (
    <Card>
      <Trophy />

      <CardBody isFlex={true}>
        <CardImage src={user.avatarURL} alt={`${user.name} avatar`} />

        <Score
          name={user.name}
          questions={user.questions}
          answers={Object.values(user.answers)}
        />
      </CardBody>
    </Card>
  );
}

export default LeaderBoardCard;
