// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const protectedResourceMap: [string, string[]][] = [
  ['https://localhost:44372/api/values', ['<consentScope>']]
]

export const environment = {
  production: false,
  api: 'https://localhost:44372/api',
  azureAd: {
    clientID: '<clientID>',
    authority: 'https://login.microsoftonline.com/<TenantId>',
    redirectUri: 'http://localhost:4200/',
    postLogoutRedirectUri: 'http://localhost:4200/',
    consentScopes: ['user.read', 'openid', 'profile', '<consentScope>'],
    protectedResourceMap: protectedResourceMap
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
