import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { slideInAnimation } from './app-animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit() {
    AOS.init();
  }
}
