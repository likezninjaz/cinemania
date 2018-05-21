import React, {Component} from 'react';
import axios from 'axios';

import MovieLayout from './MovieLayout'
import './Movie.css';

class Movie extends Component {
  constructor(props) {
		super(props)
		this.state = {
      movieData: {
        imageBackground: 'https://starwarsblog.starwars.com/wp-content/uploads/2017/11/last-jedi-poster-tall.jpg',
        definition: 'HD',
        ageRathing: 'PG-13',
        duration: 143,
        genere: 'Action',
        original_title: 'Star Wars',
        description: "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order",
        cast: ['Daisy Ridley', 'Mark Hamill', 'Carrie Fisher'],
        views: 4123,
        likes: 3450,
        comments: 846,
        vote_average: 3,
        nominations: 9,
        synopsis: "The opening crawl from this latest film 'Star Wars, Episode VIII: The Last Jedi' reads that the First Order is plotting to seize military control of the galaxy. A team of Resistance fighters led by General Leia Organa (Carrie Fisher) are planning an evacuation from their main base as Supreme Leader Snoke's (Andy Serkis) forces are coming for them. The Resistance holds out hope that Luke Skywalker (Mark Hamill) will return to bring hope. The opening scene shows Poe Dameron (Oscar Isaac) and the droid BB-8 are flying over the First Order's dreadnought as General Hux (Domhnall Gleeson) orders his men to fire upon Poe and the Resistance's base. Other fighters head in for the attack. Poe orders a fighter, Paige (Veronica Ngo), to drop the payload onto the dreadnought. The fighters take heavy hits, and Paige is knocked away from her remote. With mere moments before the First Order obliterates the Resistance, Paige is able to grab the remote and drop all their bombs down on the dreadnought, completely destroying it at the cost of her life. The rest of the fighters go into hyperspace to escape."
      }
    }
  }

  componentDidMount () {
    let that = this;
    
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=b2e81a35254fa5569416d41bed127893')
    .then(function (response) {
      that.setState({
        movieData: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <MovieLayout
        movieData={this.state.movieData}
      />
    );
  }
}

export default Movie;
