import { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './app.scss';

import Header from '../header/Header';
import Spinner from '../spinner/Spinner';
const MainPage = lazy(() => import('../pages/MainPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" >
                <MainPage />
              </Route>
              <Route exact path="/news" >
                <NewsPage />
              </Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
