import React, { Component } from 'react';

class Footer extends Component {
  gotoTop = () =>{
    this.props.goto(0)
  }
    render() {
        return (
        <footer>
          <h1>
            <span>Call for help now!</span> 0867.686.237
          </h1>
          <div className = "btt" onClick= {this.gotoTop}>
          <i className="fa fa-angle-double-up"></i>
          </div>
        </footer>
        );
    }
}

export default Footer;