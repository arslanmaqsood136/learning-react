import React, { Component } from 'react';
import { formatPrice } from '../helper';
import PropTypes from 'prop-types';

class Store extends Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.orders[key];
    const removeBtn = (
      <button onClick={() => this.props.removeOrder(key)}>&times;</button>
    );
    if (!fish || fish.status === 'unavailable') {
      return (
        <li key={key}>
          Sorry, {fish ? fish.name : 'fish'} is no longer available!
          {removeBtn}
        </li>
      );
    }
    return (
      <li key={key}>
        <span>
          {count} lbs {fish.name}
          {removeBtn}
        </span>
        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.orders);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.orders[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + (count * fish.price || 0);
      }
      return prevTotal;
    }, 0);
    return (
      <div>
        <div className="order-wrap">
          <h2>You Order</h2>
          <ul className="order">
            {orderIds.map(this.renderOrder)}
            <li className="total">
              <strong>Total:</strong>
              {formatPrice(total)}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
Store.propTypes = {
  orders: PropTypes.object.isRequired,
  fishes: PropTypes.object.isRequired,
  removeOrder: PropTypes.func.isRequired
};

export default Store;
