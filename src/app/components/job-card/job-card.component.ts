import {
  Component,
  input,
  OnChanges,
  signal,
  SimpleChanges,
} from "@angular/core";
import { Job } from "../about/about.component";
import { NgStyle } from "@angular/common";
import moment from "moment";

@Component({
  selector: "app-job-card",
  templateUrl: "./job-card.component.html",
  styleUrls: ["./job-card.component.scss"],
  imports: [NgStyle],
})
export class JobCardComponent implements OnChanges {
  public readonly job = input.required<Job>();
  public timeSummary = signal<string>("");

  ngOnChanges(changes: SimpleChanges): void {
    const job = changes["job"].currentValue;
    const startDate = new Date(job.dateStart);
    const endDate = job.dateEnd ? new Date(job.dateEnd) : new Date();
    const totalMonths = moment(endDate).diff(moment(startDate), "months");
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const timeSummary =
      years > 0 && months > 0
        ? `${years} years ${months} months`
        : years > 0 && months === 0
          ? `${years} years`
          : `${months} months`;
    this.timeSummary.set(timeSummary);
  }
}
