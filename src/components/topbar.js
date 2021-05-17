import React from 'react';


import 'bootstrap/dist/css/bootstrap.css';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";

function Topbar() {
    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Image Api</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#by_image">By Image</Nav.Link>
                    <NavDropdown title="By Api" id="basic-nav-dropdown">
                            <NavDropdown.Item href="FaceDetect">Face Detect</NavDropdown.Item>
                            <NavDropdown.Item href="FacialFeature"> Facial Feature </NavDropdown.Item>
                            <NavDropdown.Item href="SkinAnalyzeAdvanced">Skin Analyze Advanced</NavDropdown.Item>
                        <NavDropdown.Item href="#skin_analyze_api"> Skin Analyze </NavDropdown.Item>


                    </NavDropdown>

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>

        </div>
    );
}


export default Topbar