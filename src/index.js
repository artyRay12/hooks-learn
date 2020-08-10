import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/currentUserContext";
import CurrentUserChecker from "./Components/currentUserChecker/CurrentUserCheker";

ReactDOM.render(
    <CurrentUserProvider>
        <CurrentUserChecker>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CurrentUserChecker>
    </CurrentUserProvider>,
    document.getElementById("root")
);
