var React = require('react');
var Movie = require('./Movie.react');

var Movies = React.createClass({
  render: function() {

    return (
      <div>
        <form onSubmit={this._triggerAddMovie}>
          <input ref="input" placeholder="Add new movie" />
          <button type="submit">Submit</button>
        </form>
        <br />
        <br />
        <br />
        {this.props.items.map(function(item) {
          return <Movie item={item} key={item} />;
        })}
      </div>
    );
  },

  _triggerAddMovie: function(e) {
    e.preventDefault();
    var newMovie = this.refs.input.getDOMNode().value.trim();
    this.props.addMovie(newMovie);
  }
});

module.exports = Movies;
