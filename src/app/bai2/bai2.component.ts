import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bai2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bai2.component.html'
})
export class Bai2Component {
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
}
