import styles from "./card.module.css";

import CardHead from "./CardHead";
import CardImage from "./CardImage";
import CardBody from "./CardBody";

export { CardHead, CardImage, CardBody };

export default function Card(props) {
  let Element, classes;
  Element = props.isForm ? "form" : "div";
  classes = props.className ? `${styles.Card} ${props.className}` : styles.Card;

  return (
    <Element
      className={classes}
      style={props.style}
      onSubmit={props.onSubmit && props.onSubmit}
    >
      {props.children}
    </Element>
  );
}
