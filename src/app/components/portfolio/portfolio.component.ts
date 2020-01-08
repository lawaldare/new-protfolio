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

  projects: Project[]

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

    this.getPojects();

    console.log(this.projects)

  }




  getPojects() {
    this.projects = this.projectService.getProjects();
  }

}
