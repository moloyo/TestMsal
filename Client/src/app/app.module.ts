import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot({
      clientID: environment.azureAd.clientID,
      authority: environment.azureAd.authority,
      validateAuthority: true,
      redirectUri: environment.azureAd.redirectUri,
      cacheLocation: 'localStorage',
      postLogoutRedirectUri: environment.azureAd.postLogoutRedirectUri,
      consentScopes: environment.azureAd.consentScopes,
      protectedResourceMap: environment.azureAd.protectedResourceMap,
      correlationId: '1234'
    }),
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
