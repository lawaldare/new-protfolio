import { Component, OnInit } from "@angular/core";
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
  jobs: Job[];
  contactIcons: ContactIcon[];
  showRemainingContents: boolean = false;
  toggleState = "Read";

  supportApplePay = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.jobs = this.projectService.getJobs();
    this.contactIcons = this.projectService.getContactIcons();

    if (window.ApplePaySession) {
      this.supportApplePay = true;
    }
  }

  toggleContent() {
    this.showRemainingContents = !this.showRemainingContents;
    this.toggleState = this.showRemainingContents ? "Hide" : "Read";
  }
}
