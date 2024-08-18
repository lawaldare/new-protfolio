import { Component, computed, inject, OnInit, signal } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";
import { ContactIconComponent } from "../contact-icon/contact-icon.component";
import { JobCardComponent } from "../job-card/job-card.component";
import { CommonModule } from "@angular/common";

export interface Job {
  title: string;
  companyName: string;
  location: string;
  date: string;
  themeColor: string;
}

export interface ContactIcon {
  link: string;
  icon: string;
}

declare const window: any;

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  standalone: true,
  imports: [CommonModule, JobCardComponent, ContactIconComponent],
})
export class AboutComponent implements OnInit {
  public jobs = signal<Job[]>([]);
  public contactIcons = signal<ContactIcon[]>([]);
  public showRemainingContents = signal(false);

  private readonly projectService = inject(ProjectService);

  public toggleState = computed(() =>
    this.showRemainingContents() ? "Hide" : "Read"
  );

  ngOnInit() {
    this.jobs.update(() => this.projectService.getJobs());
    this.contactIcons.update(() => this.projectService.getContactIcons());
  }

  toggleContent() {
    this.showRemainingContents.update((value) => !value);
  }
}
