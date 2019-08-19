import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false,
      Test: {
        Name: /^[a-zA-Z]{3,30}$/,
        Email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@+([a-zA-Z0-9])+\.+[a-zA-z]{2,}/,
        Phone: /^[2-9][0-9]{9}$/,
        Url: /^(http:\/\/|http:\/\/www.|www.)[a-zA-Z]+\.+[a-zA-Z]{2,}$/
      }
    };
  }

  handle = e => {
    console.log(e.target.value);
    let result = this.state.Test[e.target.name].test(e.target.value);
    console.log(result);
    this.setState({ [`is${e.target.name}Valid`]: result });
    // console.log(this.state[`is${e.target.name}Valid`]);
  };

  // handleName = e => {
  //   let testName = /^[a-zA-Z]{3,30}$/;
  //   console.log(e.target.value);
  //   let result = testName.test(e.target.value);
  //   console.log(result);
  //   this.setState({ isNameValid: result });
  // };

  // handleEmail = e => {
  //   let testEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@+([a-zA-Z0-9])+\.+[a-zA-z]{2,}/;
  //   console.log(e.target.value);
  //   let result = testEmail.test(e.target.value);
  //   console.log(result);
  //   this.setState({ isEmailValid: result });
  // };

  // handlePhone = e => {
  //   let testPhone = /^[2-9][0-9]{9}$/;
  //   console.log(e.target.value);
  //   let result = testPhone.test(e.target.value);
  //   console.log(result);
  //   this.setState({ isPhoneValid: result });
  // };

  // handleURL = e => {
  //   let testURL = /^(http:\/\/|http:\/\/www.|www.)[a-zA-Z]+\.+[a-zA-Z]{2,}$/;
  //   console.log(e.target.value);
  //   let result = testURL.test(e.target.value);
  //   console.log(result);
  //   this.setState({ isUrlValid: result });
  // };

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form>
          <h3>
            Name:{" "}
            <input
              name="Name"
              type="test"
              placeholder="Enter your name"
              onChange={this.handle}
            />
          </h3>
          <h3>
            Email:{" "}
            <input
              name="Email"
              type="test"
              placeholder="Enter your email"
              onChange={this.handle}
            />
          </h3>
          <h3>
            Phone:{" "}
            <input
              name="Phone"
              type="test"
              placeholder="Enter your phone number"
              onChange={this.handle}
            />
          </h3>
          <h3>
            Blog URL:{" "}
            <input
              name="Url"
              type="test"
              placeholder="Enter your blog URL"
              onChange={this.handle}
            />
          </h3>
          <div className="small-6 small-centered text-center columns">
            <a
              onClick={this.props.checkAll.bind(
                this,
                this.state.isNameValid,
                this.state.isEmailValid,
                this.state.isPhoneValid,
                this.state.isUrlValid
              )}
              href="#"
              className="button success expand round text-center"
            >
              Verify
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
