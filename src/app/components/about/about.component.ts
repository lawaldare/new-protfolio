import {
  Component,
  computed,
  inject,
  OnInit,
  signal,
  ChangeDetectionStrategy,
} from "@angular/core";
import { ContactIconComponent } from "../contact-icon/contact-icon.component";
import { JobCardComponent } from "../job-card/job-card.component";
import { Title, Meta } from "@angular/platform-browser";
import { papers } from "../../../db/db";
import { ProjectService } from "../../services/project.service";

export interface Job {
  title: string;
  companyName: string;
  location: string;
  date: string;
  themeColor: string;
}

export interface ContactIcon {
  link: string;
  icon: string;
}

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  imports: [JobCardComponent, ContactIconComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class AboutComponent implements OnInit {
  public jobs = signal<Job[]>([]);
  public contactIcons = signal<ContactIcon[]>([]);
  public showRemainingContents = signal(false);
  public papers = signal<{ title: string; link: string }[]>(papers);

  private readonly projectService = inject(ProjectService);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);

  public toggleState = computed(() =>
    this.showRemainingContents() ? "Hide" : "Read",
  );

  ngOnInit() {
    this.jobs.update(() => this.projectService.getJobs());
    this.contactIcons.update(() => this.projectService.getContactIcons());
    this.titleService.setTitle("About | Dare Lawal");
    this.meta.updateTag({
      name: "description",
      content:
        "Frontend Developer at EMBL-EBI building Angular scientific applications.",
    });
  }

  toggleContent() {
    this.showRemainingContents.update((value) => !value);
  }
}
