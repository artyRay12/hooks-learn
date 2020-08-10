import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Tag from "./Tag";

const PopularTags = () => {
    const [{ response, isLoading, error }, doFetch] = useFetch("/tags");

    useEffect(() => {
        doFetch();
    }, [doFetch]);


    return (
        <div className='sidebar'>
            {response && response.tags.map((tag, key) => {
               return <Tag key={tag} tag={tag} />;
            })}
        </div>
    );
};

export default PopularTags;
