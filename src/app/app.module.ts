import { BrowserModule, Title } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { DailiesComponent } from './components/dailies/dailies.component';
import { SafePipe } from './@pipe/safe.pipe';
import { ReposComponent } from './components/repos/repos.component';
import { RepoComponent } from './components/repo/repo.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { ContactIconComponent } from './components/contact-icon/contact-icon.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    HomeComponent,
    PortfolioCardComponent,
    DailiesComponent,
    SafePipe,
    ReposComponent,
    RepoComponent,
    JobCardComponent,
    ContactIconComponent,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
