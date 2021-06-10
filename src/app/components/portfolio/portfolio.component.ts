import { ProjectService } from './../../services/project.service';
import { db } from './../../../db/db';
import { Project } from './../../project.model';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', '../portfolio-card/portfolio-card.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project[];
  projectFiltered: Project[];

  constructor(private projectService: ProjectService, private titleService: Title) { }

  ngOnInit() {

    this.getProjects();

    this.projectFiltered = this.projects;


    this.titleService.setTitle('Portfolio | Dare Lawal');


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

  wordpress(): void {
    this.projectFiltered = this.projects.filter(p => p.stack === 'wordpress');
  }

  animation(): void {
    this.projectFiltered = this.projects.filter(p => p.stack === 'animation');
  }

}
