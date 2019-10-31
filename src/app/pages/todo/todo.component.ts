import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, AfterViewChecked {

  @ViewChild('newReminder') newReminder: ElementRef;

  todos = [
    { checked: true, content: 'Hacer el template'},
  ];

  addingOne = false;

  constructor() { }

  ngOnInit() {
  }

  addNew() {
    this.addingOne = !this.addingOne;
  }

  ngAfterViewChecked() {
    if ( this.newReminder ) {
      const newElement: HTMLElement = this.newReminder.nativeElement;
      const input: HTMLElement = newElement.querySelector('input[type=text]');
      input.focus();
    }
  }

}
