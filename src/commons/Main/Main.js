import React, { Component } from 'react';
import Slider from './Slider';
import Contact from './Contact';
import icon from '../../images/icon.png'
import Offer from './Offer';
import iconQuote from '../../images/icon_quote.png';
class Main extends Component {
    constructor(props) {
        super(props);
        this.home = React.createRef(); 
        this.offer= React.createRef();
        this.quote = React.createRef();
        this.contact = React.createRef();
        this.slider = React.createRef();
    }
    
    scrollToContent = (content) => {
        switch(content) {
          case 0:
            this.home.current.scrollIntoView({behavior: 'smooth'});
            break;
          case 1:
            this.slider.current.scrollIntoView({behavior: 'smooth'});
            break;
          case 2 : 
            this.offer.current.scrollIntoView({behavior : 'smooth'});
            break;
          case 3:
            this.quote.current.scrollIntoView({behavior: 'smooth'});
            break;
          case 4:
            this.contact.current.scrollIntoView({behavior: 'smooth'});
            break;     
            default: break;  
        }
        
      }
      componentDidMount(){
          this.props.getRef(this.scrollToContent);
      }
  
    render() {
        return (
        <div >
            <div className="banner" ref={this.home} id ="home">
                <div className="desc-info">
                    <h1>Want to repair or boost your computer</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus fugiat corporis ad.</h2>
                    <p onClick = {() =>this.scrollToContent(2)}>see offer</p>
                </div>           
            </div>  
            <div className="icon">
                <img src={icon}  alt = "..."/>
            </div>
            <div className="desc" ref={this.slider}>
                <div className="desc-info">
                    <h2>We are able to deal with any electronic device</h2>
                    <h5>Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit
                    nullaquam nunc, accumsan congue.</h5>
                </div>
            </div>
            <Slider id="slider"></Slider>
            <Offer  ref= {this.offer} id = "offer"></Offer>
            <div className="quote" ref= {this.quote} id = "quote" >
            <div className="desc-info">
                <div className="icon-quote"><img src={iconQuote} alt="" /></div>
                <h1>Lorem quis bibendum auctor, nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan.</h1>
                <h4>- Mark Jefferson</h4>
            </div>
            </div>
            <Contact  id = "contact" ref={this.contact}></Contact>           
        </div>
        );
    }
}

export default Main;