import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'soft-card',
  templateUrl: './soft-card.component.html',
  styles: []
})
export class SoftCardComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }
}