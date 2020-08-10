import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFeed from "./globalFeed/GlobalFeed.jsx";
import Articles from "./article/Articles";
import Auth from "./auth/Auth.jsx";
import TagFeed from "../Components/TagFeed/TagFeed.jsx";
import YourFeed from "./YourFeed/YourFeed.jsx";

export default () => {
    return (
        <Switch>
            <Route path="/" component={GlobalFeed} exact />
            <Route path="/feed" component={YourFeed} exact />
            <Route path="/tags/:tag" component={TagFeed} />
            <Route path="/login" component={Auth} />
            <Route path="/register" component={Auth} />
            <Route path="/articles/:slug" component={Articles} />
        </Switch>
    );
};
