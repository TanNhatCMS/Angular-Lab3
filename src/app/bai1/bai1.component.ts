import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-bai1',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './bai1.component.html'
})
export class Bai1Component {
  Array: any[] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
}
