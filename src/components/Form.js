import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

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
    changeName = async (e) => {
        let regTest = /^[a-zA-z][a-zA-z \s]{3,30}$/.test((e.target.value))
        await regTest ? this.setState({ isNameValid: true }) : this.setState({ isNameValid: false })
        console.log('isNameValid', this.state.isNameValid);
    }
    changeEmail = async (e) => {
        let regTest = /^[\w][\w.!#$%&'*+\/=?^_`{|}~-]+@[\w](?:[\w.-]{0,61}[\w]{1,61})+\.[\w]{1,61}[\w.-]{0,61}[\w]$/.test((e.target.value))
        await regTest ? this.setState({ isEmailValid: true }) : this.setState({ isEmailValid: false })
        console.log('isEmailValid', this.state.isEmailValid);
    }
    changePhone = async (e) => {
        let regTest = /^[2-9][0-9]{10}$/.test((e.target.value))
        await regTest ? this.setState({ isPhoneValid: true }) : this.setState({ isPhoneValid: false })
        console.log('isPhoneValid', this.state.isPhoneValid);

    }
    changeUrl = async (e) => {
        let regTest = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test((e.target.value))
        await regTest ? this.setState({ isUrlValid: true }) : this.setState({ isUrlValid: false })
        console.log('isUrlValid', this.state.isUrlValid);
    }

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Form Validation</h1>
                <form>
                    <h3>Name:</h3>
                    <input className="name" onChange={this.changeName} type="text" name="name" />
                    <h3> Email: </h3>
                    <input className="email" onChange={this.changeEmail} type="text" name="email" />
                    <h3>Phone:</h3>
                    <input className="phone" onChange={this.changePhone} type="text" name="phone" />
                    <h3>Blog URL:</h3>
                    <input className="url" onChange={this.changeUrl} type="text" name="blogURL" />
                    <div onClick={this.props.submet.bind(this, this.state)} className="small-6 small-centered text-center columns">
                        <a href="#" className="button success expand round text-center">Verify</a>
                    </div>
                </form>
            </div >);
    }
}


export default Form;
