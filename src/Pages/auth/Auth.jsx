import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import BackendErrorMessages from "./Components/BackendErrorMessages";

const Auth = (props) => {
    const isLogin = props.match.path === "/login";
    const pageTitle = isLogin ? "Sign In" : "Sign Up";
    const descriptionLink = isLogin ? "/register" : "/login";
    const descText = isLogin ? "Need new acc" : "Already have acc";

    const apiUrl = isLogin ? "/users/login" : "/users";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
    const [{ error, response, isLoading }, doFetch] = useFetch(apiUrl);
    const [, setToken] = useLocalStorage("token");

    const [, dispath] = useContext(CurrentUserContext);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = isLogin
            ? { email, password }
            : { email, password, username };
        doFetch({
            method: "post",
            data: {
                user,
            },
        });
    };

    useEffect(() => {
        if (!response) return;

        setToken(response.user.token);
        setIsSuccessfullSubmit(true);
        debugger
        dispath({type: 'SET_AUTHORIZED', payload: response.user})

    }, [response, setToken, dispath]);

    if (isSuccessfullSubmit) return <Redirect to="/" />;

    return (
        <div className="auth-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">{pageTitle}</h1>
                        <p className="text-xs-center">
                            <Link to={descriptionLink}>{descText}</Link>
                        </p>
                        <form action="" onSubmit={handleSubmit}>
                            {error && (
                                <BackendErrorMessages
                                    backendError={error.errors}
                                />
                            )}
                            {!isLogin && (
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        autoComplete="current-pass"
                                        placeholder="userName"
                                        value={username}
                                        onChange={(e) =>
                                            setUserName(e.target.value)
                                        }
                                    />
                                </fieldset>
                            )}

                            <fieldset className="form-group">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    autoComplete="current-pass"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    autoComplete="current-pass"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </fieldset>
                            <button
                                className="btn btn-lg btn-primary pull-xs-right"
                                type="submit"
                                disabled={isLoading}
                            >
                                {pageTitle}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
