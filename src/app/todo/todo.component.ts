import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrls: ['../app.component.css']
})
export class TodoComponent {
  appDisplayClass:string = 'flex-wrap justify-center py-4 px-4 rounded-md drop-shadow-md'
  appDisplayStyle:string = 'flex'
  appHiddenStyle:string = 'none'


  currentItem = '';
  items: string[] = [`add another item to to-do list`, `check out this developer's portfolio: ianzgray.netlify.com`]
  constructor() {}
  add() {
    if (this.items.length <12) {
      this.items.push(this.currentItem)
    } else if (this.items.length === 12) {
      this.items.push(`TOO MANY TASKS! COMPLETE SOME FIRST...`)
    } else {
      return
    }

  }
  remove(index:number) {
    if (this.items[12] === 'TOO MANY TASKS! COMPLETE SOME FIRST...') {
      this.items.pop()
      this.items.splice(index, 1)
    } else if (this.items[1] === `check out this developer's portfolio: ianzgray.netlify.com`) {
      window.open('https://ianzgray.netlify.app/')
      this.items.splice(index, 1)
    } else {
      this.items.splice(index, 1)
    }
  }

  appWindowToggle(id:string) {
    let elm:any = document.getElementById(id);
    console.log(elm)
    if(elm.style.display === this.appHiddenStyle) {

      elm.style.display = this.appDisplayStyle
    } else {

      elm.style.display = this.appHiddenStyle
    }
  }

}
