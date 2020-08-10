import { useEffect, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from "../../contexts/currentUserContext";

const CurrentUserChecker = ({ children }) => {
    const [{ response }, doFetch] = useFetch("/user");
    const [token] = useLocalStorage("token");
    const [, dispath] = useContext(CurrentUserContext);

    useEffect(() => {
        
        if(!token) {
            dispath({type: 'SET_UNAUTHORIZED'})
            return
        }

        doFetch();
        dispath({type: 'LOADING'});
        
    }, [dispath, token, doFetch]);

    useEffect(() => {
        if (!response) return;

       dispath({type: 'SET_AUTHORIZED', payload: response.user})
    }, [response, dispath]);

    return children;
};

export default CurrentUserChecker;
