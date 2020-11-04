import React from 'react';
import NavigationBar from './components/shared/NavigationBar';
import NewsList from './components/NewsList';
import SearchPage from './components/Seach';
import SingleArticle from './components/SingleArticle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CategoryList from './components/CategoryList';

const App = () => {
  const { language } = useSelector((state) => state.language);
  const { newsByRegion } = useSelector((state) => state.news);

  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path='/'>
          {newsByRegion ? (
            <NewsList news={newsByRegion} country={language} />
          ) : (
            <h1>Loading...</h1>
          )}
        </Route>
        <Route exact path='/categories'>
          <CategoryList />
        </Route>
        <Route exact path='/search'>
          <SearchPage />
        </Route>
        <Route exact path='/article/:urlForArticle'>
          <SingleArticle />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
