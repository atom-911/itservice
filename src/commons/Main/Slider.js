import React, { Component } from 'react';
import imagesSlide1 from '../../images/home_itservice_slide1-890x440.png';
import imagesSlide2 from '../../images/home_itservice_slide2-890x440.png';
const imgSlide = [
  { src : imagesSlide1},
  {src : imagesSlide2}
]
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }
  getNewSlideIndex = (step) => {
    const slideIndex = this.state.slideIndex;
    const numberSlide = imgSlide.length;

    let newSlideIndex = slideIndex + step;
    if (newSlideIndex >= numberSlide) {
      newSlideIndex = 0
    }
   
    else if (newSlideIndex < 0) 
    {
      newSlideIndex = numberSlide - 1
    }

    return newSlideIndex;
  }

  backward =()=> {
    this.setState({
      slideIndex: this.getNewSlideIndex(-1)
    });
  }
  forward = () => {
    this.setState({
      slideIndex: this.getNewSlideIndex(1)
    });
  }
  setSlideIndex = (index) =>{
    this.setState({
      slideIndex: index
    })
  }
    render() {
        return (         
        <div className="slider" id = {this.props.id}>
          <div className="container">     
            <div className="row">
              <div className="col-lg-12">
                <div className="images-slide">
                    {
                      imgSlide.map((images, index)=>{
                        return (
                          <div 
                          key= {index}
                          className={
                            `slide ${this.state.slideIndex === index ? "active" : ""}`
                          }>
                            <img src={images.src} alt = "..."/>
                          </div>
                        )
                      })
                    }
                </div>
                <div className="btn-slide">
                  <div className="prev" onClick = {this.backward}>
                    <i className="fa fa-chevron-left" />
                  </div>
                  <div className="next" onClick = {this.forward}>
                    <i className="fa fa-chevron-right" />
                  </div>
                </div>
                <div className="list-slide">
                  <ul>
                    {
                     imgSlide.map((value,index) =>{
                        return (
                          <li
                          onClick ={()=>this.setSlideIndex(index)}
                          key ={index} 
                          className={`${this.state.slideIndex === index ? "active-item" : ""}`}/>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>   
          </div>
        </div>
        );
    }
}

export default Slider 

;