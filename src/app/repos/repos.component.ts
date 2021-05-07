import { Component, OnInit } from '@angular/core';
import { Repo } from '../models/repo.model';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  repos: Repo[] = [
    {
      link: 'https://github.com/lawaldare/Expense-Tracker-Widget-Angular-',
      name: 'Expense Tracker Angular Widget'
    },
    {
      link: 'https://github.com/lawaldare/bitcoin-calc-widget-angular',
      name: 'Bitcoin Calculator Angular Widget'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
