import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap, Power2, Elastic } from 'gsap/all';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  @ViewChild('renmoney', { static: true }) renmoney: ElementRef<HTMLDivElement>;
  @ViewChild('nxt', { static: true }) nxt: ElementRef<HTMLDivElement>;
  @ViewChild('prs', { static: true }) prs: ElementRef<HTMLDivElement>;
  @ViewChild('ums', { static: true }) ums: ElementRef<HTMLDivElement>;
  @ViewChild('terragon', { static: true }) terragon: ElementRef<HTMLDivElement>;
  @ViewChild('workExperience', { static: true }) workExperience: ElementRef<HTMLHtmlElement>;
  @ViewChild('mainHeader', { static: true }) mainHeader: ElementRef<HTMLHtmlElement>;
  @ViewChild('subHeader', { static: true }) subHeader: ElementRef<HTMLHtmlElement>;






  constructor() { }

  ngOnInit() {
    this.initAnimation()
  }


  initAnimation() {

    const duke = gsap.timeline({ defaults: { opacity: 0, ease: "back", duration: 1 } });

    duke.from(this.workExperience.nativeElement, { scale: 2 })
      .from(this.renmoney.nativeElement, { x: -300, ease: 'back' })
      .from(this.nxt.nativeElement, { x: 300, ease: 'back' })
      .from(this.terragon.nativeElement, { x: -300, ease: 'back' })
      .from(this.ums.nativeElement, { x: 300, ease: 'back' })
      .from(this.prs.nativeElement, { x: -300, ease: 'back' })

    const header = gsap.timeline({ defaults: { opacity: 0, ease: "back", duration: 1 } });

    header.from(this.mainHeader.nativeElement, { scale: 2 })
      .from(this.subHeader.nativeElement, { y: -500, duration: 3 })
      .from('svg', { scale: 1, stagger: 0.5, transformOrigin: '50% 50%' }, '-=0.5')



  }

}
