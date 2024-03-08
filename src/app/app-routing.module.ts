import { ReposComponent } from "./components/repos/repos.component";
import { DailiesComponent } from "./components/dailies/dailies.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MatchesComponent } from "./components/matches/matches.component";
import { BoxingComponent } from "./components/boxing/boxing.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "dailies", component: DailiesComponent },
  { path: "repos", component: ReposComponent },
  { path: "matches", component: MatchesComponent },
  { path: "boxing", component: BoxingComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
