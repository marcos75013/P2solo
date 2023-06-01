import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DailyMoodComponent } from './daily-mood/daily-mood.component';
import { DailyFactComponent } from './daily-fact/daily-fact.component';
import { MoodOneComponent } from './mood-one/mood-one.component';
import { MoodTwoComponent } from './mood-two/mood-two.component';
import { MoodThreeComponent } from './mood-three/mood-three.component';
import { MoodFourComponent } from './mood-four/mood-four.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DailyMoodComponent,
    DailyFactComponent,
    MoodOneComponent,
    MoodTwoComponent,
    MoodThreeComponent,
    MoodFourComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
