import { Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Router, NavigationEnd, RouterOutlet } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavbarComponent } from "./components/navbar/navbar.component";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [NavbarComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  title = "portfolio";
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const navEndEvents = this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
      );

      navEndEvents.subscribe((event: NavigationEnd) => {
        if (window.gtag) {
          window.gtag("config", "UA-162850535-1", {
            page_path: event.urlAfterRedirects,
          });
        }
      });
    }
  }

  async ngOnInit(): Promise<void> {
    if (this.isBrowser) {
      const AOS = await import("aos");
      AOS.init();
    }
  }
}
