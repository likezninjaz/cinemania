import React, {Component} from 'react';
import { Grid, Col, Row, Navbar, Nav, NavItem } from 'react-bootstrap';

import Header from '../../components/Header/Header';

export default class ProfileLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className='content'>
                    <Grid className='container-fluid current-movie'>
                        <Row className='current-movie__background w-100'>
                        add img here !
                            <div className='current-movie__overlay w-100 h-100' />
                            <div className='current-movie__overlay-2 w-100' />
                        </Row>
                        <Grid className='current-movie__info'>
                            <Row>
                            <Col sm={5} md={5} lg={5}>
                            </Col>
                            </Row>
                        </Grid>
                    </Grid>
                </main>
            </React.Fragment>
        )
    }
}
