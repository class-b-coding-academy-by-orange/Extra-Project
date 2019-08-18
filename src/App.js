import React, { Component } from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    state = {
        isValid: false
    }

    isComplete = (v) => {
        this.setState({
            isValid: v
        });
    }
    render() {
        console.log(this.state.isValid);
        return (<div>
            <Form changeToMessage={this.isComplete}></Form>
            <Message showMessage={this.state.isValid}></Message>
        </div>);
    }
}

export default App;
