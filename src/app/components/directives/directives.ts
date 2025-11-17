import { Component } from '@angular/core';
import { NgStyle,NgClass } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [NgStyle,NgClass],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  size =40;
  font = 'Arial';
  color = 'red';

  classes = ['green-title', 'small-title'];
  underline = 'underline-title';

}
