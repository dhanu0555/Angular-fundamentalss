import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {
  selectedOption = '';

  changeOption(option: string) {
    this.selectedOption = option;
  }
}
