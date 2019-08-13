import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbouUsComponent } from './abou-us/abou-us.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { HomeComponent } from './home/home.component';
import { OrganisationComponent } from './organisation/organisation.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'organisation',component:OrganisationComponent},
  {path:'about',component:AbouUsComponent},
  {path:'game-info',component:GameInfoComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
