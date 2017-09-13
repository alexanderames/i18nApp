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
        "Created_By": "Created by John Papa",
        "First_Name": "First Name",
        "Last_Name": "Last Name",
        "Age": "Age",
        "Location": "Location",
        "Messages": "Messages",
        "People": "People",
        "Splash_Msg": "Loading . . .",
        "Message_Count": "{messageCount, plural, =0{No Messages} one{1 Message} other{# Messages}}",
        "Conference_Date": "May 18 - 19, 2015",
        "Dashboard": "Dashboard",
        "Admin": "Admin",
        "Greeting": "{{name}} is logged in",
        "Admin_Message": "The quick brown fox jumped over the lazy dog",
        "Activation_Dash": "Activated Dashboard View",
        "Activation_Admin": "Activated Admin View"
    };

    var spanish = {
        "Title": "Internacionalización",
        "Language": "Idioma",
        "Languages": {
            "English": "Inglés",
            "Spanish": "Español",
            "French": "Francés"
        },
        "Created_By": "Creado por Juan Padre",
        "First_Name": "Nombre De Pila",
        "Last_Name": "Apellido",
        "Age": "Edad",
        "Location": "Ubicación",
        "Messages": "Mensajes",
        "People": "Gente",
        "Splash_Msg": "Cargando . . .",
        "Message_Count": "{messageCount, plural, =0{No Hay Mensajes} one{1 Mensaje} other{# Mensajes}}",
        "Conference_Date": "18 a 19 mayo, 2015",
        "Dashboard": "Tablero",
        "Admin": "Administración",
        "Greeting": "{{name}} se registra en",
        "Admin_Message": "El zorro marrón rápido saltó sobre el perro perezoso",
        "Activation_Dash": "Activado Tablero Ver",
        "Activation_Admin": "Activado Administración Ver"
    };

    $translateProvider.translations('en', english);
    $translateProvider.translations('es', spanish);
    $translateProvider.registerAvailableLanguageKeys(['en', 'es'], {
      'en-US': 'en',
      'es-US': 'es'
    });
    $translateProvider.determinePreferredLanguage();
    console.log(navigator.language);
    // $translateProvider.preferredLanguage('es'); <- hardcodes preferred language

    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
  }

})();
