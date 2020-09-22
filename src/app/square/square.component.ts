import { Square } from './../square';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  squares: Square[] = [];
  initialWidth = window.innerWidth;
  crazyActivated: boolean;
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
      return Math.floor(Math.random() * Math.floor(window.innerWidth));
    } else {
      return Math.floor(Math.random() * Math.floor(window.innerHeight));
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
    this.crazyActivated = true;
    console.log(this.squares);
    setInterval(this.crazyModeActivated, 2000);
  }

}
