var React = require('react');

var Band = React.createClass({
  render: function() {
    return (
      <a href={'#/bands/' + this.props.item.split(' ').join('-')}>{this.props.item}</a>
    );
  }
});

module.exports = Band;
