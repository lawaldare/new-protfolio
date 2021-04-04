import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Typewriter from 't-writer.js';
import { gsap, Power2, Elastic } from 'gsap/all';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('tw') typewriterElement;
  @ViewChild('mainHeader', { static: true }) mainHeader: ElementRef<HTMLSpanElement>;
  @ViewChild('buttons', { static: true }) buttons: ElementRef<HTMLDivElement>;


  constructor() { }

  ngOnInit() {
    this.initAnimation();
  }


  initAnimation() {
    gsap.from(this.mainHeader.nativeElement, { y: -500, opacity: 0, duration: 2, ease: 'back' });
    gsap.from(this.buttons.nativeElement, { y: 500, opacity: 0, duration: 2, ease: 'back' });
  }
  ngAfterViewInit(): void {

    const target = this.typewriterElement.nativeElement;

    const writer = new Typewriter(target, {
      typeColor: 'red',
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 150,
      cursorClass: 'tw-cursor'
    })

    writer
      .changeTypeColor('#EEFBFB')
      .type("a frontend developer")
      .rest(500)
      .clear()
      .changeTypeColor('#EEFBFB')
      .type("a wordpress developer")
      .rest(500)
      .clear()
      .start()

  }


}

