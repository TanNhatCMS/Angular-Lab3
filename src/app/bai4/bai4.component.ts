import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bai4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bai4.component.html'
})
export class Bai4Component {
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

  SumCols = (r: number, c: number) => {
    let str = '', sum;
    for (let i = 0; i < c; i++) {
      sum = 0
      for (let j = 0; j < r; j++) {
        sum += this.Array[j][i]
      }
      str += sum + " "
    }
    //console.log(str)
    return str
  }
}
