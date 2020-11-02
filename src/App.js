import React, { Suspense } from 'react';
import NavigationBar from './components/shared/NavigationBar';
import NewsList from './components/NewsList';
import SingleArticle from './components/SingleArticle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const { language } = useSelector((state) => state.language);
  const { news } = useSelector((state) => state.news);

  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path='/'>
          <Suspense fallback={<p>Loading...</p>}>
            <NewsList news={news} country={language} />
          </Suspense>
        </Route>
        <Route exact path='/:articleTitle' component={SingleArticle} />
      </Switch>
    </Router>
  );
};

export default App;
