import { showLoading, hideLoading } from "react-redux-loading-bar";

import {
  getInitialData,
  addUser,
  saveQuestion,
  saveQuestionAnswer,
} from "../../utils/api";

import { openModal, closeModal } from "./modal";
import { handleSetTheme, handleGetTheme } from "./theme";
import { setAuthedUser, unSetAuthedUser } from "./authedUser";
import { getUsers, addNewUser, saveUserQuestion } from "./users";
import { getQuestions, addQuestion, answerQuestion } from "./questions";

/**
 * Helper Functions
 */

const key = "wouldYouRatherApp";
const toLocalStorage = (users, questions) => {
  localStorage.setItem(
    key,
    JSON.stringify({
      users: JSON.stringify(users),
      questions: JSON.stringify(questions),
    })
  );
};
const fromLocalStorage = (obj) =>
  JSON.parse(JSON.parse(localStorage[key])[obj]);

/**
 * Handle Async Actions
 */

export function handleGetData() {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(handleGetTheme());

    if (localStorage.wouldYouRatherApp) {
      dispatch(getUsers(fromLocalStorage("users")));
      dispatch(getQuestions(fromLocalStorage("questions")));
      dispatch(hideLoading());
    } else {
      return getInitialData().then(({ users, questions }) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
        toLocalStorage(users, questions);
        dispatch(hideLoading());
      });
    }
  };
}

export function handleAddUser(id, name, avatarURL) {
  return (dispatch, getState) => {
    dispatch(showLoading());

    return addUser({ id, name, avatarURL })
      .then((user) => {
        dispatch(addNewUser(user));
      })
      .finally(() => {
        const { users, questions } = getState();
        toLocalStorage(users, questions);
        dispatch(hideLoading());
      });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((q) => {
        dispatch(addQuestion(q));
        dispatch(saveUserQuestion(q.author, q.id));
      })
      .finally(() => {
        const { users, questions } = getState();
        toLocalStorage(users, questions);
        dispatch(hideLoading());
      });
  };
}

export function handleAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => {
        dispatch(answerQuestion(authedUser, qid, answer));
      })
      .finally(() => {
        const { users, questions } = getState();
        toLocalStorage(users, questions);
        dispatch(hideLoading());
      });
  };
}

export {
  openModal,
  closeModal,
  handleSetTheme,
  setAuthedUser,
  unSetAuthedUser,
};
