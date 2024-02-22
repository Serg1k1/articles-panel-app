import { useState } from 'react';
import { useGetArticlesQuery, useDeleteArticleMutation } from '../api/articleApiSlice';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

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
        setPinnedItem([id])
        if (pinnedItem.length !== 0 && pinnedItem[0] === id) {
            setPinnedItem([])
        }
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
            return (item.title.indexOf(term) > -1 || item.description.indexOf(term) > -1);
        })
    }

    const [deleteArticle] = useDeleteArticleMutation();

    if (isLoading) {
        return <Spinner />
    } else if (isError) {
        return <h5>Loading Erorr...</h5>
    }

    const renderItems = (arr, pinned) => {
        if (arr.length === 0) {
            <CSSTransition timeout={500} classNames="item">
                return <h5>There are no any news</h5>
            </CSSTransition>
        }

        return arr.map((item) => {

            let clazz = 'btn btn-primary me-2';
            if (item.id === pinned[0]) {
                clazz += ' btn-pinned';
            }

            return (
                <CSSTransition key={item.id} timeout={500} classNames="item">
                    <div className="article-item card">
                        <img src={item.image} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{item.author}</li>
                        </ul>
                        <div className="card-body">
                            <button onClick={() => onPinnedItem(item.id)} className={clazz} >{item.id === pinned[0] ? "Unpin article" : "Pin article"}</button>
                            <button onClick={() => deleteArticle(item.id)} className="btn btn-secondary">Delete article</button>
                        </div>
                    </div>
                </CSSTransition>
            );
        })
    }

    const filteredArticles = filteredData(articles, term, pinnedItem);

    const elements = renderItems(filteredArticles, pinnedItem);

    return (
        <TransitionGroup className="article-items">
            {elements}
        </TransitionGroup>
    )
}

export default ArticleList;