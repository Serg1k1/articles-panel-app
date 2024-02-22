import { useState } from "react";
import { useGetNewsQuery } from "../api/newsApiSlice";

import Spinner from '../spinner/Spinner';

import '../articleList/articleList.scss'

const NewsList = () => {
    const [offset, setOffset] = useState(10);
    const {
        data: news = [],
        isLoading,
        isError,
        isFetching
    } = useGetNewsQuery(offset);

    if (isLoading) {
        return <Spinner />
    } else if (isError) {
        return <h5>Loading Erorr...</h5>
    }

    const handleUploadMore = () => {
        setOffset(oldOffset => oldOffset + 10)
    }

    const renderItems = (arr) => {
        if (arr.length === 0) {
            return <h5>There are no any news</h5>
        }

        return arr.map((item, i) => {
            return (
                <div key={i} className="card">
                    <img style={{ "maxHeight": "200px", "objectFit": "contain" }} src={item.urlToImage} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text"><small className="text-body-secondary">{item.author}</small></p>
                    </div>
                </div>
            );
        })
    }

    const elements = renderItems(news.articles)

    return (
        <>
            <div className="article-items">
                {elements}
            </div>
            <div className="upload-button pb-4">
                <button disabled={isFetching}
                    onClick={handleUploadMore}
                    type="submit"
                    className="btn btn-primary upload-button__custom">Load more</button>
            </div>
        </>

    )
}

export default NewsList;