import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import ConversationChannelPage from "./pages/ConversationChannelPage";
import ConversationPage from "./pages/ConversationPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="conversations"
          element={
            <AuthenticatedRoute>
              <ConversationPage />
            </AuthenticatedRoute>
          }
        >
          <Route path=":id" element={<ConversationChannelPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
