import React, {Component} from 'react';
import { Grid, Col, Row, Navbar, Nav, NavItem } from 'react-bootstrap';

export default class HeaderLayout extends Component {
    render() {
        return (
            <header className='header'>
                <Grid className='h-100'>
                    <Row className='align-items-center justify-content-center header-1'>
                        <Col sm={12} md={12} lg={12}>
                            <h1 className='text-center m-4'>Cinemania</h1>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Navbar className='navigation'>
                            <Nav className='nav'>
                                <NavItem className='m-2'>
                                    Movies
                                </NavItem>
                                <NavItem className='m-2'>
                                    Cartoons
                                </NavItem>
                                <NavItem className='m-2'>
                                    TV shows
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
                        </Navbar>
                    </Row>
                </Grid>
            </header>
        )
    }
}
