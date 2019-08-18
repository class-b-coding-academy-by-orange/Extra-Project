import React, {Component} from 'react';

class Message extends Component {
    render(){
    return (
        <div>
            <h3 className="text-center message" >{this.props.msg}</h3>
            <h1></h1>
        </div>
    )
}}

export default Message;
