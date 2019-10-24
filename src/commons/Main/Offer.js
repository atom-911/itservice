import React, { Component } from 'react';
import icon1 from '../../images/home_itservice_service1.png';
import icon2 from '../../images/home_itservice_service2.png';
import icon3 from '../../images/home_itservice_service3.png';
import icon4 from '../../images/home_itservice_service4.png';
const data = [
    {src : icon1, title : 'Software installation', content : 'Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus auctor fermentum in.'},
    {src : icon2, title : 'Boost up your system', content : 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.'},
    {src : icon3, title : 'Hardware reparation', content : 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.'},
    {src : icon4, title : 'Consulting', content : 'Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis.'}
]
class Offer extends Component {
    render() {
        return (         
            <div className="offer" ref={this.props.innerRef} id={this.props.id}>
                <div className="container">
                    <h1>See what we can do with your device!</h1>
                    <div className="row ">
                        {
                            data.map((value,index)=>{
                                return <div className="col-lg-3 col-sm-12 col-12 col " key={index}>
                                <div> <img src={value.src}  alt = "..." /></div>
                                <h5>{value.title}</h5>
                                <h6>{value.content}</h6>
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default  React.forwardRef((props, ref) => 
<Offer innerRef={ref} />);