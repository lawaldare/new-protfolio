import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // stickify: boolean;

  constructor(private titleService: Title) { }


  // @HostListener('window:scroll', ['$event'])
  // onScroll(): void {
  //   if (window.pageYOffset >= 120) {
  //     this.stickify = true;
  //   } else if (window.pageYOffset === 0) {
  //     this.stickify = false;
  //   }
  // }

  ngOnInit() {
  }




  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
