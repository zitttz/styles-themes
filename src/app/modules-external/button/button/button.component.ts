import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() title: string;
  @Output() clicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  click(): void {
    this.clicked.emit();
  }
}
