import { findArticle } from './articleSearchSlice';
import { useDispatch } from 'react-redux';

const ArticleSearchForm = () => {
    const dispatch = useDispatch();

    return (
        <div className="search pt-4" >
            <h1 className="h1 mb-4" >Find your best news</h1>
            <input
                type="text"
                onChange={(e) => dispatch(findArticle(e.target.value))}
                className="form-control search-input"
                placeholder="Search article" />
        </div>
    )
}

export default ArticleSearchForm;