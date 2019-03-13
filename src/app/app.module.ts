import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ScoreTableComponent } from './components/score-table/score-table.component';
import { RulesComponent } from './components/rules/rules.component';

import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RegisterPlayerComponent } from './components/register-player/register-player.component';
import { EnterScoreComponent } from './components/enter-score/enter-score.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScoreTableComponent,
    RulesComponent,
    HeaderComponent,
    RegisterPlayerComponent,
    EnterScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
