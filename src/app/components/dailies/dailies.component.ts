import { projectsDB } from './../../../db/dailies';
import { DailyProject } from './../../models/dailyProject.model';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.scss'],
})
export class DailiesComponent implements OnInit {
  link: string;
  innerWidth!: number;

  projects: DailyProject[] = projectsDB;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor() {}

  ngOnInit(): void {}

  goToProjectWebsite(str) {
    if (this.innerWidth > 1400) {
      window.open(str);
    } else {
      alert('Please view this project on a desktop');
    }
  }

  goToRepoLink(str) {
    console.log(str);
    window.open(str);
  }
}
