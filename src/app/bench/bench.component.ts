import { Component } from '@angular/core';

@Component({
  selector: 'bench-app',
  templateUrl: './bench.component.html',
  styleUrls: ['../app.component.css']
})
export class BenchComponent {

  displayToggle:string = 'hidden'
  appDisplay:string = 'hidden'
  appName:string = ''

  iconColor:string = 'bg-yellow-600'
  iconShape:string = 'rounded-full'

  buttonClass:string = 'flex self-center border-2 pt-3 pl-3 pb-9 pr-9 text-2xl my-2 mx-1'
  buttonBenchClass:string = 'flex self-center border-2 pt-2 pl-2 pb-7 pr-7 text-xl mb-2 mx-1 bg-blue-600 '
  colorClass:string = 'flex self-center border-2 rounded-full p-4 text-2xl my-2 mx-1'

  appDisplayClass:string = 'flex-wrap justify-center py-4 px-6 rounded-md drop-shadow-md'
  appDisplayStyle:string = 'flex'
  appHiddenStyle:string = 'none'

  buttonArray = ['heroUsers', 'ionCalculatorSharp', 'heroCurrencyDollarSolid','heroEnvelopeSolid','heroGlobeAltSolid']

  buttonArrayBench = ['heroChatBubbleLeftRightSolid','heroClockSolid','heroMagnifyingGlassPlus', 'ionColorPalette', 'ionImage', 'heroMap']


  openLink(name:string) {
    console.log(name)
  }

  add(index:number, name:string) {
    this.buttonArray.push(name)
    this.buttonArrayBench.splice(index , 1)
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
