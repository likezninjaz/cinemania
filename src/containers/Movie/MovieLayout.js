import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row, Navbar, Nav, NavItem } from 'react-bootstrap';

import Header from '../../components/Header/Header';


const MovieLayout = ({movieData}) => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Grid className='current-movie justify-content-center'>
                    <Row style={{backgroundImage: 'url(' + movieData.imageBackground + ')'}} className='current-movie__wrapper w-100'>
                        <Grid className='current-movie__info'>
                            <Row>
                                <Col sm={5} md={5} lg={5}>
                                    <Row className='current-movie__definition mb-2'>
                                        <span className='current-movie__definition-label'>{movieData.definition}</span>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Row>
                </Grid>
            </main>
        </React.Fragment>
    )
}

MovieLayout.propTypes = {
    movieData: PropTypes.shape({
        imageBackground: PropTypes.string,
        definition: PropTypes.oneOf(['HD', 'Full HD', 'SD', '4K'])
    })
};
  
MovieLayout.defaultProps = {
    movieData: {
        imageBackground: 'https://starwarsblog.starwars.com/wp-content/uploads/2017/11/last-jedi-poster-tall.jpg',
        definition: 'HD'
    }
};

export default MovieLayout;
