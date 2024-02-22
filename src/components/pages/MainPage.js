import ArticleAddForm from '../articleAddForm/ArticleAddForm';
import ArticleSearchForm from '../articleSearchForm/ArticleSearchForm';
import ArticleList from '../articleList/ArticleList';

const MainPage = () => {
    return (
        <>
            <ArticleSearchForm />
            <ArticleList />
            <ArticleAddForm />
        </>
    )
}

export default MainPage;