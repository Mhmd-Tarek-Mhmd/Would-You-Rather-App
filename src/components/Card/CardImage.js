import styles from "./card.module.css";

export default function CardImage(props) {
  let classes;
  classes = props.className
    ? `${styles.CardImage} ${props.className} center-flex`
    : `${styles.CardImage} center-flex`;

  return (
    <div className={classes} style={props.style}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}
