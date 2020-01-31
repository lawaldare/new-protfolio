import { ProjectService } from './../../services/project.service';
import { db } from './../../../db/db';
import { Project } from './../../project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', '../portfolio-card/portfolio-card.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project[];
  projectFiltered: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

    this.getProjects();

    this.projectFiltered = this.projects;

    console.log(this.projects)

  }




  getProjects() {
    this.projects = this.projectService.getProjects();
    this.projectFiltered = this.projects;
  }

  js(): void {
    this.projectFiltered = this.projects.filter(p => p.stack === 'javascript');
  }

  angular(): void {
    this.projectFiltered = this.projects.filter(p => p.stack === 'angular');
  }

}
