import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  projectTitle:string="Calculator";
  displayValue:string="";

  onButtonClick(value:string)
  {
    this.displayValue=this.displayValue+value;
  }
  onButtonClickAns()
  {
     //let result=eval(this.displayValue);
    // this.displayValue=result;
    let result:string="";
    try{
      result=eval(this.displayValue);
      this.displayValue=result;
    }
    catch(error)
    {
      this.displayValue="Invalid Input"
    }

  }

  onButtonClickClr()
  {
    this.displayValue="";
  }
  


}
