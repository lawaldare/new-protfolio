import { elements, projectsDB } from './../../../db/dailies';
import { DailyProject } from './../../models/dailyProject.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.scss'],
})
export class DailiesComponent {
  projects: DailyProject[] = projectsDB;
  elements: DailyProject[] = elements;

  goToProjectWebsite(str) {
    if (window.innerWidth > 1400) {
      window.open(str);
    } else {
      alert('Please view this project on a desktop');
    }
  }

  goToRepoLink(str) {
    window.open(str);
  }

  goToElement(str) {
    window.open(str);
  }
}
