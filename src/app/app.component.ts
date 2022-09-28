import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('emailInput') emailInput: ElementRef;

  ngAfterViewInit() {
    console.log(this.emailInput);
  }

  onViewUsernameInput(usernameInput: HTMLInputElement) {
    console.log(usernameInput.value);
  }

  onViewEmailInput() {
    console.log(this.emailInput.nativeElement.value);
  }
}
