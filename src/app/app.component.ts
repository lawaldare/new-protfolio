import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { slideInAnimation } from './app-animation';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

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


  // public setTitle(newTitle: string) {
  //   this.titleService.setTitle(newTitle);
  // }
}
