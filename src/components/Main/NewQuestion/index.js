import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handleAddQuestion, openModal } from "../../../store/actions";

import styles from "./new-question.module.css";
import Card, { CardHead, CardBody } from "../../Card";

function NewQuestion({ handleAddQuestion, openModal }) {
  const navigate = useNavigate();
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  React.useEffect(
    () => (document.title = "New Question - Would You Rather App"),
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (optionOneText.length && optionTwoText.length) {
      handleAddQuestion(optionOneText, optionTwoText);
      navigate("/");
    } else {
      !optionOneText.length
        ? openModal("Enter option one")
        : openModal("Enter option two");
    }
  };

  return (
    <Card isForm={true} onSubmit={(e) => handleSubmit(e)}>
      <CardHead
        Variant="h2"
        title="Create New Question"
        className="text-center"
        style={{ padding: "15px 0" }}
      />

      <CardBody>
        <p>Complete the question</p>
        <strong className={styles.strong}>Would you rather ...</strong>

        <input
          type="text"
          value={optionOneText}
          onChange={(e) => setOptionOneText(e.target.value)}
          className="input"
          aria-label="Enter option one"
          placeholder="Enter option one..."
        />
        <div className={styles.OR}>OR</div>
        <input
          type="text"
          value={optionTwoText}
          onChange={(e) => setOptionTwoText(e.target.value)}
          className="input"
          aria-label="Enter option two"
          placeholder="Enter option two..."
        />

        <button type="submit" className={`${styles.btn} btn`}>
          Submit
        </button>
      </CardBody>
    </Card>
  );
}

export default connect(null, { handleAddQuestion, openModal })(NewQuestion);
