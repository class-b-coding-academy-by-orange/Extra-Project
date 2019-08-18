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

        console.log(/^[a-zA-Z][a-zA-Z \s]{3,30}$/.test(name))

        if(name===/^[a-zA-Z][a-zA-Z \s]{3,30}$/.test(name)){
          this.setState({
              isNameValid: true,
          })
            
        }else{
            this.setState({
                isNameValid: false,
            })

        }

       

        const email=document.getElementById("email").value;


        console.log(/^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,4}\S*$/.test(email))
        if(email===/^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,4}\S$/.test(email)){
            this.setState({
                isEmailValid: true,
            })
              
          }else{
              this.setState({
                  isEmailValid: false,
              })
  
          }

       const phone= document.getElementById("phone").value;
       if(phone===/^[A-Za-z0-9._%+-]+@[a-z0-9.-\s]+\.[a-z]{1,4}\S$/.test
        
        
        (phone)){
            this.setState({
                isPhoneValid: true,
            })
              
          }else{
              this.setState({
                  isPhoneValid: false,
              })
  
          }
       console.log(/^[2-9]\d{9}$/.test(phone))

     

       const blog=document.getElementById("url").value
       console.log(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(blog))

      

       if(blog===/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test
        
        
        (blog)){
            this.setState({
                isUrlValid: true,
            })
              
          }else{
              this.setState({
                  isUrlValid: false,
              })
  
          }

          const { isEmailValid, isNameValid, isPhoneValid, isUrlValid} = this.state;

if( isEmailValid && isNameValid && isPhoneValid && isUrlValid){
   this.props.changeToMessage(true)
}else{
    this.props.changeToMessage(false)
}

       
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
