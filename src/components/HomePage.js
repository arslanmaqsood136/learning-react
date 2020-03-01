import React, { Component } from 'react';
import Header from './Header';
import Store from './Store';
import Inventory from './Inventory';
import Fish from './Fish';
//Sample Fishes
import fishes from '../sample-fishes';
// import base from '../base';
import PropTypes from 'prop-types';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fishes: {},
      orders: {}
    };
    this.addFish = this.addFish.bind(this);
    this.loadSampleFishes = this.loadSampleFishes.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
  }
  updateFish(key, updatedFish) {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes }, () => {
      localStorage.setItem('fishes', JSON.stringify(this.state.fishes));
    });
  }
  addFish(fish) {
    const fishes = { ...this.state.fishes };
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    this.setState({ fishes });
  }
  removeFish(key) {
    console.log(this.state.fishes);
    const fishes = { ...this.state.fishes };
    delete fishes[key];
    const localStorageFishRef = localStorage.getItem('fishes');
    if (localStorageFishRef) {
      localStorage.setItem('fishes', JSON.stringify(fishes));
      this.setState({ fishes });
    }
  }
  loadSampleFishes() {
    this.setState({ fishes });
    localStorage.setItem('fishes', JSON.stringify(fishes));
  }
  addToOrder(key) {
    const orders = { ...this.state.orders };
    orders[key] = orders[key] + 1 || 1;
    this.setState({ orders });
  }
  removeOrder(key) {
    const orders = { ...this.state.orders };
    delete orders[key];
    localStorage.setItem(
      `order-${this.props.match.params.storeId}`,
      JSON.stringify(orders)
    );
    this.setState({ orders });
  }
  componentWillMount() {
    const localStorageRef = localStorage.getItem(
      `order-${this.props.match.params.storeId}`
    );
    const localStorageFishRef = localStorage.getItem('fishes');
    if (localStorageRef) {
      this.setState({ orders: JSON.parse(localStorageRef) });
    }
    if (localStorageFishRef) {
      //   this.setState({ fishes });
      this.setState({ fishes: JSON.parse(localStorageFishRef) });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      `order-${nextProps.match.params.storeId}`,
      JSON.stringify(nextState.orders)
    );
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                addToOrder={this.addToOrder}
                key={key}
                index={key}
                details={this.state.fishes[key]}
              />
            ))}
          </ul>
        </div>
        <Store
          removeOrder={this.removeOrder}
          fishes={this.state.fishes}
          orders={this.state.orders}
        />
        <Inventory
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          addFish={this.addFish}
          removeFish={this.removeFish}
        />
      </div>
    );
  }
}
HomePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default HomePage;
