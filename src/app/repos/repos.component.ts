import { Component, OnInit } from '@angular/core';
import { Repo } from '../models/repo.model';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  repos: Repo[] = [
    {
      link: 'https://github.com/lawaldare/Expense-Tracker-Widget-Angular-',
      name: 'Expense Tracker (Angular Element)',
    },
    {
      link: 'https://github.com/lawaldare/bitcoin-calc-widget-angular',
      name: 'Bitcoin Calculator (Angular Element)',
    },
    {
      link: 'https://github.com/lawaldare/stencil-weather-app',
      name: 'Weather App (Stencil)',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
