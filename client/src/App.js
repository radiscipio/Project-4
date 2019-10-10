import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';

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
  verifyUser,
  updateUser,
  destroyUser
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
      password_confirmation: "",
    },
    updateInfo: {
      first_name: "",
      last_name: ""
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
    const currentUser = await loginUser(this.state.authFormLogin);
    this.setState({ currentUser })
    this.props.history.push('/');
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const data = this.state.authFormRegister;
    const currentUser = await registerUser(data);
    this.setState({ currentUser })
    this.props.history.push('/');
  };

  handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
    this.props.history.push('/Login')
  };

  updateUserInfo = async (e) => {
    e.preventDefault();
    await updateUser(this.state.currentUser.id, this.state.updateInfo);
    this.setState({ updateInfo : updateUser })
  };

  destroyUser = async (e) => {
    e.preventDefault();
    await destroyUser(this.state.currentUser.id);
    this.setState(prevState => ({
      ...prevState
    }))
    this.props.history.push('/Login')
    this.handleLogout(e);
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
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={(e) => this.handleLogout(e)}
        />
        <Switch>
          <Route exact path='/' render={(props) => (
            <Home />
          )} />

          <Route path='/Products' render={(props) => (
            <Products
              products={this.state.products}
            />
          )} />

          <Route path='/Help' render={(props) => (
            <Help />
          )} />

          <Route path='/Profile' render={(props) => (
            <Profile
              currentUser={this.state.currentUser}
              handleChange={this.handleChange}
              returningUser={this.props.authFormLogin}
              newUser={this.props.authFormRegister}
              destroyUser={this.destroyUser}
              updateInfo={this.state.updateInfo}
              updateUserInfo={this.updateUserInfo}
            />
          )} />

          <Route path='/Login' render={(props) => (
            <Login
              handleChange={this.handleChange}
              handleLogin={this.handleLogin}
              handleRegister={this.handleRegister}
            />
          )} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
