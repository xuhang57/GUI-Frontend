/** @jsx React.DOM */

define(
  [
    'react',
    'components/common/Gravatar.react',
    'backbone',
    'url',
    './Rating.react',
    './Bookmark.react',
    'context',
    '../detail/tags/Tags.react'
  ],
  function (React, Gravatar, Backbone, URL, Rating, Bookmark, context, Tags) {

    return React.createClass({

      propTypes: {
        application: React.PropTypes.instanceOf(Backbone.Model).isRequired
      },

      onAppClick: function (e) {
        e.preventDefault();
        var url = URL.application(this.props.application);
        Backbone.history.navigate(url, {trigger: true});
      },

      render: function () {
        var app = this.props.application;

        var iconSize = 145;
        var icon;
        if (app.get('icon')) {
          icon = (
            <img src={app.get('icon')} width={iconSize} height={iconSize}/>
          );
        } else {
          icon = (
            <Gravatar hash={app.get('uuid_hash')} size={iconSize}/>
          );
        }

        var appUri = URL.application(app, {absolute: true});

        // Hide bookmarking on the public page
        var bookmark;
        if(context.profile){
          bookmark = (
            <Bookmark application={app}/>
          );
        }

        // todo: Put ratings back when we actually implement them, not while they're random
        //var ratings = <Rating up={app.get('votes').up} down={app.get('votes').down} />

        return (
          <div className='app-card'>
            <div className='icon-container'>
              <a href={appUri} onClick={this.onAppClick}>
                {icon}
              </a>
            </div>
            <div className='app-name'>
              {app.get('name_or_id')}
            </div>
            {bookmark}
            <Tags tags={app.get('tags')}/>
          </div>
        );
      }

    });

  });
