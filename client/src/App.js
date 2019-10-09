import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Help from './components/Help/Help';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Profile from './components/Profile/Profile';

import { getProducts } from './services/api-helper';
class App extends React.Component {

  state = {
    products: []
  }

  getAllProducts = async () => {
    const allProducts = await getProducts(this.state.products);
    this.setState({ products: allProducts })
  }

  componentDidMount = () => {
    this.getAllProducts();
  }

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
              <Products
                products={this.state.products}
              />
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

          <Route path='/Login' render={(props) => (
            <>
              <Header />
              <Login />
              <Footer />
            </>
          )} />
        </Switch>
      </div>
    )
  }
}

export default App;
