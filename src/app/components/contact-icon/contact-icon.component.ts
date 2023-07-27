import { Component, Input } from '@angular/core';
import { ContactIcon } from '../about/about.component';

@Component({
  selector: 'app-contact-icon',
  templateUrl: './contact-icon.component.html',
  styleUrls: ['./contact-icon.component.scss'],
})
export class ContactIconComponent {
  @Input() icon: ContactIcon;
}
