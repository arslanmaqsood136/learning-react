import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/style.css';
import StorePicker from './components/StorePicker';
import HomePage from './components/HomePage';
import Notfound from './components/Notfound';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route exact path="/store/:storeId" component={HomePage} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
