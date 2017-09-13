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

    // $translateProvider.registerAvailableLanguageKeys(['en', 'es'], {
    //   'en-US': 'en',
    //   'es-US': 'es'
    // });
    // $translateProvider.determinePreferredLanguage();

    $translateProvider
      .preferredLanguage('en')
      .useStaticFilesLoader({
        prefix: '/app/i18n/',
        suffix: '.json'
      })
      .useSanitizeValueStrategy('sanitize');

    console.log(navigator.language);

    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
  }

})();
