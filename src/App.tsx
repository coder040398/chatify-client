import React, { Fragment } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<div>Hello, Home!</div>} />
        <Route
          path='conversations'
          element={
            <div>
              <div>Conversation</div>
              <Outlet />
            </div>
          }
        >
          <Route path=':id' element={<div>Conversation ID Page</div>} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
