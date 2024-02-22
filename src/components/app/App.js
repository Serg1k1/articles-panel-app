import { lazy, Suspense } from 'react';

import './app.scss';

import Header from '../header/Header';
const MainPage = lazy(() => import('../pages/MainPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <MainPage />
        <NewsPage />
      </main>

    </div>
  );
}

export default App;
