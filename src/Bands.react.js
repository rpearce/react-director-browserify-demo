var React = require('react');
var Band = require('./Band.react');

var Bands = React.createClass({
  render: function() {
    return (
      <div>{this._buildItems()}</div>
    );
  },

  _buildItems: function() {
    return this.props.items.map(function(item) {
      return <Band item={item} key={item} />;
    });
  }
});

module.exports = Bands;
