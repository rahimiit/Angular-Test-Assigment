import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'] // Use styleUrls instead of styleUrl
})
export class EventComponent {
  showAlert() {
    alert('Button clicked!');
  }
}
