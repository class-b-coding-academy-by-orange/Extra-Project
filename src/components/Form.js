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


    checkValidity  = (e) => {
        e.preventDefault();

        const inputName = this.nameInput.value;
        const inputEmail = this.emailInput.value;
        const inputPhone = this.phoneInput.value;
        const inputUrl = this.urlInput.value;

        const isAlphaBetween3And30 = /^[A-z][A-z \s]{3,30}$/.test(inputName);
        const isPhoneNumberNotStratZeroOrOne = /^[2-9]{1}[0-9]{9}$/.test(inputPhone);
        const isEmail = /^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/.test(inputEmail);
        const isUrl = /^(http:|https:|ftp:)?$/.test(inputUrl);
        // console.log(isEmail);
        // console.log(isNameAlphaBetWeen3And30);
        // console.log(isPhoneNumberNotStratZeroOrOne);
        // console.log(isUrl);

        this.setState({
            isNameValid: isAlphaBetween3And30,
            isPhoneValid: isPhoneNumberNotStratZeroOrOne,
            isEmailValid: isEmail,
            isUrlValid: isUrl,
        });
    
        const { isNameValid, isPhoneValid, isEmailValid } = this.state;
        this.props.changeIsValid(isNameValid && isPhoneValid && isEmailValid)
    }

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Form Validation</h1>
                <form onSubmit={this.checkValidity}>
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
                        <button onClick={this.checkValidity} href="#" className="button success expand round text-center">Verify</button>
                    </div>
                </form>
            </div>);
    }
}

export default Form;
