import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ios-mimic';

  d = new Date()

  hourCalc(hour:number) {
    if (hour >12) {
      let newHour = hour-12
      return newHour
    } else {
      return hour
    }
  }
  amPmCalc(hour:number) {
    if (hour >12) {
      return 'PM'
    } else {
      return 'AM'
    }
  }

  currentDate = `${this.d.getMonth() +1}/${this.d.getDate()}/${this.d.getFullYear().toString().slice(2,4)}`
  currentTime = `
  ${this.hourCalc(this.d.getHours())}:${this.d.getMinutes()}`
  currentAmPm = ` ${this.amPmCalc(this.d.getHours())}`

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

  buttonArray = ['heroUsers', 'heroCurrencyDollarSolid','heroEnvelopeSolid','heroGlobeAltSolid']

  buttonArrayBench = ['heroChatBubbleLeftRightSolid','heroClockSolid','heroMagnifyingGlassPlus', 'ionColorPalette', 'ionImage', 'heroMap']


  testingArray: {icon:string, func:any}[] = [{ icon:'heroUsers', func:(id:string) => {
    let elm:any = document.getElementById(id);
    console.log(elm)
    if(elm.className === 'appHiddenClass') {
      elm.className = 'appDisplayClass'
    } else {
      elm.className = 'appHiddenClass'
    }
  } },]


  operateWindow() {
    if (this.displayToggle === 'hidden') {
      this.displayToggle = 'flex flex-wrap justify-start py-4 px-6'
    } else {
      this.displayToggle = 'hidden'
    }
  }

  openLink(name:string) {
    console.log(name)
  }

  add(index:number, name:string) {
    this.buttonArray.push(name)
    this.buttonArrayBench.splice(index , 1)
  }

  // updateIcons() {
  //   if (this.appDisplay === 'hidden') {
  //     this.appDisplay = 'flex flex-wrap justify-center py-4 px-6 rounded-md drop-shadow-md'
  //   } else {
  //     this.appDisplay = 'hidden'
  //   }
  // }

  updateIconColor(color:string) {
    this.iconColor = color
  }

  updateIconShape(shape:string) {
    this.iconShape = shape
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
