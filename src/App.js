import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'
var x = 0
class App extends Component {
    state={
        aa:"validation isn't complete"
    };
    
    verify=(email,name,url,phone)=>{
        console.log(email)
        console.log(name)
        console.log(url)
        console.log(phone)
        if ((email & name & url & phone===true)){
          this.setState({aa: "Completed"})
          console.log("ALL IS True")
            };
             x=1;
             console.log(x)
          }
          


    render() {
        if(x===1){
            return (<div>
                <Form verify={this.verify}/>
                <Message msg={this.state.aa}/>
            </div>);
        }
        
        return (<div>
            
            <Form verify={this.verify}/>
            <Message msg={this.state.aa}/>
        </div>);
    }
}

export default App;
