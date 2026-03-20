import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  {
    path: "",
    renderMode: RenderMode.Server,
  },
  // {
  //   path: "about",
  //   renderMode: RenderMode.Server,
  // },
  // {
  //   path: "projects",
  //   renderMode: RenderMode.Server,
  // },
  // {
  //   path: "repos",
  //   renderMode: RenderMode.Server,
  // },
  // {
  //   path: "dailies",
  //   renderMode: RenderMode.Server,
  // },
];
