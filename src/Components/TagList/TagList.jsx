import React from "react";

const TagList = ({ tags }) => {
    return (
        <ul className="tag-list">
            {tags.map((tag, ind) => (
                <li className="tag-default tag-pill tag-outline" key={ind}>
                    {tag}
                </li>
            ))}
        </ul>
    );
};

export default TagList;
