import { Square } from './../square';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @ViewChild('crazyButton') button: ElementRef;
  squares: Square[] = [];
  initialWidth = window.innerWidth;
  crazyActivated = false;
  active;
  constructor() { }
  ngOnInit(): void {
    this.squares.push({
      x: 0,
      y: 0,
      color: this.getRandomColor(),
      width: this.initialWidth,
      height: this.initialWidth
    });
  }
  divideSquare(): void {
    this.squares.length += 3;
    this.initialWidth = this.initialWidth / 4;
    for (let index = 0; index < this.squares.length; index++) {
      this.squares[index] = {
        x: this.getRandomInt('x'),
        y: this.getRandomInt('y'),
        color: this.getRandomColor(),
        width: this.initialWidth,
        height: this.initialWidth
      };
    }
  }
  getRandomInt(position: string): number {
    if (position === 'x') {
      return Math.floor(Math.random() * Math.floor(window.innerWidth - this.initialWidth));
    } else {
      return Math.floor(Math.random() * Math.floor(window.innerHeight  - this.initialWidth));
    }
  }
  getRandomColor(): string {
    return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
  }
  crazyModeActivated(): void {
    this.squares.forEach(element => {
      element.x = this.getRandomInt('x');
      element.y = this.getRandomInt('y');
    });
  }

  crazyMode(): void {
    this.crazyActivated = !this.crazyActivated;
    if(this.crazyActivated){
      this.button.nativeElement.textContent = 'STOP';
      this.active = setInterval(() => this.crazyModeActivated(), 2000);
    } else {
      this.button.nativeElement.textContent = 'Crazy Mode';
      clearInterval(this.active);
    }

  }

}
