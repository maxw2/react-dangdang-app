import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


import Container from './components/Container/Container'
import Shop from './components/shop/Shop'
import Login from './common/login/Login'
import ShopPage from './components/shop/ShopPage'


import './App.scss';
import './reset.scss'

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <div className="App" style={{ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight }}>
          <Switch>
            <Route path='/shop/:id' component={ShopPage} />
            <Route path='/shop' component={Shop} />
            <Route path='/login' component={Login} />
            <Route exact path='' component={Container} />
            <Redirect to='' />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
