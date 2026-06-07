import { isPlatformBrowser } from "@angular/common";
import { elements, projectsDB } from "../../../db/dailies";
import { DailyProject } from "./../../models/dailyProject.model";
import { Component, Inject, PLATFORM_ID, signal, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-dailies",
  templateUrl: "./dailies.component.html",
  styleUrls: ["./dailies.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class DailiesComponent {
  public projects = signal<DailyProject[]>(projectsDB);
  public elements = signal<DailyProject[]>(elements);
  private isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  goToProjectWebsite(str: string) {
    if (this.isBrowser) {
      if (window.innerWidth > 1400) {
        window.open(str);
      } else {
        alert("Please view this project on a desktop");
      }
    }
  }

  goToRepoLink(str: string) {
    if (this.isBrowser) {
      window.open(str);
    }
  }

  goToElement(str: string) {
    if (this.isBrowser) {
      window.open(str);
    }
  }
}
