import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './containers/Movie/Movie';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Movie />, 
document.getElementById('root'));

registerServiceWorker();
