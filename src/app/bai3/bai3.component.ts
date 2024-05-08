import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bai3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bai3.component.html'

})
export class Bai3Component {
  R: number = 0
  C: number = 0
  Array: any[] = [];
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
    var str = '', sum
    for (let i = 0; i < this.Array.length; i++) {
      sum = 0
      for (let j = 0; j < this.Array[i].length; j++) {
        sum += this.Array[i][j]
      }
      str += sum + " "
    }
    return str
  }
}
