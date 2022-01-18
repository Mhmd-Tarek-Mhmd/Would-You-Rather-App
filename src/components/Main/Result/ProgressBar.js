import styles from "./results.module.css";

function ProgressBar({ percentage }) {
  return (
    <div className={styles.ProgressBar}>
      <div
        className={`${styles.Progress} center-flex`}
        style={{ width: `${percentage}%` }}
      >
        <span className={styles.percentage}>
          {percentage !== 0 && `${percentage.toPrecision(3)}%`}
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
