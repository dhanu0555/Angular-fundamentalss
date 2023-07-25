import { Component } from '@angular/core';

@Component({
  selector: 'app-jsond',
  templateUrl: './jsond.component.html',
  styleUrls: ['./jsond.component.css']
})
export class JsondComponent {
  jsonData = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
    // Add more data as needed...
  ];
}
