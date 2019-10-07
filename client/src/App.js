import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Help from './components/Help/Help';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Profile from './components/Profile/Profile';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={(props) => (
            <>
              <Header />
              <Home />
              <Footer />
            </>
          )} />

          <Route path='/Products' render={(props) => (
            <>
              <Header />
              <Products />
              <Footer />
            </>
          )} />

          <Route path='/Help' render={(props) => (
            <>
              <Header />
              <Help />
              <Footer />
            </>
          )} />

          <Route path='/Profile' render={(props) => (
            <>
              <Header />
              <Profile />
              <Footer />
            </>
          )} />
        </Switch>
      </div>
    )
  }
}

export default App;
