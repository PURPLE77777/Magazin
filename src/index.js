import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

import { Provider } from "react-redux";
import { store } from "./components/reducers/store.js";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
