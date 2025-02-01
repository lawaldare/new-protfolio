import { CommonModule } from "@angular/common";
import { Component, ElementRef, ViewChild, viewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import ollama from "ollama";

@Component({
  selector: "app-chat",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./chat.component.html",
  styleUrl: "./chat.component.scss",
})
export class ChatComponent {
  @ViewChild("response", { read: ElementRef }) response: ElementRef;

  public prompt = "";

  public async ask() {
    console.log(this.prompt);
    this.response.nativeElement.textContent = "Fuck You!";
    let responseText = "";
    try {
      const streamResponse = await ollama.chat({
        model: "deepseek-r1:latest",
        messages: [{ role: "user", content: this.prompt }],
        stream: true,
      });

      for await (const part of streamResponse) {
        responseText += part.message.content;
        this.response.nativeElement.textContent = responseText;
      }
    } catch (error) {}
  }
}
