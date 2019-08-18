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
    clicke=()=>{
        const name=document.getElementById("name").value;

        console.log(name)

        const email=document.getElementById("email").value;

        console.log(email)

       const phone= document.getElementById("phone").value;
       console.log(phone)

       const blog=document.getElementById("url").value
       console.log(blog)
       
    }

    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:<input id="name" type="text"/>
                </h3>
                <h3>Email:<input 
                id="email"
                type="email"/>
                </h3>
                <h3>Phone:<input 
                id="phone"
                type="number"/>
                </h3>
                <h3>Blog URL:<input 
                id="url"
                type="url"/>
                </h3>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" 
                    onClick={this.clicke}
                    className="button success expand round text-center">Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
