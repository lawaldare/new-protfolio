import { projectsDB } from './../../../db/dailies';
import { DailyProject } from './../../models/dailyProject.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.scss']
})
export class DailiesComponent implements OnInit {

  link: string;

  projects: DailyProject[] = projectsDB;

  constructor() { }

  ngOnInit(): void {
  }


  goToProjectWebsite(str) {
    window.open(str);
  }

  goToRepoLink(str) {
    window.open(str);
  }

}
