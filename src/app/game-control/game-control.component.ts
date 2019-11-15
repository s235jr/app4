import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  iterator = 0;

  constructor() {
  }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.iterator + 1);
      this.iterator++;
    }, 1000);
  }
}
