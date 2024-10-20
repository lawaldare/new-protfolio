import { Project } from "./../../project.model";
import { Component, input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-portfolio-card",
  templateUrl: "./portfolio-card.component.html",
  styleUrls: ["./portfolio-card.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCardComponent {
  public readonly portfolio = input.required<Project>();
}
