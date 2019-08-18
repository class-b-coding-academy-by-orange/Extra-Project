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
    phone(e){
  let reg= /^[2-9]{10}$/.test(e.target.value)
   
 this.setState({isPhoneValid:reg})

 
    }
    name(e){
        let reg=/[a-zA-Z]{3}/.test(e.target.value)
        console.log(reg)
        // this.setState({isNameValid:reg})
    }
    
   
    render() {
        return (
           
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:<input onChange={this.name.bind(this)}></input>
                </h3>
                <h3>Email:<input></input>
                </h3>
                <h3>Phone:<input onChange={this.phone.bind(this)}></input>
                </h3>
                <h3>Blog URL:<input></input>
                </h3>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center">Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
