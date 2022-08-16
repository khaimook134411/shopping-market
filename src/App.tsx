import React from "react";
import { Provider } from "react-redux";
// import { Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import Home from "./pages/home/Home";
import { persistedStore, store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          {/* <Routes>
            <Route path=":lang" element={<Home />} />
          </Routes> */}
          <Home />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
