import React from "react";
import { connect } from "react-redux";

import { closeModal } from "../../store/actions";

import styles from "./modal.module.css";

function Modal({ isClosed, title, content, closeModal }) {
  const modal = React.useRef();
  React.useEffect(() => {
    !isClosed && modal.current.focus();
    document.querySelector("html").style.overflow = isClosed
      ? "auto"
      : "hidden";
  }, [isClosed]);

  const trapFocus = (e) => {
    const focusableElements = modal.current.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]), input[type="radio"]:not([disabled])'
    );
    const firstFocusableEl = focusableElements[0];
    const lastFocusableEl = focusableElements[focusableElements.length - 1];
    const isTabPressed = e.key === "Tab" || e.keyCode === 9;

    e.key === "Escape" && closeModal();
    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      /* shift + tab */
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else {
      /* tab */
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  };

  return (
    <div
      ref={modal}
      role="dialog"
      aria-modal
      tabIndex="0"
      aria-labelledby="modal-title"
      onKeyDown={(e) => trapFocus(e)}
      className={`${styles.Modal} ${!isClosed ? styles.opened : ""}`}
    >
      <div className={styles.modalMask}></div>

      <div className={styles.modalWindow}>
        <h2 id="modal-title">{title}</h2>
        {content && content}
        <button className={`btn ${styles.btn}`} onClick={closeModal}>
          OK
        </button>
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    const { content, title, isClosed } = state.modal;
    return {
      content,
      title,
      isClosed,
    };
  },
  { closeModal }
)(Modal);
