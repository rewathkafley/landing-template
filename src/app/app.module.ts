import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsListComponent } from './news-list/news-list.component';
import { ScullyLibModule } from '@scullyio/ng-lib-v8';
import { AppRoutingModule } from './app-routing.module';

export function initialize() {

}


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    AboutUsComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScullyLibModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
