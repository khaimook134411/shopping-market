import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import CommonFeedback from "./components/hoc/CommonFeedback";
import Home from "./pages/home/Home";
import { persistedStore, store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <CommonFeedback>
            <div>
              <Routes>
                <Route path="/">
                  <Route path=":lang" element={<Home />} />
                </Route>
              </Routes>
            </div>
          </CommonFeedback>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
