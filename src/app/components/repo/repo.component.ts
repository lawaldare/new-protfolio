import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Repo } from "src/app/models/repo.model";

@Component({
  selector: "app-repo",
  templateUrl: "./repo.component.html",
  styleUrls: ["./repo.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoComponent {
  public readonly repo = input.required<Repo>();
}
