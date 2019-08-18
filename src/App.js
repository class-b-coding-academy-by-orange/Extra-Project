import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    state = {
        isFormValid: false
    }

    changeIsValid = (value) => {
        this.setState({isFormValid: value})
    }

    render() {
        console.log(this.state.isFormValid)

        return (<div>
            <Form changeIsValid={this.changeIsValid}></Form>
            <Message isFormValid={this.state.isFormValid}></Message>
        </div>);
    }
}

export default App;
