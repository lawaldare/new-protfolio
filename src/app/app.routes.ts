import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./components/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "about",
    loadComponent: () =>
      import("./components/about/about.component").then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: "projects",
    loadComponent: () =>
      import("./components/portfolio/portfolio.component").then(
        (m) => m.PortfolioComponent
      ),
  },
  {
    path: "repos",
    loadComponent: () =>
      import("./components/repos/repos.component").then(
        (m) => m.ReposComponent
      ),
  },
  {
    path: "dailies",
    loadComponent: () =>
      import("./components/dailies/dailies.component").then(
        (m) => m.DailiesComponent
      ),
  },
  {
    path: "**",
    loadComponent: () =>
      import("./components/home/home.component").then((m) => m.HomeComponent),
  },
];
