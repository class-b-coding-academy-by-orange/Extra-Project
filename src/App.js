import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
  state = {
    msg: ""
  };

  checkAll = (name, email, phone, url) => {
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(url);
    if (name && email && phone && url) {
      this.setState({ msg: "Form is Complete!" });
    } else {
      this.setState({ msg: "Form is Incomplete!" });
    }
  };

  render() {
    return (
      <div>
        <Form checkAll={this.checkAll} />
        <Message msg={this.state.msg} />
      </div>
    );
  }
}

export default App;
