import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private titleService: Title) {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
