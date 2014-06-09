define(
  [
    'underscore',
    'collections/ApplicationCollection',
    'collections/ApplicationSearchResultCollection',
    'dispatchers/Dispatcher',
    'rsvp',
    'models/Application',
    'actions/ApplicationActions',
    'stores/Store',
    'constants/ApplicationConstants',
    'controllers/NotificationController'
  ],
  function (_, ApplicationCollection, ApplicationSearchResultCollection, Dispatcher, RSVP, Application, ApplicationActions, Store, ApplicationConstants, NotificationController) {

    var _applications = null;
    var _search_results = {};
    var _isFetching = false;

    var fetchApplications = function () {
      if(!_isFetching) {
        _isFetching = true;
        var applications = new ApplicationCollection();
        applications.fetch().done(function () {
          _isFetching = false;
          _applications = applications;
          ApplicationStore.emitChange();
        });
      }
    };

    var Applications = {

      search: function (query) {
        var apps = new ApplicationSearchResultCollection([], {
          query: query
        });

        return new RSVP.Promise(function (resolve, reject) {
          apps.fetch({
            success: function (coll) {
              resolve(coll);
            },
            error: function (coll, response) {
              reject(response.responseText);
            }
          });
        });
      }

    };

    var ApplicationStore = {

      get: function (appId) {
        if(!_applications) {
          fetchApplications();
        } else {
          return _applications.get(appId);
        }
      },

      getAll: function () {
        if(!_applications) {
          fetchApplications();
        } else {
          return _applications;
        }
      },

      getFeatured: function () {
        if(!_applications) {
          fetchApplications();
        } else {
          var featuredApplications = _applications.filter(function (app) {
            return app.get('featured');
          });
          return new ApplicationCollection(featuredApplications);
        }
      },

      getResults: function (query) {
        return _search_results[query];
      },

      search: function (query) {
        Applications.search(query).then(function (collection) {
          _search_results[query] = collection;
          this.emitChange();
        }.bind(this));
      },

      toggleFavorited: function(application){
        var isFavorited = application.get('isFavorited');
        var prefix = isFavorited ? " un-" : " ";
        application.set('isFavorited', !isFavorited);

        application.save().done(function(){
          var successMessage = "Image " + application.get('name') + prefix + "favorited.";
          NotificationController.success(successMessage);
          ApplicationStore.emitChange();
        }).fail(function () {
          var failureMessage = "Image " + application.get('name') + " could not be" + prefix + "favorited :( Please let Support know.";
          NotificationController.danger(failureMessage);
          var wasFavorited = application.previousAttributes().isFavorited;
          application.set('isFavorited', wasFavorited);
          ApplicationStore.emitChange();
        });
      }

    };

    Dispatcher.register(function (payload) {
      var action = payload.action;

      switch (action.actionType) {
        case ApplicationActions.constants.search:
          ApplicationStore.search(action.query);
          break;

        case ApplicationConstants.APPLICATION_TOGGLE_FAVORITED:
          ApplicationStore.toggleFavorited(action.application);
          break;

        default:
          return true;
      }

      ApplicationStore.emitChange();

      return true;
    });

    _.extend(ApplicationStore, Store);

    return ApplicationStore;
  });
