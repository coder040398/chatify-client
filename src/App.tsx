import { Fragment } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
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
            <div>
              <div>Conversation</div>
              <Outlet />
            </div>
          }
        >
          <Route path=":id" element={<div>Conversation ID Page</div>} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
