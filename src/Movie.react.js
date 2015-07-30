var React = require('react');

var Movie = React.createClass({
  render: function() {
    return (
      <a href={'#/movies/' + this.props.item.split(' ').join('-')}>{this.props.item}</a>
    );
  }
});

module.exports = Movie;
