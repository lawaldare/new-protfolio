import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterLinkActive, RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  imports: [RouterLinkActive, RouterLink, CommonModule, RouterModule],
  standalone: true,
})
export class NavbarComponent {
  constructor(private titleService: Title) {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
