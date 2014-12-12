/** @jsx React.DOM */

define(
  [
    'react',
    'backbone',
    './VolumeTable.react',
    './NoVolumeNotice.react'
  ],
  function (React, Backbone, VolumeTable, NoVolumeNotice) {

    return React.createClass({
      displayName: "VolumeList",

      propTypes: {
        project: React.PropTypes.instanceOf(Backbone.Model).isRequired,
        volumes: React.PropTypes.instanceOf(Backbone.Collection).isRequired,
        onResourceSelected: React.PropTypes.func.isRequired,
        onResourceDeselected: React.PropTypes.func.isRequired,
        onPreviewResource: React.PropTypes.func.isRequired,
        providers: React.PropTypes.instanceOf(Backbone.Collection).isRequired,
        previewedResource: React.PropTypes.instanceOf(Backbone.Model),
        selectedResources: React.PropTypes.instanceOf(Backbone.Collection),
        instances: React.PropTypes.instanceOf(Backbone.Collection)
      },

      getVolumeContent: function(){
        if(this.props.volumes.length > 0){
          return (
            <VolumeTable volumes={this.props.volumes}
                         project={this.props.project}
                         onResourceSelected={this.props.onResourceSelected}
                         onResourceDeselected={this.props.onResourceDeselected}
                         onPreviewResource={this.props.onPreviewResource}
                         providers={this.props.providers}
                         previewedResource={this.props.previewedResource}
                         selectedResources={this.props.selectedResources}
                         instances={this.props.instances}
            />
          );
        }else{
          return (
            <NoVolumeNotice project={this.props.project}/>
          );
        }
      },

      render: function () {
        return (
          <div>
            <div className="header">
              <i className="glyphicon glyphicon-hdd"></i>
              <h2>Volumes</h2>
            </div>
            {this.getVolumeContent()}
          </div>
        );
      }

    });

  });
