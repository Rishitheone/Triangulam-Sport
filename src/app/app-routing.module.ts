import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbouUsComponent } from './abou-us/abou-us.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { HomeComponent } from './home/home.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { AdvisoryBoardComponent } from './advisory-board/advisory-board.component';
import { DirectorsComponent } from './directors/directors.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'directors',component:DirectorsComponent},
  {path:'organisation',component:OrganisationComponent},
  {path:'AdvisoryBoard', component:AdvisoryBoardComponent},
  {path:'about',component:AbouUsComponent},
  {path:'game-info',component:GameInfoComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
