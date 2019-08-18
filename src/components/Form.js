import React, {Component} from 'react';
//import {PropTypes} from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            email:'',
            name:'',
            phone:'',
            url:'',
            allitem:false,

        };

    }


chaekname = async (e)=>{
        let regx=/^[a-zA-Z]+[a-zA-Z]$/
        console.log(regx.test(e.target.value))

       await  this.setState({
            name:e.target.value,
            isNameValid: regx.test(e.target.value)
        })
        console.log(this.state.name) 
        console.log("yasmin  "+this.state.isNameValid)
    }

chaekemail =async (e)=>{
    let regx=/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/
    console.log(regx.test(e.target.value))

    await this.setState({
        email:e.target.value,
        isEmailValid: regx.test(e.target.value)
    })
    console.log(this.state.email) 
    console.log("yasmin  "+this.state.isEmailValid)
}

chaekphon = async(e)=>{
    let regx=/^[0-9]*$/
    console.log(regx.test(e.target.value))

    await this.setState({
        phone:e.target.value,
        isPhoneValid: regx.test(e.target.value)
    })
    console.log(this.state.phone) 
    console.log("yasmin  "+this.state.isPhoneValid)

}

chaekurl = async(e)=>{
    let regx=/(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*/
    console.log(regx.test(e.target.value))

    await this.setState({
        url:e.target.value,
        isUrlValid: regx.test(e.target.value)
    })
    console.log(this.state.url) 
    console.log("yasmin  "+this.state.isUrlValid)

}

c



    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                </h3>
                      <input placeholder="Insert Name" value={this.state.name} onChange={this.chaekname} />
                <h3>Email:
                </h3>
                     <input placeholder="Insert Email" value={this.state.email} onChange={this.chaekemail} />
                <h3>Phone:
                </h3>
                     <input placeholder="Insert Phone" value={this.state.phone} onChange={this.chaekphon}/>
                <h3>Blog URL:
                </h3>
                     <input placeholder="Insert URL" value={this.state.url} onChange={this.chaekurl} /> 
                     <br></br><br></br>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center"  onClick={this.props.cheack.bind(this,this.state.isNameValid,this.state.isEmailValid,this.state.isPhoneValid,this.state.isUrlValid)}  >Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
