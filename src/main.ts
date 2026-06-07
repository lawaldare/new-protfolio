import { enableProdMode, provideZoneChangeDetection } from "@angular/core";

import { environment } from "./environments/environment";
import { bootstrapApplication, provideClientHydration, withEventReplay, withNoIncrementalHydration } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {...appConfig, providers: [provideZoneChangeDetection(), ...appConfig.providers, provideClientHydration(withEventReplay(), withNoIncrementalHydration())]}).catch((err) =>
  console.error(err)
);
