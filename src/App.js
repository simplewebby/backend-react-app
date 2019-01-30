import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  AppNavbar  from './comps/AppNavbar'
import ShoppingList from './comps/ShoppingList'
import AddItem from './comps/AddItemTo'
import { Provider } from 'react-redux'
import store from './store'
import { Container} from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
          <ShoppingList />
          <AddItem />
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App;
