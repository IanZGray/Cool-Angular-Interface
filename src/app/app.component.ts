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

  displayToggle:string = 'flex flex-wrap justify-evenly p-2 '
  appName:string = ''
  buttonClass = 'flex self-center border-2 rounded-full pt-3 pl-3 pb-9 pr-9 text-2xl my-2 mx-1'
  buttonBenchClass = 'flex self-center border-2 rounded-full pt-2 pl-2 pb-7 pr-7 text-xl mb-2 mx-1 bg-blue-600 '

  buttonArray = ['heroUsers', 'heroCurrencyDollarSolid','heroEnvelopeSolid','heroGlobeAltSolid']

  buttonArrayBench = ['heroChatBubbleLeftRightSolid','heroClockSolid','heroMagnifyingGlassPlus', 'ionColorPalette', 'ionImage']


  operateWindow(name: string) {
    if (this.displayToggle === 'hidden') {
      this.displayToggle = 'flex'
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
}
