import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Output() public child=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  parentMessage(value) {
    this.child.emit(value);
  }


}
