import React, { Component } from 'react'
import styled from 'styled-components';


import NavbarHeader from './NavbarHeader';
import NavbarLinks from './NavbarLinks';
import Icons from './Icons';


export default class Navbar extends Component {
    state = {
        navbarOpen: false
    };

    handleNavbar = () => {
        this.setState({
            navbarOpen: !this.state.navbarOpen
        });
    }
    render() {
        return (
            <NavWrapper>
                <NavbarHeader handleNavbar={this.handleNavbar} />
                <NavbarLinks navbarOpen={this.state.navbarOpen} />
                <Icons hoja="fas" />

            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
@media (min-width:768px) {
    display: flex;
    align-items: center;
}

`