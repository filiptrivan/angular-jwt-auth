import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel-header',
  templateUrl: './panel-header.component.html',
  styles: []
})
export class PanelHeaderComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }
}