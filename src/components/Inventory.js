import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
import PropTypes from 'prop-types';

class Inventory extends Component {
  handleChange = (e, key) => {
    console.log(e.target);
    const fish = this.props.fishes[key];
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    };
    this.props.updateFish(key, updatedFish);
  };
  renderInventory = key => {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input
          type="text"
          name="name"
          onChange={e => this.handleChange(e, key)}
          value={fish.name}
          placeholder="Fish Name"
        />
        <input
          type="text"
          name="price"
          value={fish.price}
          onChange={e => this.handleChange(e, key)}
          placeholder="Fish Price"
        />
        <select
          type="text"
          name="status"
          value={fish.status}
          onChange={e => this.handleChange(e, key)}
          placeholder="Fish Status"
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          value={fish.desc}
          onChange={e => this.handleChange(e, key)}
          placeholder="Fish Desc"
        ></textarea>
        <input
          type="text"
          name="image"
          value={fish.image}
          onChange={e => this.handleChange(e, key)}
          placeholder="Fish Image"
        />
        <button
          onClick={() => {
            this.props.removeFish(key);
          }}
        >
          Remove Fish
        </button>
      </div>
    );
  };
  render() {
    return (
      <div>
        <h1>Inventory</h1>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

Inventory.propTypes = {
  fishes: PropTypes.object.isRequired,
  addFish: PropTypes.func.isRequired,
  updateFish: PropTypes.func.isRequired,
  removeFish: PropTypes.func.isRequired,
  loadSampleFishes: PropTypes.func.isRequired
};
export default Inventory;
