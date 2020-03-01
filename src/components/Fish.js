import React, { Component } from 'react';
import { formatPrice } from '../helper';
import PropTypes from 'prop-types';

class Fish extends Component {
  render() {
    const { name, price, image, desc } = this.props.details;
    const index = this.props.index;
    const isAvailable = this.props.details.status === 'available';
    const buttonText = isAvailable ? 'Add to Order' : 'Sold Out';
    return (
      <li className="menu-fish">
        <img src={'../assets' + image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          onClick={() => this.props.addToOrder(index)}
          disabled={!isAvailable}
        >
          {buttonText}
        </button>
      </li>
    );
  }
}
Fish.propTypes = {
  details: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
  addToOrder: PropTypes.func.isRequired
};

export default Fish;
