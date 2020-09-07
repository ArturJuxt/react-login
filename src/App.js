import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuList from "./components/MenuList/MenuList";
import Routers from "./Routers/Routers";
import Reducer from "./store/Reducers/RootReducer";

function App() {
  const store = createStore(Reducer);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <div>
            <MenuList />
            <div>
            <Switch>
              <Routers />
            </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
