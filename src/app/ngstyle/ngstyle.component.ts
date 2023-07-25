import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent {
  dynamicStyles: { [key: string]: string } = {
    'background-color': 'yellow',
    color: 'blue',
    'font-size': '20px',
  };

  changeStyles() {
    this.dynamicStyles = {
      'background-color': 'green',
      color: 'white',
      'font-size': '24px',
    };
  }
}
