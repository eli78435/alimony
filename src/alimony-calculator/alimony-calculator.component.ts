import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimony-calculator',
  templateUrl: './alimony-calculator.component.html',
  styleUrls: ['./alimony-calculator.component.css']
})
export class AlimonyCalculatorComponent implements OnInit {
  dadSalary: number = 15000;
  momSalary: number = 1000;
  childSpecialNeedNoCompartment: number = 1300;
  childCompartment: number = 0;
  childOptionalNeeds: number = 0;
  calcedAlimony?: number = null;

  constructor() { }

  ngOnInit() {
  }

  calculateAlimony() {
    if(! this.assertInput()) {
      console.log('inpurt is not valid');
      return;
    }

    let alimony = 
      (this.childSpecialNeedNoCompartment / 2) +
      (this.childCompartment / 2) + 
      (this.dadSalary / (this.dadSalary + this.momSalary)) * (this.childOptionalNeeds);
    
      if(! this.assertAlimony(alimony))
      {
        console.log('alimony results are not valid');
        return; 
      }

      this.calcedAlimony = alimony;
  }

  clean() {
    this.calcedAlimony = null;
  } 

  private assertInput(): boolean {
    if(this.dadSalary < 0 ||
      this.momSalary < 0 ||
      this.childSpecialNeedNoCompartment < 0 ||
      this.childCompartment < 0 ||
      this.childOptionalNeeds < 0)
      return false;

    if(this.childSpecialNeedNoCompartment === 0)
      return false;

    return true;
  }

  private assertAlimony(calcedAlimony: Number): boolean {
    if(calcedAlimony <= 0)
      return false;

    if(this.dadSalary <= calcedAlimony)
      return false;

    return true;
  }
}
