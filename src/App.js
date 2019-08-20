import React, { Component } from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    state = {
        isValed: ""
    }
    submet = (stateObj) => {
        let test = true
        for (const i in stateObj) {
            test = test && (stateObj[i] === true ? true : false)
        }
        test === true ? this.setState({ isValed: "Form is Complete!" }) : this.setState({ isValed: "Form is Incomplete!" })

    }

    render() {
        return (<div>
            <Form submet={this.submet}></Form>
            <Message isValed={this.state.isValed}></Message>
        </div>);
    }
}

export default App;
