import { Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { DailiesComponent } from "./components/dailies/dailies.component";
import { HomeComponent } from "./components/home/home.component";
import { LiveComponent } from "./components/live/live.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ReposComponent } from "./components/repos/repos.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "dailies", component: DailiesComponent },
  { path: "repos", component: ReposComponent },
  { path: "live", component: LiveComponent },
  { path: "**", component: HomeComponent },
];
