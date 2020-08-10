import React from "react";

const BackendErrorMessages = ({ backendError }) => {
    const errMsgs = Object.keys(backendError).map((name) => {
        let msg = backendError[name].join(" ");
        return `${name} ${msg}`;
    });

    console.log(errMsgs);
    return (
        <div>
            <ul>
                {errMsgs.map((errMsg, ind) => (
                    <li className="text-danger" key={ind}>
                        {errMsg}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BackendErrorMessages;
