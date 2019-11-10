import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RandomTweetComponent } from './random-tweet/random-tweet.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TweetService } from './services/tweet.service'
import { HttpClientModule } from '@angular/common/http';







const appRoutes: Routes = [
  { path: 'home', component: LandingPageComponent},
  { path: 'search', component: SearchComponent},
  { path: 'random-tweets', component: RandomTweetComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RandomTweetComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})

export class AppModule  {}

