import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };

    }

    checkName = () =>
    {

    }

    checkEmail = () =>
    {

    }

    checkNumber = () =>
    {

    }

    checkUrl = () =>
    {

    }
    
    render() {
        return (
            <div className="row" >
            <h1 className="text-center">Form Validation</h1>
            <form className="form">
                <h3>Name: 
                </h3>
                <input type="text" id="name" name="name" placeholder="Enter your name"  onChange={this.checkName} /> 
                <h3>Email:
                </h3>
                <input type="email" id="email" name="email" placeholder="Enter your Email" onChange={this.checkEmail}/> 
                <h3>Phone:
                </h3>
                <input type="number" id="number" name="number" placeholder="Enter your number" onChange={this.checkNumber}/> 
                <h3>Blog URL:
                </h3>
                <input type="url" id="url" name="url" placeholder="Enter your url" onChange={this.checkUrl}/> 
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center">Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
