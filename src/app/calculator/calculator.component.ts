import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  input: string = '';
  result: string = '';

  constructor() {}

  ngOnInit(): void {}

//Prvi broj ne moze biti 0 

  pressNum(num: string) {
    if (num === "0" ) {
      if (this.input === "" ) {
        return;
      }}  

    this.input = this.input + num;
  }

// Ne dozvoljava da u kalkulator dva puta zaredom unesemo odredjenu racunsku operacuju
  pressOperator(op: string) {
    const lastKey = this.input[this.input.length - 1];
    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '-' ||
      lastKey === '+' ||
      lastKey === '.'
    ) {
      return;
    }
    
    this.input = this.input + op;
  }

  // Izvrsavanje zadate recunske operacije 
  getAnswer() {
    this.result = eval(this.input);
    this.input = '';
  }

  // Ponistavanje svih unosa u kalkulatoru
  allClear(){
    this.input= '';
    this.result= '';
  }

}



