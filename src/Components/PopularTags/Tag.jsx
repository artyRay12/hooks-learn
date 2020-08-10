import React from "react";
import { Link } from "react-router-dom";

const Tag = ({ tag, key }) => {
    return (
        <div key={tag} className="tag-list">
            <Link className="tag-default tag-pill" to={`/tags/${tag}`}>{tag}</Link>
        </div>
    );
};

export default Tag;
