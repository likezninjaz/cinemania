import React, {Component} from 'react';
import { Grid, Col, Row, Navbar, Nav, NavItem } from 'react-bootstrap';

export default class HeaderLayout extends Component {
    render() {
        return (
            <header className='header'>
                <Grid className='container h-100'>
                    <Row className='align-items-center justify-content-center header-1'>
                        <Col sm={12} md={12} lg={12}>
                            <h1 className='text-center m-4'>Cinemania</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <Navbar className='navigation'>
                                <Grid className='justify-content-center'>
                                    <Nav className='nav'>
                                        <NavItem className='m-2'>
                                            Movies
                                        </NavItem>
                                        <NavItem className='m-2'>
                                            Cartoons
                                        </NavItem>
                                        <NavItem className='m-2'>
                                            Watch episodes & tv shows
                                        </NavItem>
                                        <NavItem className='m-2'>
                                            Schedule
                                        </NavItem>
                                        <NavItem className='m-2'>
                                            Community
                                        </NavItem>
                                        <NavItem className='m-2'>
                                            Mobile
                                        </NavItem>
                                        <NavItem className='m-2'>
                                            Shop
                                        </NavItem>
                                    </Nav>
                                </Grid>
                            </Navbar>
                        </Col>
                    </Row>
                </Grid>
            </header>
        )
    }
}
