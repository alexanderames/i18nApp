(function() {
  'use strict';

  var core = angular.module('app.core');

  core.config(toastrConfig);

  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  var config = {
    appErrorPrefix: '[hotTowelApp Error] ',
    appTitle: 'hotTowelApp'
  };

  core.value('config', config);

  core.config(configure);

  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider', '$translateProvider'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider, $translateProvider) {

    var english = {
      "Title": "Internationalization",
      "Language": "Language",
      "Languages": {
        "English": "English",
        "Spanish": "Spanish",
        "French": "French"
      },
      "Created_By": "Created by Alexander Ames",
      "First_Name": "First Name",
      "Last_Name": "Last Name",
      "Age": "Age",
      "Location": "Location",
      "Messages": "Messages",
      "People": "People",
      "Splash_Msg": "Loading...",
      "Message_Count": "{messageCount, plural, =0{No Messages} one{1 Message} other{# Messages}",
      "Conference_Date": "May 18 - 19, 2015",
      "Dashboard": "Dashboard",
      "Admin": "Admin",
      "Greeting": "{{name}} is logged in",
      "Admin_Message": "What up playa",
      "Activation_Dash": "Activated Dashboard View",
      "Activation_Admin": "Activated Admin View"
    };

    $translateProvider.translations('en', english);
    $translateProvider.preferredLanguage('en');

    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
  }

})();
