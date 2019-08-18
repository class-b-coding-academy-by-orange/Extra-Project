import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    state={
        mesge:""
    }



    cheack= (a,s,d,f)=>{
        if(a,s,d,f){
        console.log("all"+true) 

        this.setState({mesge:"all  is Complete"})

       }
       else {this.setState({mesge:"all  isnt Complete"})
    }

    
    }


   

    render() {
        return (<div  >
            <Form  cheack={this.cheack}  />
            <Message msg={this.state.mesge} />
        </div>);
    }
}

export default App;
