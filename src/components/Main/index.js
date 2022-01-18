import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Auth from "./Auth";
import Home from "./Home";
import Result from "./Result";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";

function Main({ authedUser }) {
  const styles = { minHeight: "calc(100vh - 100px)", margin: "25px 0" };

  return (
    <main style={styles}>
      {authedUser === null ? (
        <Auth />
      ) : (
        <Routes>
          <Route end path="" element={<Home />} />
          <Route end path="new" element={<NewQuestion />} />
          <Route end path="leader-board" element={<LeaderBoard />} />
          <Route end path="question/:id" element={<Question />} />
          <Route end path="result/:id" element={<Result />} />
          <Route end path="sign-in" element={<Auth />} />
          <Route end path="sign-up" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </main>
  );
}

export default connect((state) => ({ authedUser: state.authedUser }))(Main);
