import React, { Component } from 'react';
import PropTypes from 'prop-types';
class AddFishForm extends Component {
  // state = {
  //     name:'',
  //     price:'',
  //     status:
  // }
  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    };
    console.log(fish);
    this.props.addFish(fish);
    this.fishForm.reset();
  };

  onChange = () => {};
  render() {
    return (
      <div>
        <form
          ref={input => (this.fishForm = input)}
          onSubmit={this.createFish}
          className="fish-edit"
        >
          <input
            ref={input => {
              this.name = input;
            }}
            type="text"
            placeholder="Fish Name"
          />
          <input
            ref={input => {
              this.price = input;
            }}
            type="text"
            placeholder="Fish Price"
          />
          <select
            ref={input => {
              this.status = input;
            }}
            name=""
            id=""
          >
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold!</option>
          </select>
          <textarea
            ref={input => {
              this.desc = input;
            }}
            type="text"
            placeholder="Fish Desc"
          ></textarea>
          <input
            ref={input => {
              this.image = input;
            }}
            type="text"
            placeholder="Fish Image"
          />
          <button type="submit">+ Add Item</button>
        </form>
      </div>
    );
  }
}

AddFishForm.propTypes = {
  addFish: PropTypes.func.isRequired
};
export default AddFishForm;
