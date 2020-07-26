import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { slideInAnimation } from './app-animation';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(router: Router) {
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-162850535-1', {
        'page_path': event.urlAfterRedirects
      });
    })
  }

  ngOnInit() {
    AOS.init();
  }
}
