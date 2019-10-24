import React, { Component } from 'react';
import axios from 'axios';

const addDataform =  (name,phone,message) => {
 return  axios.post('https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbyUvlSEG5GT0_8I-A3oDA6K5nYlnvprNSeoKbpXX810JzHyPgM/exec',{name,phone,message},{headers: {'Access-Control-Allow-Origin': '*'}})
  .then((resp)=>resp.data)
}

class Contact extends Component{
constructor(props) {
  super(props);
  this.state = {
    name : "",
    email : "",
    phone : "",
    message : ""
  }
}



  handleChange = (event) => {
    const value  = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value 
    });
    
  }

  handleSubmit = (event) =>
  {

  }
  render (){
    
    return (
      <div className="contact" ref={this.props.innerRef} id={this.props.id}>
          <div className="container">
            <div className="title">
              <h2>Send your device now and receive it back within 4 days!</h2>       
              <span>* Nulla imperdiet sit amet magna vestibulum dapibus, mauris nec malesuada fames</span>
            </div>
            <div className="row infomation">
              <div className="col-lg-4 col2">
                <h4>About us</h4>
                <span>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a.</span>
                <h5>Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.</h5>
              </div>
              <div className="col-lg-4 col2">
                <h4>Shipping information</h4>
                <span>Ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet.</span>
                <h5>Integer aliquam purus. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in faucibas.</h5>
              </div>
              <div className="col-lg-4 my-contact col2">
                <h4>Send me a message</h4>
                <form onSubmit={this.handleSubmit} id = "formData">
                  <input type="text" name="name" value = {this.state.name} onChange={this.handleChange} placeholder="Name" />
                  <input type="text" name="Email" value = {this.state.email} onChange={this.handleChange} placeholder="Email" />
                  <input type="text" name="phone"  value = {this.state.phone} onChange={this.handleChange} placeholder="Phone" />
                  <textarea rows={3} cols={30} name="message" value = {this.state.message} onChange={this.handleChange} placeholder="Message"  />
                  <button type="submit" >SEND MESSAGE</button>
                </form>
              </div>
            </div>
            <div className="social ">
              <i className="fa fa-facebook" />
              <i className="fa fa-instagram" />
              <i className="fa fa-google-plus" />
              <i className="fa fa-skype"  />
            </div>
          </div>
        </div>
          )
        }
      }   

export default  React.forwardRef((props, ref) => <Contact innerRef={ref} />);