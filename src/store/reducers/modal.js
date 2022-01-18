import { OPEN_MODAL, ClOSE_MODAL } from "../actions/modal";

const initialState = {
  title: "",
  content: "",
  isClosed: true,
};

export default function modal(state = initialState, action) {
  const { isClosed, title, content } = action;

  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        title,
        content,
        isClosed,
      };

    case ClOSE_MODAL:
      return {
        ...state,
        isClosed,
      };

    default:
      return state;
  }
}
