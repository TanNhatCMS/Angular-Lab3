import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menus: Menu[] = [
    { name: 'Trang chủ', url: '/index.html' },
    { name: 'Bài 1', url: '/Lab3_1.html' },
    { name: 'Bài 2', url: '/Lab3_2.html' },
    { name: 'Bài 3', url: '/Lab3_3.html'},
    { name: 'Bài 4', url: '/Lab3_4.html' },
    { name: 'Bài 5', url: '/Lab3_5.html' },
    { name: 'Bài 6', url: '/Lab3_6.html' },
    { name: 'Bài 7', url: '/Lab3_7.html' }
  ];

  constructor() { }

  getMenus(): Menu[] {
    return this.menus;
  }

}
