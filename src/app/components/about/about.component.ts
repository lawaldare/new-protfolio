import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

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

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  jobs: Job[];
  contactIcons: ContactIcon[];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.jobs = this.projectService.getJobs();
    this.contactIcons = this.projectService.getContactIcons();
  }
}
