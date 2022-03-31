import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import store from "./store";

import "./index.css";
import App from "./components/App";
import Modal from "./components/Modal";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root-app")
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Modal />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root-modal")
);


serviceWorkerRegistration.register();