import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Form.css';

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

    checkValidity  = () => {
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const phone = this.phoneInput.value;
        const url = this.urlInput.value;

        console.log(name, email, phone, url);
    }

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Form Validation</h1>
                <form>
                    <h3>
                        Name: 
                        <input ref={name => this.nameInput = name} name="name" type="text" placeholder="Enter your name" />
                    </h3>
                    <h3>
                        Email: 
                        <input ref={email => this.emailInput = email} type="email" placeholder="Enter your email" />
                    </h3>
                    <h3>
                        Phone: 
                        <input ref={phone => this.phoneInput = phone} type="phone" placeholder="Enter your phone number" />
                    </h3>
                    <h3>
                        Blog URL: 
                        <input ref={url => this.urlInput = url} type="url" placeholder="Enter your blog URL" />
                    </h3>
                    <div className="small-6 small-centered text-center columns">
                        <a onClick={this.checkValidity} href="#" className="button success expand round text-center">Verify</a>
                    </div>
                </form>
            </div>);
    }
}

export default Form;
