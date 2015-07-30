var React = require('react');
var Router = require('director').Router;
var Movies = require('./Movies.react');
var Bands = require('./Bands.react');

var App = React.createClass({
  getInitialState: function() {
    return {
      movies: ['Inception', 'Titanic', 'The Departed', 'The Aviator', 'Shutter Island', 'Catch Me If You Can', 'The Beach'],
      bands: ['The Beatles', 'Pink Floyd', 'Nightwish', 'Celine Dion', 'Led Zeppelin', 'Green Day'],
    }
  },

  componentDidMount: function() {
    this._initRouter();
  },

  render: function() {
    console.log(this.state.movies);
    return (
      <div>
        <Movies items={this.state.movies} addMovie={this._addMovie} />
        <Bands items={this.state.bands} />
      </div>
    );
  },

  _initRouter: function() {
    this.router = Router({
      '/movies/:name': function(name) {
        console.log('go to this page: ', '/movies/' + name);
      },
      '/bands/:name': function(name) {
        console.log('go to this page: ', '/bands/' + name);
      }
    });
    this.router.init();
  },

  _addMovie: function(movie) {
    var tmpMovies = this.state.movies;
    tmpMovies.push(movie);
    this.setState({ movies: tmpMovies });
  }
});

module.exports = App;
