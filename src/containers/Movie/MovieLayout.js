import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row, Navbar, Nav, NavItem } from 'react-bootstrap';

import Header from '../../components/Header/Header';


const MovieLayout = ({movieData}) => {
    const backgroundStyle = {
        backgroundImage: 'url(' + movieData.imageBackground + ')'
    }

    return (
        <React.Fragment>
            <Header />
            <main className='content'>
                <Grid className='container-fluid current-movie'>
                    <Row style={backgroundStyle} className='current-movie__background w-100'>
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

MovieLayout.propTypes = {
    movieData: PropTypes.shape({
        imageBackground: PropTypes.string
    })
};
  
MovieLayout.defaultProps = {
    movieData: {
        imageBackground: 'https://starwarsblog.starwars.com/wp-content/uploads/2017/11/last-jedi-poster-tall.jpg'
    }
};

export default MovieLayout;
