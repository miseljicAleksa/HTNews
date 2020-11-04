import React, { Suspense } from 'react';
import NavigationBar from './components/shared/NavigationBar';
import NewsList from './components/NewsList';
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
          <Suspense fallback={<p>Loading...</p>}>
            <NewsList news={newsByRegion} country={language} />
          </Suspense>
        </Route>
        <Route exact path='/news/:urlForArticle' component={SingleArticle} />
        <Suspense fallback={<p>Loading...</p>}>
          <Route exact path='/categories' component={CategoryList} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
