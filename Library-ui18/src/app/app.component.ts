import { Component } from '@angular/core';
import { environment } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Library-ui18';

  constructor() {
    console.log(environment.production); // Logs false for development environment
  }
  
}