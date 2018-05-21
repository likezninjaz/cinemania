import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row, ButtonToolbar, Button } from 'react-bootstrap';

import Header from '../../components/Header/Header';


const MovieLayout = ({movieData}) => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Grid className='current-movie justify-content-center'>
                    <Row style={{backgroundImage: 'url(' + movieData.imageBackground + ')'}} className='current-movie__background w-100'>
                    </Row>
                    <Row className='current-movie__info justify-content-center w-100 mt-3'>
                        <Col sm={12} md={12} lg={12}>
                            <Grid>
                                <Col sm={8} md={8} lg={8}>
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
                                        <h2 className='current-movie__name-header'>{movieData.original_title}</h2>
                                        <span className='current-movie__name-underline mt-3'/>
                                    </Row>
                                    <Row className='current-movie__description mb-2'>
                                        <p className='current-movie__description-text'>{movieData.overview}</p>
                                    </Row>
                                    <Row className='current-movie__actions mb-2'>
                                        <ButtonToolbar>
                                            <Button className='btn btn-play-movie'>Play Movie</Button>
                                            <Button className='btn btn-watch-trailer'>Trailer</Button>
                                        </ButtonToolbar>
                                    </Row>
                                    <Row className='current-movie__social-media-list mt-4'>
                                        <Grid>
                                            <Row className='current-movie__social-media-item align-items-center'>
                                                <a href=''>
                                                    <div className='fa fa-facebook-f current-movie__social-media-button' />
                                                    <span className='current-movie__social-media-text ml-3'>Star Wars on Facebook</span>
                                                </a>
                                            </Row>
                                            <Row>
                                                <a href=''>
                                                    <div className='fa fa-twitter current-movie__social-media-button' />
                                                    <span className='current-movie__social-media-text ml-3'>Follow @StarWars</span>
                                                </a>
                                            </Row>
                                        </Grid>
                                    </Row>
                                </Col>
                            </Grid>
                            <Grid className='current-movie__statistics'>
                                <Row className='current-movie__statistics-row-1'>
                                    <Col sm={2} md={2} lg={2} className='current-movie__cast pl-0'>
                                        <Grid className='w-100 h-100'>
                                            <h3 className='current-movie__cast-header'>Cast & crew</h3>
                                            <div className='current-movie__cast-header-underline' />
                                            <p className=''>
                                                {/* {movieData.cast.map((item, index) => (
                                                    <span key={index}>
                                                        {index === 0 ? movieData.cast[index] : ', ' + movieData.cast[index]}
                                                    </span>
                                                ))} */}
                                            </p>
                                        </Grid>
                                    </Col>
                                    <Col sm={4} md={4} lg={4} className='current-movie__cast-photos'>
                                        <Grid className='w-100 h-100'>
                                        </Grid>
                                    </Col>
                                    <Col sm={2} md={2} lg={2} className='current-movie__views'>
                                        <Grid className='w-100 h-100'>
                                            <div className='fa fa-eye mt-3' />
                                            <div className='current-movie__views-count'>
                                                {movieData.views}
                                            </div>
                                            <div className='current-movie__views-label'>views</div>
                                        </Grid>
                                    </Col>
                                    <Col sm={2} md={2} lg={2} className='current-movie__likes'>
                                        <Grid className='w-100 h-100'>
                                            <div className='fa fa-heart mt-3' />
                                            <div className='current-movie__likes-count'>
                                                {movieData.likes}
                                            </div>
                                            <div className='current-movie__likes-label'>likes</div>
                                        </Grid>
                                    </Col>
                                    <Col sm={2} md={2} lg={2} className='current-movie__comments'>
                                        <Grid className='w-100 h-100'>
                                            <div className='fa fa-comments mt-3' />
                                            <div className='current-movie__comments-count'>
                                                {movieData.comments}
                                            </div>
                                            <div className='current-movie__comments-label'>comments</div>
                                        </Grid>
                                    </Col>
                                </Row>
                                <Row className='current-movie__statistics-row-2'>
                                    <Col sm={6} md={6} lg={6}>
                                        <Row>
                                            <Col sm={4} md={4} lg={4} className='current-movie__rathing pl-0'>
                                                <Grid>
                                                    <div className='current-movie__rathing-count'>{movieData.vote_average}</div>
                                                    <div className='current-movie__rathing-label'>Rathing</div>
                                                </Grid>
                                            </Col>
                                            <Col sm={4} md={4} lg={4} className='current-movie__nominations pl-0'>
                                                <Grid>
                                                    <div className='current-movie__nominations-count'>{movieData.nominations}</div>
                                                    <div className='current-movie__nominations-label'>Nominations</div>
                                                </Grid>
                                            </Col>
                                            <Col sm={4} md={4} lg={4} className='current-movie__synopsis'>
                                                <Grid>
                                                    <div className='current-movie__synopsis-header'>Synopsis</div>
                                                    <div className='current-movie__synopsis-underline' />
                                                </Grid>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={6} md={6} lg={6}>
                                        <Row>
                                            <Grid>
                                                <Col sm={12} md={12} lg={12} className='current-movie__synopsis-description'>
                                                    <Grid>
                                                        {movieData.synopsis}
                                                    </Grid>
                                                </Col>
                                            </Grid>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                </Row>
                            </Grid>
                        </Col>
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
        original_title: PropTypes.string,
        overview: PropTypes.string,
        cast: PropTypes.arrayOf(PropTypes.string),
        views: PropTypes.number,
        likes: PropTypes.number,
        comments: PropTypes.number,
        vote_average: PropTypes.number,
        nominations: PropTypes.number,
        synopsis: PropTypes.string
    })
};

export default MovieLayout;
