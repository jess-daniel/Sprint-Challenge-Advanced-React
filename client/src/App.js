import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return <div className="App">{/* <Display /> */}</div>;
  }
}

export default App;
