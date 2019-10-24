
import '../css/App.css';
import React, { Component } from 'react';
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getRef : undefined
    }
  }
 
  getRef = (value) =>{
    this.setState({
      getRef : value
    })
  }
  render() {
    return (
      <div >
          <Header goto = {this.state.getRef} ></Header>
          <Main getRef = {this.getRef}></Main>
          <Footer goto = {this.state.getRef}></Footer>
      </div>
    );
  }
}


export default App;
