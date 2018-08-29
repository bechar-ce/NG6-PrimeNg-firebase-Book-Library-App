// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC5nmIBFmy8r2VRI8rWQUrFNBzVnrniDmM',
    authDomain: 'angular-6-firebase-demo.firebaseapp.com',
    databaseURL: 'https://angular-6-firebase-demo.firebaseio.com',
    projectId: 'angular-6-firebase-demo',
    storageBucket: '',
    messagingSenderId: '396550778833'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
