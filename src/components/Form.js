import React, {Component} from 'react';
// import {PropTypes} from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            url:'',
                  
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };

    }

    onNameChange = (e) => {
        const newValue = e.target.value;
        const regex = /^[a-zA-Z]+(([', -][a-zA-Z ])?[a-zA-Z]*)*/
        
        this.setState({url : newValue})
          this.setState({isNameValid: regex.test(newValue)})
      
        console.log(this.state)
      }

      onEmailChange = (e) => {
        const newValue = e.target.value;
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        this.setState({url : newValue})
          this.setState({isEmailValid: regex.test(newValue)})
      
        console.log(this.state)
      }

      onPhoneChange = (e) => {
        const newValue = e.target.value;        
        const regex = /^[0-9]{10}$/;

        this.setState({url : newValue})
          this.setState({isPhoneValid: regex.test(newValue)})
      
        console.log(this.state)
      }

      onUrlChange = (e) => {
        const newValue = e.target.value;               
        const regex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.#?&//=]*)/
       
          this.setState({url : newValue})
          this.setState({isUrlValid: regex.test(newValue)})
      
        console.log(this.state)
      }

      
      
   render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:<input type="input" onChange={this.onNameChange}/>
                </h3>
                <h3>Email:<input type="input" onChange={this.onEmailChange}/>
                </h3>
                <h3>Phone:<input type="input" onChange={this.onPhoneChange}/>
                </h3>
                <h3>Blog URL:<input type="input" onChange={this.onUrlChange}/>
                </h3>
                <div className="small-6 small-centered text-center columns">
                    <a  className="button success expand round text-center" onClick={this.props.verify.bind(this,
                        this.state.isEmailValid,
                        this.state.isNameValid,
                        this.state.isUrlValid,
                        this.state.isPhoneValid)} >Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
