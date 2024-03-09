import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterLinkActive, RouterLink } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
})
export class NavbarComponent {
  public isMatchLive = true;
  public isBoxingLive = false;
  constructor(private titleService: Title) {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
