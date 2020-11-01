import React, { Suspense } from 'react';
import NavigationBar from './components/shared/NavigationBar';
import NewsList from './components/NewsList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const { language } = useSelector((state) => state.language);
  const { news } = useSelector((state) => state.news);

  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/'>
            <Suspense fallback={<p>Loading...</p>}>
              {<NewsList news={news} country={language} />}
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
