import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <Nav goto={this.props.goto} ></Nav>
                </header>
            </div>
        );
    }
}

export default Header;