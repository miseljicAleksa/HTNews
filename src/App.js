import React from 'react';
import NavigationBar from './components/shared/NavigationBar';
import NewsList from './components/NewsList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/'>
            <NewsList country='us' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
