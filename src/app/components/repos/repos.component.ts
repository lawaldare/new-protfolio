import { Component, OnInit } from "@angular/core";
import { Repo } from "../../models/repo.model";
import { RepoComponent } from "../repo/repo.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-repos",
  templateUrl: "./repos.component.html",
  styleUrls: ["./repos.component.scss"],
  standalone: true,
  imports: [CommonModule, RepoComponent],
})
export class ReposComponent implements OnInit {
  repos: Repo[] = [
    {
      link: "https://github.com/lawaldare/Expense-Tracker-Widget-Angular-",
      name: "Expense Tracker (Angular Element)",
    },
    {
      link: "https://github.com/lawaldare/bitcoin-calc-widget-angular",
      name: "Bitcoin Calculator (Angular Element)",
    },
    {
      link: "https://github.com/lawaldare/stencil-weather-app",
      name: "Weather App (Stencil)",
    },
    {
      link: "https://github.com/lawaldare/cc-widget",
      name: "Credit Card (Angular Element)",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
