import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bai6',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bai6.component.html',
})
export class Bai6Component {
  R: number = 0
  C: number = 0
  Array: any[] = [];
  calculateTotalRows: boolean = false;
  calculateTotalCols: boolean = false;
  generateArray() {
    if(this.R < 1 || this.C < 1){
      alert("Số dòng và cột phải lớn hơn 0")
      return
    }
    this.addToArray(this.R, this.C);
  }

  addToArray(r: number, c: number) {
    this.Array = []
    for (let i = 0; i < r; i++) {
      this.Array[i] = [];
      for (let j = 0; j < c; j++) {
        this.Array[i][j] = Math.floor((Math.random() * 20) + 1)
      }
    }
    console.log(this.Array)
  }
  SumRows = () => {
    let str = '', sum;
    for (let i = 0; i < this.Array.length; i++) {
      sum = 0
      for (let j = 0; j < this.Array[i].length; j++) {
        sum += this.Array[i][j]
      }
      str += sum + " "
    }
    return str
  }
  SumCols = (r: number, c: number) => {
    let str = '', sum : number;
    for (let i = 0; i < c; i++) {
      sum = 0
      for (let j = 0; j < r; j++) {
        sum += this.Array[j][i]
      }
      if(!isNaN(sum)) str += sum + " " // giải quyết án mạng
    }
    //console.log(str)
    return str
  }
  Cheochinh(r: number, c: number) {
    let sum = 0;
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (i === j) {
          if(!isNaN(this.Array[i][j]))
          sum += this.Array[i][j];
        }
      }
    }
    return sum;
  }
}
