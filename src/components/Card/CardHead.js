import styles from "./card.module.css";

export default function CardHead({
  className,
  style,
  children,
  Variant,
  title,
}) {
  const Title = () =>
    Variant ? <Variant className={styles.Variant}>{title}</Variant> : title;

  return (
    <div
      style={style}
      className={
        className ? `${styles.CardHead} ${className}` : styles.CardHead
      }
    >
      {title ? <Title /> : children}
    </div>
  );
}
