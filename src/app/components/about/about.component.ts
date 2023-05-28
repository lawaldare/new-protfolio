import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  jobs: {
    title: string;
    companyName: string;
    location: string;
    date: string;
    themeColor: string;
  }[];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.jobs = this.projectService.getJobs();
  }
}
