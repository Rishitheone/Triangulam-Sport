import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbouUsComponent } from './abou-us/abou-us.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavHeadComponent } from './nav-head/nav-head.component';
import { GameInfoComponent } from './game-info/game-info.component';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { OrganisationComponent } from './organisation/organisation.component';
import {MatMenuModule} from '@angular/material/menu';
import { AdvisoryBoardComponent } from './advisory-board/advisory-board.component';
import { DirectorsComponent } from './directors/directors.component';
import { EminentComponent } from './Investors/eminent/eminent.component';
import { NoticesComponent } from './Investors/notices/notices.component';
import { InvestorsContactComponent } from './Investors/investors-contact/investors-contact.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { PartnersComponent } from './partners/partners.component';
import { BecomePartnerComponent } from './become-partner/become-partner.component';
import {MatButtonModule} from '@angular/material/button';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MissionComponent } from './mission/mission.component';
import { ObjectiveComponent } from './objective/objective.component';
import { ScolledFooterComponent } from './scolled-footer/scolled-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    AbouUsComponent,
    HomeComponent,
    NavbarComponent,
    NavHeadComponent,
    GameInfoComponent,
    FooterComponent,
    OrganisationComponent,
    AdvisoryBoardComponent,
    DirectorsComponent,
    EminentComponent,
    NoticesComponent,
    InvestorsContactComponent,

    DirectorsComponent,
    PartnersComponent,
    BecomePartnerComponent,
    ContactUsComponent,
    DirectorsComponent,
    MissionComponent,
    ObjectiveComponent,
    ScolledFooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSortModule,MatPaginatorModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,MatIconModule,MatTableModule,MatInputModule,MatFormFieldModule,MatSelectModule,
    MatButtonModule
  ],
  exports: [MatToolbarModule,MatCardModule,MatListModule,MatIconModule,
    MatTableModule,MatSortModule,MatPaginatorModule,MatInputModule,MatFormFieldModule,MatSelectModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
