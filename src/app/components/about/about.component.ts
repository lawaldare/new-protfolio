import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ProjectService } from 'src/app/services/project.service';

// gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

  // @ViewChild('renmoney', { static: true }) renmoney: ElementRef<HTMLDivElement>;
  // @ViewChild('nxt', { static: true }) nxt: ElementRef<HTMLDivElement>;
  // @ViewChild('prs', { static: true }) prs: ElementRef<HTMLDivElement>;
  // @ViewChild('mds', { static: true }) mds: ElementRef<HTMLDivElement>;
  // @ViewChild('vizbay', { static: true }) vizbay: ElementRef<HTMLDivElement>;
  // @ViewChild('terragon', { static: true }) terragon: ElementRef<HTMLDivElement>;
  // @ViewChild('workExperience', { static: true }) workExperience: ElementRef<HTMLHtmlElement>;
  // @ViewChild('mainHeader', { static: true }) mainHeader: ElementRef<HTMLHtmlElement>;
  // @ViewChild('subHeader', { static: true }) subHeader: ElementRef<HTMLHtmlElement>;
  // @ViewChild('contact', { static: true }) contact: ElementRef<HTMLDivElement>;
  // @ViewChild('icons', { static: true }) icons: ElementRef<HTMLDivElement>;
  // @ViewChild('devIcons', { static: true }) devIcons: ElementRef<HTMLDivElement>;
  // @ViewChild('contactHeader', { static: true }) contactHeader: ElementRef<HTMLHtmlElement>;


  // modalRef: BsModalRef;

  jobs: {
    title: string;
    companyName: string;
    location: string;
    date: string;
    themeColor: string;
  }[];



  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    // this.initAnimation()
    this.jobs = this.projectService.getJobs();
  }


  initAnimation() {

    // const duke = gsap.timeline({ defaults: { opacity: 0, ease: "back", duration: 1 } });

    // duke.from(this.workExperience.nativeElement, { scale: 2 })
    //   .from(this.renmoney.nativeElement, { x: -300, ease: 'back' })
    //   .from(this.nxt.nativeElement, { x: 300, ease: 'back' })
    //   .from(this.mds.nativeElement, { x: -300, ease: 'back' })
    //   .from(this.terragon.nativeElement, { x: 300, ease: 'back' })
    //   .from(this.prs.nativeElement, { x: -300, ease: 'back' })


    // const header = gsap.timeline({ defaults: { opacity: 0, ease: "back", duration: 1 } });

    // header.from(this.mainHeader.nativeElement, { scale: 2 })
    //   .from(this.subHeader.nativeElement, { y: -500, duration: 3 })
    //   .from(this.devIcons.nativeElement.childNodes, { scale: 1, stagger: 0.2, transformOrigin: '50% 50%' }, '-=0.5')


    // const contactAnimation = gsap.timeline({ defaults: { opacity: 0, ease: 'back', duration: 1 }, scrollTrigger: { trigger: this.contact.nativeElement, toggleActions: 'restart' } });

    // contactAnimation.from(this.contactHeader.nativeElement, { xPercent: -100, duration: 2 }).from(this.icons.nativeElement.childNodes, { stagger: 0.1, y: 100 });

  }

  // openModal1(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { class: "modal-lg" });
  // }
  // openModal2(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { class: "modal-lg" });
  // }
  // openModal3(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { class: "modal-lg" });
  // }
  // openModal4(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { class: "modal-lg" });
  // }
  // openModal5(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { class: "modal-lg" });
  // }

}
