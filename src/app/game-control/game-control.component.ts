import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() randNumber: number;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {

  }
  onStopGame() { }

}
