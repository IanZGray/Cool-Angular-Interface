import { Component } from '@angular/core';

@Component({
  selector: 'maps-app',
  templateUrl: './maps.component.html',
  styleUrls: ['../app.component.css']
})
export class MapsComponent {
  appDisplayClass:string = 'flex-wrap justify-center py-4 px-6 rounded-md drop-shadow-md'
  appDisplayStyle:string = 'flex'
  appHiddenStyle:string = 'none'

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
