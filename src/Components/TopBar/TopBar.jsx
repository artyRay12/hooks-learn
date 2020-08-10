import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/currentUserContext";

const TopBar = () => {
    const [currentUserState] = useContext(CurrentUserContext);
    console.log(currentUserState);

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Medium
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" exact>
                            Home
                        </NavLink>
                    </li>
                    {!currentUserState.isLoggedIn ? (
                        <>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">
                                    Sign In
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">
                                    Sign Up
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <NavLink
                                    to="/articles/new"
                                    className="nav-link"
                                    exact
                                >
                                    <i className="ion-compose"></i>
                                    &nbsp; New Post
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/profile/${currentUserState.currentUser.username}`}
                                    className="nav-link"
                                    exact
                                >
                                    <i className="ion-compose"></i>
                                    &nbsp; {currentUserState.currentUser.username}
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default TopBar;
