import { ProjectService } from "./../../services/project.service";
import { Project } from "./../../project.model";
import { Component, OnInit, signal } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { PortfolioCardComponent } from "../portfolio-card/portfolio-card.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-portfolio",
    templateUrl: "./portfolio.component.html",
    styleUrls: [
        "./portfolio.component.scss",
        "../portfolio-card/portfolio-card.component.scss",
    ],
    imports: [CommonModule, PortfolioCardComponent]
})
export class PortfolioComponent implements OnInit {
  public projects = signal<Project[]>([]);
  public projectFiltered = signal<Project[]>([]);

  constructor(
    private projectService: ProjectService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.getProjects();

    this.titleService.setTitle("Portfolio | Dare Lawal");
  }

  getProjects() {
    this.projects.update(() => this.projectService.getProjects());
    this.projectFiltered.update(() => this.projects());
  }

  js(): void {
    this.projectFiltered.update(() =>
      this.projects().filter((p) => p.stack === "javascript")
    );
  }

  angular(): void {
    this.projectFiltered.update(() =>
      this.projects().filter((p) => p.stack === "angular")
    );
  }

  wordpress(): void {
    this.projectFiltered.update(() =>
      this.projects().filter((p) => p.stack === "wordpress")
    );
  }

  animation(): void {
    this.projectFiltered.update(() =>
      this.projects().filter((p) => p.stack === "animation")
    );
  }
}
