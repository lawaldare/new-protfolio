import { isPlatformBrowser } from "@angular/common";
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
})
export class HomeComponent implements AfterViewInit {
  @ViewChild("tw") typewriterElement;
  @ViewChild("mainHeader", { static: true })
  mainHeader: ElementRef<HTMLSpanElement>;
  @ViewChild("buttons", { static: true }) buttons: ElementRef<HTMLDivElement>;

  private isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async ngAfterViewInit(): Promise<void> {
    if (this.isBrowser) {
      const Typewriter = (await import("t-writer.js")).default;
      const target = this.typewriterElement.nativeElement as HTMLElement;
      const writer = new Typewriter(target, {
        typeColor: "red",
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 150,
        cursorClass: "tw-cursor",
      });

      writer
        .changeTypeColor("#49ccf9")
        .type("a frontend engineer")
        .rest(500)
        .clear()
        .changeTypeColor("#00b884")
        .type("a wordpress developer")
        .rest(500)
        .clear()
        .start();
    }
  }
}
