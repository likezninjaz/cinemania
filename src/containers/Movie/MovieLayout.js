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
                                        <h2 className='current-movie__name-header'>{movieData.name}</h2>
                                        <span className='current-movie__name-underline mt-3'/>
                                    </Row>
                                    <Row className='current-movie__description mb-2'>
                                        <p className='current-movie__description-text'>{movieData.description}</p>
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
                                                {movieData.cast.map((item, index) => (
                                                    <span key={index}>
                                                        {index === 0 ? movieData.cast[index] : ', ' + movieData.cast[index]}
                                                    </span>
                                                ))}
                                            </p>
                                        </Grid>
                                    </Col>
                                    <Col sm={4} md={4} lg={4} className='current-movie__cast-photos'>
                                        <Grid className='w-100 h-100'>
                                        </Grid>
                                    </Col>
                                    <Col sm={2} md={2} lg={2} className='current-movie__views'>
                                        <Grid className='w-100 h-100'>
                                            <div classNames='fa fa-eye mt-3' />
                                            <div className='current-movie__views-count'>
                                                {movieData.views}
                                            </div>
                                            <div className='current-movie__views-label'>views</div>
                                        </Grid>
                                    </Col>
                                    <Col sm={2} md={2} lg={2} className='current-movie__likes'>
                                        <Grid className='w-100 h-100'>
                                            <div classNames='fa fa-heart mt-3' />
                                            <div className='current-movie__likes-count'>
                                                {movieData.likes}
                                            </div>
                                            <div className='current-movie__likes-label'>likes</div>
                                        </Grid>
                                    </Col>
                                    <Col sm={2} md={2} lg={2} className='current-movie__comments'>
                                        <Grid className='w-100 h-100'>
                                            <div classNames='fa fa-comments mt-3' />
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
                                            <Col sm={4} md={4} lg={4} className='current-movie__wins pl-0'>
                                                <Grid>
                                                    <div className='current-movie__wins-count'>{movieData.wins}</div>
                                                    <div className='current-movie__wins-label'>Wins</div>
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
        name: PropTypes.string,
        description: PropTypes.string,
        cast: PropTypes.arrayOf(PropTypes.string),
        views: PropTypes.number,
        likes: PropTypes.number,
        comments: PropTypes.number,
        wins: PropTypes.number,
        nominations: PropTypes.number,
        synopsis: PropTypes.string
    })
};
  
MovieLayout.defaultProps = {
    movieData: {
        imageBackground: 'https://starwarsblog.starwars.com/wp-content/uploads/2017/11/last-jedi-poster-tall.jpg',
        definition: 'HD',
        ageRathing: 'PG-13',
        duration: 143,
        genere: 'Action',
        name: 'Star Wars',
        description: "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order",
        cast: ['Daisy Ridley', 'Mark Hamill', 'Carrie Fisher'],
        views: 4123,
        likes: 3450,
        comments: 846,
        wins: 3,
        nominations: 9,
        synopsis: "The opening crawl from this latest film 'Star Wars, Episode VIII: The Last Jedi' reads that the First Order is plotting to seize military control of the galaxy. A team of Resistance fighters led by General Leia Organa (Carrie Fisher) are planning an evacuation from their main base as Supreme Leader Snoke's (Andy Serkis) forces are coming for them. The Resistance holds out hope that Luke Skywalker (Mark Hamill) will return to bring hope. The opening scene shows Poe Dameron (Oscar Isaac) and the droid BB-8 are flying over the First Order's dreadnought as General Hux (Domhnall Gleeson) orders his men to fire upon Poe and the Resistance's base. Other fighters head in for the attack. Poe orders a fighter, Paige (Veronica Ngo), to drop the payload onto the dreadnought. The fighters take heavy hits, and Paige is knocked away from her remote. With mere moments before the First Order obliterates the Resistance, Paige is able to grab the remote and drop all their bombs down on the dreadnought, completely destroying it at the cost of her life. The rest of the fighters go into hyperspace to escape."
    }
};

export default MovieLayout;
