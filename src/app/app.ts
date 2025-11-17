import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ParentData } from "./components/parent-data/parent-data";  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, ParentData],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userName = 'Joaquim';

  userData={
    email :'joaqui@gmail.com',
    role : 'Admin'
  };
  protected readonly title = signal('curso-angular');
}
