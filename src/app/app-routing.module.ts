import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from './components/rules/rules.component';
import { HomeComponent } from './components/home/home.component';
import { ScoreTableComponent } from './components/score-table/score-table.component';
import { RegisterPlayerComponent } from './components/register-player/register-player.component';
import { EnterScoreComponent } from './components/enter-score/enter-score.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-component', component: HomeComponent },
  { path: 'rules-component', component: RulesComponent },
  { path: 'score-table-component', component: ScoreTableComponent },
  { path: 'register-player-component', component: RegisterPlayerComponent },
  { path: 'enter-score-component', component: EnterScoreComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ]
  ],
  declarations: []
})
export class AppRoutingModule { }
