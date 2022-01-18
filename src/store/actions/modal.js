export const OPEN_MODAL = "OPEN_MODAL";
export const ClOSE_MODAL = "ClOSE_MODAL";

export function openModal(title, content, isClosed = false) {
  return {
    type: OPEN_MODAL,
    title,
    content,
    isClosed,
  };
}

export function closeModal(isClosed = true) {
  return {
    type: ClOSE_MODAL,
    isClosed,
  };
}
