import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Heard from './component/Heard';
import Error from './component/Error';
import Home from './page/Home';
import News from './page/News';
import Mine from './page/Mine';
// import Content from './page/Content';
// import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div>
        <Heard />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/new">
            <News />
          </Route>
          <Route path="/mine">
            <Mine />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}


export default App;
