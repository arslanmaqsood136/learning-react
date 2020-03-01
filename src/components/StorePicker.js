import React, { Component } from 'react';
import { getFunName } from '../helper';
// import { Redirect, useHistory } from 'react-router-dom';
class StorePicker extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //      storeName:''
  //   }
  //   this.onChange = this.onChange.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  // }
  // state = {
  //   storeName: ''
  // };
  // onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  goToStore = e => {
    e.preventDefault();
    // const history = useHistory();
    // return <Redirect to="/store/123" />;
    this.props.history.push(`/store/${this.storeInput.value}`);
  };
  render() {
    return (
      // Evnt binding using arrow function e => this.goToStore(e)

      <form onSubmit={this.goToStore} className="store-selector">
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          name="storeName"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={input => {
            this.storeInput = input;
          }}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}
export default StorePicker;
