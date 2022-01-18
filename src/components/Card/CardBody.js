import styles from "./card.module.css";

export default function CardBody(props) {
  let classes;
  classes = props.className
    ? `${styles.CardBody} ${props.className}`
    : styles.CardBody;

  const flexClasses = `${classes} ${styles.flex}`;

  return (
    <div className={props.isFlex ? flexClasses : classes} style={props.style}>
      {props.children}
    </div>
  );
}
