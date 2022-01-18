import styles from "./combo-box.module.css";

export default function Option({ children, dataVal, style, className }) {
  return (
    // Must have dataVal as a prop to set the selected value

    <li
      role="option"
      aria-selected="false"
      className={className ? `${styles.Option} ${className}` : styles.Option}
      data-value={dataVal}
      style={style}
    >
      {children}
    </li>
  );
}
