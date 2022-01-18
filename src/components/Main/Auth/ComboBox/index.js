import { useState, useRef, useEffect } from "react";

import styles from "./combo-box.module.css";
import Option from "./Option";

function ComboBox({
  setVal,
  placeHolder,
  children,
  style,
  className,
  slideUP,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [listID, setListID] = useState("");
  const list = useRef();
  const selected = useRef();

  useEffect(
    () => setListID(`list-${Math.random().toString(36).substring(2, 15)}`),
    []
  );

  useEffect(() => {
    if (isOpen) {
      list.current.focus();
      list.current.tabIndex = 0;
      list.current.firstElementChild.classList.add(styles.focus);
    } else {
      list.current.blur();
      list.current.tabIndex = -1;
      [...list.current.children].forEach((ele) =>
        ele.classList.remove(styles.focus)
      );
    }
  }, [isOpen]);

  const opener = () => {
    setIsOpen(!isOpen);
    setActiveIndex(0);
  };

  const handleSelect = (target) => {
    setVal(target.dataset.value); // set the selected value

    [...target.parentElement.children].forEach(
      (child) => (child.ariaSelected = false)
    );
    target.ariaSelected = true;
    setIsOpen(false);

    const clone = target.cloneNode(true);
    selected.current.innerHTML = "";
    [...clone.children].forEach((ele) => selected.current.appendChild(ele));
  };

  const handleKey = (e) => {
    e.key === "Escape" && setIsOpen(false);

    if (e.key === "ArrowUp" && activeIndex !== 0) {
      setActiveIndex(activeIndex - 1);
      e.target.children[activeIndex].classList.remove(styles.focus);
      e.target.children[activeIndex - 1].classList.add(styles.focus);
    }

    if (e.key === "ArrowDown" && e.target.childElementCount > activeIndex + 1) {
      setActiveIndex(activeIndex + 1);
      e.target.children[activeIndex].classList.remove(styles.focus);
      e.target.children[activeIndex + 1].classList.add(styles.focus);
    }

    e.key === "Enter" && handleSelect(e.target.children[activeIndex]);
  };

  return (
    <div
      role="combobox"
      aria-expanded={isOpen}
      aria-controls={listID}
      aria-haspopup={listID}
      aria-owns={listID}
      className={
        className ? `${styles.ComboBox} ${className}` : styles.ComboBox
      }
      style={style}
    >
      <div className={styles.wrapper} onClick={opener}>
        <div ref={selected}>
          <span className={styles.placeholder}>{placeHolder}</span>
        </div>

        <button aria-label={isOpen ? "Hide list" : "Show list"}>
          {isOpen ? "▲" : "▼"}
        </button>
      </div>

      <ul
        id={listID}
        role="listbox"
        aria-label="List"
        ref={list}
        className={`${styles.listBox} ${
          slideUP ? styles.slideUp : styles.slideDown
        }`}
        tabIndex="-1"
        onKeyDown={(e) => handleKey(e)}
        onClick={(e) => handleSelect(e.target)}
        onBlur={() => setIsOpen(false)}
      >
        {children}
      </ul>
    </div>
  );
}

export { Option };
export default ComboBox;
