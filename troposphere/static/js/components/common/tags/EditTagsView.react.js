define(function (require) {

  var React = require('react'),
      Backbone = require('backbone'),
      ViewTags = require('./ViewTags.react'),
      EditTags = require('./EditTags.react');

  var ENTER_KEY = 13;

  return React.createClass({
    display: "EditTagsView",

    propTypes: {
      activeTags: React.PropTypes.instanceOf(Backbone.Collection).isRequired,
      tags: React.PropTypes.instanceOf(Backbone.Collection).isRequired,
      onTagAdded: React.PropTypes.func.isRequired,
      onTagRemoved: React.PropTypes.func.isRequired,
      onCreateNewTag: React.PropTypes.func.isRequired,
      label: React.PropTypes.string.isRequired
    },

    getInitialState: function(){
      return {
        isEditingTags: false
      }
    },

    onEditTags: function(e){
      e.preventDefault();
      this.setState({isEditingTags: true});
    },

    onDoneEditingTags: function(e){
      e.preventDefault();
      this.setState({isEditingTags: false});
    },

    onEnterKeyPressed: function(e){
      var text = e.target.value;
      if (e.which === ENTER_KEY && text.trim()) {
        this.props.onCreateNewTag(text);
      }
    },

    onCreateNewEmptyTag: function(e){
      this.props.onCreateNewTag("");
    },

    render: function () {
      var link,
          newTagButton,
          tagView;

      if(this.state.isEditingTags){
        link = (
          <a className="toggle-editing-link" href="#" onClick={this.onDoneEditingTags}>Done editing</a>
        );

        newTagButton = (
          <a className="btn btn-primary new-tag" href="#" onClick={this.onCreateNewEmptyTag}>+ New tag</a>
        );
      }else{
        link = (
          <a className="toggle-editing-link" href="#" onClick={this.onEditTags}>Create/Edit tags</a>
        );
      }

      if(this.state.isEditingTags){
        tagView = (
          <EditTags
            tags={this.props.tags}
            activeTags={this.props.activeTags}
            onTagAdded={this.props.onTagAdded}
            onTagRemoved={this.props.onTagRemoved}
            onEnterKeyPressed={this.onEnterKeyPressed}
          />
        );
      }else{
        tagView = (
          <ViewTags activeTags={this.props.activeTags}/>
        );
      }

      return (
        <div className="resource-tags">
          <span className='tag-title'>{this.props.label}</span>
          {link}
          {newTagButton}
          {tagView}
        </div>
      );
    }

  });

});
