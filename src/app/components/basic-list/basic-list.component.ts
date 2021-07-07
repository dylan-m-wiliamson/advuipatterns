import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css']
})
export class BasicListComponent implements OnInit {

  items!: TodoListItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 1, description: 'Learn Angular',
      },
      {
        id: 2, description: 'Learn TypeScript',
      },
      {
        id: 3, description: 'Learn Webpack'
      }
    ]
  }

  drop(event: any) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  moveUp(item: TodoListItem) {
    const previousIndex = this.items.indexOf(item);
    moveItemInArray(this.items, previousIndex, previousIndex - 1);
  }

  moveDown(item: TodoListItem) {
    const previousIndex = this.items.indexOf(item);
    moveItemInArray(this.items, previousIndex, previousIndex + 1);
  }
}
interface TodoListItem {
  id: number;
  description: string;
}
