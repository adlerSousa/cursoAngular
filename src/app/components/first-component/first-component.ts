import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrls: ['./first-component.css'],
})
export class FirstComponent implements OnInit {

  name: string = 'Adler';
  age: number = 22;
  job = "Developer";
  hobbies = ['Games', 'Series', 'Movies'];
  car = {
    name: 'Gol',
    year: 2020,
    color: 'White'
  }
  
  constructor() {}

  ngOnInit(): void {}


}
