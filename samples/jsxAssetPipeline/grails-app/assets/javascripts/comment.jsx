exports.Comment = React.createClass({
  render: function() {
    return (
      <div className="alert alert-info">
        <h2 className="commentAuthor">
          {this.props.author} - {this.props.id}
        </h2>
        {this.props.children}
      </div>
    );
  }
});