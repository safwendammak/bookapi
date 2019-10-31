import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AdzComponent} from './adz.component';
import {SearchComponent} from './search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {DialogbodyComponent} from './result/dialogbody/dialogbody.component';
import {ResultComponent} from './result/result.component';
import {MaterialDesignModule} from './shared/material-design.module';
import {FilterPipe} from './filter.pipe';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AdzComponent,
    SearchComponent,
    ResultComponent,
    DialogbodyComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialDesignModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  ],
  entryComponents: [ResultComponent, DialogbodyComponent],

  providers: [],
  bootstrap: [AdzComponent]
})
export class AppModule {
}
