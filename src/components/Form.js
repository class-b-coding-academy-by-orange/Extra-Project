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

    clickHandler = () =>{
        console.log("hi")
        if (this.state.isEmailValid&this.state.isNameValid&&this.state.isPhoneValid&&this.state.isUrlValid)
        { this.props.msg(1)}
        else
        { this.props.msg(0)
            // console.log(this.props.msg)
        }
    }

    checkName = async (e) =>
    {      
        let name = e.target.value;
        let regex = /^[^\d]+$/
        let result = regex.test(name)
        console.log (result)
        await this.setState({isNameValid:result})
        // console.log (this.state)
    }

    checkEmail = async (e) =>
    {  
        let name = e.target.value;
        let regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])+(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        let result = regex.test(name)
        console.log (result)
        await this.setState({isEmailValid:result})
        // console.log (this.state)
    }

    checkNumber = async (e) =>
    {
        let name = e.target.value;
        let regex = /^\(?([2-9]{1})[0-9]{9}$/;
        let result = regex.test(name)
        console.log (result)
        await this.setState({isPhoneValid:result})
        // console.log (this.state)
    }

    checkUrl = async (e) =>
    {
        let name = e.target.value;
        let regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
        let result = regex.test(name)
        console.log (result)
        await this.setState({isUrlValid:result})
        console.log (this.state)
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
                    <a href="#" className="button success expand round text-center" onClick={this.clickHandler}>Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
