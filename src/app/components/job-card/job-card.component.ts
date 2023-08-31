import { Component, Input } from '@angular/core';
import { Job } from '../about/about.component';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-job-card',
    templateUrl: './job-card.component.html',
    styleUrls: ['./job-card.component.scss'],
    standalone: true,
    imports: [NgStyle],
})
export class JobCardComponent {
  @Input() job: Job;
}
