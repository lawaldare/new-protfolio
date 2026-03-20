import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  inject,
} from "@angular/core";
import { Repo } from "src/app/models/repo.model";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-repo",
  templateUrl: "./repo.component.html",
  styleUrls: ["./repo.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoComponent implements OnInit {
  public readonly repo = input.required<Repo>();

  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit() {
    this.titleService.setTitle("Repo | Dare Lawal");
    this.meta.updateTag({
      name: "description",
      content:
        "Frontend Developer at EMBL-EBI building Angular scientific applications.",
    });
  }
}
