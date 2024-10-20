import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { ContactIcon } from "../about/about.component";

@Component({
  selector: "app-contact-icon",
  templateUrl: "./contact-icon.component.html",
  styleUrls: ["./contact-icon.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactIconComponent {
  public readonly icon = input.required<ContactIcon>();
}
