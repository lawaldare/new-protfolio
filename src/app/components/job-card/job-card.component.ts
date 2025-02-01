import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Job } from "../about/about.component";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-job-card",
  templateUrl: "./job-card.component.html",
  styleUrls: ["./job-card.component.scss"],
  imports: [NgStyle],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobCardComponent {
  public readonly job = input.required<Job>();
}
