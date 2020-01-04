import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavLink,
    NavbarBrand,
    Nav,
    Container,
    NavItem
} from 'reactstrap';
class AppNavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (<div>
            <Navbar color="info" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand herf="/">TO DO LIST</NavbarBrand >
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://www.bbc.com/news/newsbeat-50756573">things to do</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );

    }

}

export default AppNavBar
