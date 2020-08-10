import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Feed from "../../Components/Feed/Feed";
import Pagination from "../../Components/Pagination/Pagination";
import { getPaginatior, limit } from "../../utils/utils";
import PopularTags from "../../Components/PopularTags/PopularTags";
import FeedToggle from "../../Components/FeedToggle/FeedToggle";

const GlobalFeed = ({ location, match }) => {
    const { offset, currentPage } = getPaginatior(location.search);
    const apiUrl = `/articles?limit=10&offset=${offset}`;
    const url = match.url;
    const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

    useEffect(() => {
        doFetch();
    }, [doFetch, offset, currentPage]);

    return (
        <div className="home-page">
            <div className="banner">
                <div className="container">
                    <h1>Medium clonse</h1>
                    <p>A place to share knowledge</p>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <FeedToggle tag="foo" />
                        {isLoading && <span>Loading...</span>}
                        {error && <div>Error!!!</div>}
                        {!isLoading && response && (
                            <>
                                <Feed articles={response.articles} />
                                <Pagination
                                    total={response.articlesCount}
                                    limit={limit}
                                    url={url}
                                    currentPage={currentPage}
                                />
                            </>
                        )}
                    </div>
                    <div className="col-md-3">
                        <PopularTags />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalFeed;
