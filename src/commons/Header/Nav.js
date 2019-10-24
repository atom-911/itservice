import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { Link } from "react-scroll";
const listMenu = [
    {title : 'Start'},
    {title : 'What me repair'},
    {title : 'Offer'},
    {title : 'Testimonials'},
    {title : 'Why choose me'}
]
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        statusMenu : false,
        listmenuIndex : 0
        }
    }
    changeStatusmenu = () =>{
        this.setState({
          statusMenu : !this.state.statusMenu,
          listmenuIndex : 0
        });
      }
    setIndex = (index) =>{
        this.setState({
          listmenuIndex: index
        })
        this.props.goto(index)
      }

    showMenuResponsive = () => {
        if (this.state.statusMenu === true)
        return  <div className="menu-responsive show-menu">
        <ul>
            {
            listMenu.map((value,index) =>{
                return (
                    <li
                    onClick ={()=>this.setIndex(index)}
                    key ={index} 
                    >
                        <p className={`${this.state.listmenuIndex === index ? "active-list-res" : ""}`}>{value.title}</p>
                    </li>
                     )
                })
            }  
            <li> <p onClick = {this.changeStatusmenu}><i className="fa fa-times"></i></p> </li>        
        </ul>
        </div>
    }
    render() {
        return (
            <nav >
                    <div className="logo">
                        <img src={logo }  alt = "..." />
                    </div>
                    <div className="menu">
                    <ul>
                        {/* {
                            listMenu.map((value,index) =>{
                                return (
                                  <li
                                  onClick ={()=>this.setIndex(index)}
                                  key ={index} 
                                  >
                                      <a  className={`${this.state.listmenuIndex === index ? "active-list" : ""}`}>{value.title}</a>
                                </li>
                                )
                              })
                        } */}
                         <li >
                            <Link
                                activeClass="active-list"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                            >
                                Start
                            </Link>
                            </li>
                            <li>
                            <Link
                                activeClass="active-list"
                                to="slider"
                                spy={true}
                                smooth={true}
                                offset={-200}
                                duration={700}
                            >
                                What me repair
                            </Link>
                            </li>
                            <li>
                            <Link
                                activeClass="active-list"
                                to="offer"
                                spy={true}
                                smooth={true}
                                offset={-90}
                                duration={700}
                            >
                                Offer
                            </Link>
                            </li>
                            <li >
                            <Link
                                activeClass="active-list"
                                to="quote"
                                spy={true}
                                smooth={true}
                                offset={-90}
                                duration={700}
                            >
                                Testimonials
                            </Link>
                            </li>
                            <li >
                            <Link
                                activeClass="active-list"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-90}
                                duration={700}
                            >
                                Why choose me 
                            </Link>
                            </li>
                    </ul>
                  
                    </div>
                    <input type="submit" value="Hire me!" /> 
                    <div className="openNav" onClick = {this.changeStatusmenu}>
                        <i className="fa fa-bars"></i>
                    </div> 
                    {this.showMenuResponsive()}
                
            </nav>
            
        );
    }
}

export default Nav;