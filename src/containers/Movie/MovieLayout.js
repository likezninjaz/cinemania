import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row, Navbar, Nav, NavItem, ButtonToolbar, Button } from 'react-bootstrap';

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
                                    <Row className='current-movie__attributes mb-2'>
                                        <ul className='current-movie__attributes-list p-0 m-0'>
                                            <li className='current-movie__attributes-item'>
                                                {movieData.ageRathing}
                                            </li>
                                            <li className='current-movie__attributes-item'>
                                                {movieData.duration}
                                            </li>
                                            <li className='current-movie__attributes-item'>
                                                {movieData.genere}
                                            </li>
                                        </ul>
                                    </Row>
                                    <Row className='current-movie__name mb-4'>
                                        <h2 className='current-movie__name-header'>{movieData.name}</h2>
                                        <span className='current-movie__name-underline mt-3'/>
                                    </Row>
                                    <Row className='current-movie__description.mb-2'>
                                        <p className='current-movie__description-text'>{movieData.description}</p>
                                    </Row>
                                    <Row className='current-movie__actions.mb-2'>
                                        <ButtonToolbar>
                                            <Button className='btn btn-play-movie'>Play Movie</Button>
                                            <Button className='btn btn-watch-trailer'>Trailer</Button>
                                        </ButtonToolbar>
                                    </Row>
                                    <Row className='current-movie__social-media-listmt-4'>
                                        <Grid>
                                            <Row className='current-movie__social-media-item align-items-center'>
                                                <a href=''>
                                                    <div className='fa fa-facebook-f current-movie__social-media-button'>
                                                        <span className='current-movie__social-media-text ml-3'>Star Wars on Facebook</span>
                                                    </div>
                                                </a>
                                            </Row>
                                        </Grid>
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
        definition: PropTypes.oneOf(['HD', 'Full HD', 'SD', '4K']),
        ageRathing: PropTypes.oneOf(['PG-13', 'PG-18', 'PG-21']),
        duration: PropTypes.number,
        genere: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    })
};
  
MovieLayout.defaultProps = {
    movieData: {
        imageBackground: 'https://starwarsblog.starwars.com/wp-content/uploads/2017/11/last-jedi-poster-tall.jpg',
        definition: 'HD',
        ageRathing: 'PG-13',
        duration: 143,
        genere: 'Action',
        name: 'Star Wars: The Last Jedi',
        description: "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order"
    }
};

export default MovieLayout;
