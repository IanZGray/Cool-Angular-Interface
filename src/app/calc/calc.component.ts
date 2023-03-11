import { Component } from '@angular/core';

@Component({
  selector: 'calc-app',
  templateUrl: './calc.component.html',
  styleUrls: ['../app.component.css']
})
export class CalcComponent {
  appDisplayClass:string = 'flex-wrap justify-center py-4 px-6 rounded-md drop-shadow-md'
  appDisplayStyle:string = 'flex'
  appHiddenStyle:string = 'none'


  calValue: number = 0;
  funcT: any = 'Calculate...';

  calNumber: string = 'noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;
  calFunction: string = '';

  onClickValue(val: string, type: any) {
    if(type == 'number') {
      this.onNumberClick(val)
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if(this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber)
  }

  onFunctionClick(val: string) {
    if (val == 'c') {
      this.clearAll()
    } else if (this.funcT == 'Calculate...') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if (this.funcT != 'Calculate...') {
      this.secondNumber = this.calValue

      this.valueCalculate(val)
    }
  }
  valueCalculate(val: string) {
    let total: number
    switch(this.funcT) {
      case '+':
        total = this.firstNumber + this.secondNumber
        this.totalAssignValues(total, val);
        break;
      case '-':
        total = this.firstNumber - this.secondNumber
        this.totalAssignValues(total, val);
        break;
      case '*':
        total = this.firstNumber * this.secondNumber
        this.totalAssignValues(total, val);
        break;
      case '/':
        total = this.firstNumber / this.secondNumber
        this.totalAssignValues(total, val);
        break;
      case '%':
        total = (this.firstNumber / 100) * this.secondNumber
        this.totalAssignValues(total, val);
        break;
      default:
        // equals
    }
  }

  totalAssignValues(total: number, val: string) {
    this.calValue = total
    this.firstNumber = total
    this.secondNumber = 0
    this.calNumber = total.toString()
    this.funcT = val
    if(val == '=') {
      this.onEqualPress()
    }
  }

  onEqualPress() {
    this.firstNumber = 0
    this.secondNumber = 0
    this.funcT = 'Calculate...'
    // this.calNumber = 'noValue'
  }

  clearAll() {
    console.log('cleared')
    this.firstNumber = 0
    this.secondNumber = 0
    this.calValue = 0
    this.funcT = 'Calculate...'
    this.calNumber = 'noValue'
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
