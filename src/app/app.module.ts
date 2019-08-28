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
import { ParallaxDirective } from './parallax.directive';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { PartnerComponent } from './partner/partner.component';

@NgModule({
  declarations: [
    AppComponent,
    AbouUsComponent,
    HomeComponent,
    NavbarComponent,
    NavHeadComponent,
    GameInfoComponent,
    ParallaxDirective,
    FooterComponent,
    PartnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  exports: [MatToolbarModule,MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
