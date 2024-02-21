import ArticleAddForm from '../articleAddForm/ArticleAddForm';
import ArticleSearchForm from '../articleSearchForm/ArticleSearchForm';
import ArticleList from '../articleList/ArticleList';

import './app.scss';

function App() {
  return (
    <main className="app">
      <ArticleSearchForm />
      <ArticleList />
      <ArticleAddForm />
    </main>
  );
}

export default App;
