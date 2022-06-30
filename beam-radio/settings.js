angular.module('beamng.apps')
.directive('Beam-Radio', ['StreamsManager', function (StreamsManager) {
  return {
    template:  '[Some HTML Content]',
    replace: true,
    restrict: 'EA',
    // [1] we "require" the bngApp parent controller
    require: '^bngApp',
    // [2] the controller is available as 4th argument of the link function
    link: function (scope, element, attrs, ctrl) {
      var streamsList = ['sensors'];

      StreamsManager.add(streamsList);

      // [3] Use a variable to keep the settings
      var appSettings = null;

      // When DOM is ready and controllers are set up, get the stored settings.
      element.ready(function () {
        // [4] Call the getSettings() function of the controller
        ctrl.getSettings()
          .then(function (settings) {
            appSettings = settings;
          })
      });

      scope.$on('$destroy', function () {
        StreamsManager.remove(streamsList);
        // [5] Optionally save the (possibly modified) app settings when done
        ctrl.saveSettings(appSettings);
      });

      scope.$on('streamsUpdate', function (event, streams) {
        /* Some code that uses the streams' values */
      });
    }
  };
}])