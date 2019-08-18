import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
state= {
    msg: ""
}

msgUpdate = (msg) =>
{
    if (msg === 1)
    {this.setState({msg: "Form is Complete!"})}
    else 
    {this.setState({msg: "Form is Incomplete!"})
    console.log(this.state)
    }
}

    render() {
        return (<div >
            <Form msg={this.msgUpdate}></Form>
            <Message type={this.state.msg}></Message>
        </div>);
    }
}

export default App;
