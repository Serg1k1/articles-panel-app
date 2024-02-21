import { useState } from 'react';
import { useGetArticlesQuery, useDeleteArticleMutation } from '../api/articleApiSlice';
import { useSelector } from 'react-redux';

import Spinner from '../spinner/Spinner';

import './articleList.scss'

const ArticleList = () => {
    const [pinnedItem, setPinnedItem] = useState([]);

    const {
        data: articles = [],
        isLoading,
        isError,
    } = useGetArticlesQuery();

    const term = useSelector(state => state.search.searchTerm);

    const onPinnedItem = (id) => {
        if (pinnedItem.length !== 0) {
            setPinnedItem([]);
        }
        setPinnedItem([id])
    }

    const filteredData = (elements, term, pin) => {
        if (pin.length !== 0 && term.length === 0) {
            const nonPinned = elements.filter((item) => item.id !== pin[0]);
            const pinned = elements.filter((item) => item.id === pin[0]);

            return [...pinned, ...nonPinned];
        }

        if (term.length === 0) {
            return elements;
        }

        return elements.filter((item) => {
            return (item.title.toLowerCase().indexOf(term) > -1 || item.description.toLowerCase().indexOf(term) > -1);
        })
    }

    const [deleteArticle] = useDeleteArticleMutation();

    if (isLoading) {
        return <Spinner />
    } else if (isError) {
        return <h5>Loading Erorr...</h5>
    }

    const renderItems = (arr) => {
        return arr.map((item) => {
            return (
                <div key={item.id} className="article-item card">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{item.author}</li>
                    </ul>
                    <div className="card-body">
                        <button onClick={() => onPinnedItem(item.id)} className="btn btn-primary me-2">Pin article</button>
                        <button onClick={() => deleteArticle(item.id)} className="btn btn-secondary">Delete article</button>
                    </div>
                </div>
            );
        })
    }

    const filteredArticles = filteredData(articles, term, pinnedItem);

    const elements = renderItems(filteredArticles);

    return (
        <div className="article-items">
            {elements}
        </div>
    )
}

export default ArticleList;