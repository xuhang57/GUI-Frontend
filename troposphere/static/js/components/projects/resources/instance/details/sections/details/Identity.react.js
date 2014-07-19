/** @jsx React.DOM */

define(
  [
    'react',
    'backbone',
    'components/projects/common/ResourceDetail.react'
  ],
  function (React, Backbone, ResourceDetail) {

    return React.createClass({

      propTypes: {
        instance: React.PropTypes.instanceOf(Backbone.Model).isRequired,
        provider: React.PropTypes.instanceOf(Backbone.Model).isRequired
      },

      render: function () {
        var identityId = this.props.instance.get('identity').id;
        var providerName = this.props.provider.get('name');

        return (
          <ResourceDetail label="Identity">
            <strong>{identityId}</strong> on <strong>{providerName}</strong>
          </ResourceDetail>
        );
      }

    });

  });
