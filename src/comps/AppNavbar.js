import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from  'reactstrap'


class AppNavbar extends React.Component {
    state= {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar color = "primary"
                dark expend = "sm"
                className = "mb-5" >
                <Container color="light">
                    <NavbarBrand href="/">simplewebby.com</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                < NavLink href="https://github.com/simplewebby">My GitHub Account</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
                </Navbar>
            </div>
        )
    }
}
    
        
    


export default AppNavbar;