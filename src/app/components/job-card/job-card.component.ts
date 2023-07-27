import { Component, Input } from '@angular/core';
import { Job } from '../about/about.component';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent {
  @Input() job: Job;
}
