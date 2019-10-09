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
import {
  getProducts,
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper';

class App extends React.Component {

  state = {
    products: [],
    currentUser: null,
    form: {
      email: ""
    },
    authFormLogin: {
      email: "",
      password: "",
    },
    authFormRegister: {
      email: "",
      password: "",
      passwordConfirmation: "",
    }
  };

  /////////////////////////
  //////// Auth //////////
  ///////////////////////

  checkUser = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  };

  handleLogin = async (e) => { 
    e.preventDefault();
    const userData = await loginUser(this.state.authFormLogin);
    this.setState({
      currentUser: userData.user
    })
    localStorage.setItem("jwt", userData.token)
  };

  handleRegister = async (e) => {
    e.preventDefault();
    if (!this.confirmPassword()) return;
    if (this.state.authFormRegister.email !== "" && this.state.authFormRegister.password !== "") {
      const { passwordConfirmation, ...data } = this.state.authFormRegister;
      const currentUser = await registerUser(data);
        this.setState({ currentUser})
    }
  };

  confirmPassword = () => {
    return this.state.authFormRegister.password === this.state.authFormRegister.passwordConfirmation
  };

  /////////////////////////
  ////// Products ////////
  ///////////////////////

  getAllProducts = async () => {
    const allProducts = await getProducts(this.state.products);
    this.setState({ products: allProducts })
  };

  componentDidMount = () => {
    this.getAllProducts();
    this.checkUser();
  };

  handleChange = (e, form) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [form]: {
        ...prevState[form],
        [name]: value
      }
    }))
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={(props) => (
            <>
              <Home />
            </>
          )} />

          <Route path='/Products' render={(props) => (
            <>
              <Products
                products={this.state.products}
              />
            </>
          )} />

          <Route path='/Help' render={(props) => (
            <>
              <Help />
            </>
          )} />

          <Route path='/Profile' render={(props) => (
            <>
              <Profile />
            </>
          )} />

          <Route path='/Login' render={(props) => (
            <>
              <Login
                handleChange={this.handleChange}
                handleLogin={this.handleLogin}
                handleRegister={this.handleRegister}
              />
            </>
          )} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
