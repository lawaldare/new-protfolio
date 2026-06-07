import {
  Component,
  inject,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from "@angular/core";
import { Repo } from "../../models/repo.model";
import { RepoComponent } from "../repo/repo.component";
import { isPlatformBrowser } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-repos",
  templateUrl: "./repos.component.html",
  styleUrls: ["./repos.component.scss"],
  imports: [RepoComponent],
})
export class ReposComponent implements OnInit {
  private isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  public readonly repos = signal<Repo[]>([
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
  ]);

  public readonly projects = signal([
    {
      name: "Countries",
      link: "https://countries-graphql-rho.vercel.app/",
      repo: "https://github.com/lawaldare/countries-graphql",
    },
    {
      name: "Rick And Morty",
      link: "https://rickandmorty-graphql-mocha.vercel.app/",
      repo: "https://github.com/lawaldare/rickandmorty-graphql",
    },
  ]);

  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit() {
    this.titleService.setTitle("Repos | Dare Lawal");
    this.meta.updateTag({
      name: "description",
      content:
        "Frontend Developer at EMBL-EBI building Angular scientific applications.",
    });
  }

  public goToProjectWebsite(str) {
    if (this.isBrowser) {
      window.open(str);
    }
  }

  public goToRepoLink(str) {
    if (this.isBrowser) {
      window.open(str);
    }
  }
}
