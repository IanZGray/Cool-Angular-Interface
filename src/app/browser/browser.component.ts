import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'browser-app',
  templateUrl: './browser.component.html',
  styleUrls: ['../app.component.css']
})
export class BrowserComponent {
  iFrameURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://google.com&embedded=true')

  appDisplayClass:string = 'flex-wrap justify-center py-4 px-4 rounded-md drop-shadow-md'
  appDisplayStyle:string = 'flex'
  appHiddenStyle:string = 'none'

  constructor(private sanitizer: DomSanitizer) {

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
