import {ApplicationConfig, Injectable} from '@angular/core';
import {provideRouter, RouterStateSnapshot, Routes, TitleStrategy} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {HomeComponent} from "./home/home.component";
import {Bai1Component} from "./bai1/bai1.component";
import {Bai2Component} from "./bai2/bai2.component";
import {Bai3Component} from "./bai3/bai3.component";
import {Bai4Component} from "./bai4/bai4.component";
import {Bai5Component} from "./bai5/bai5.component";
import {Bai6Component} from "./bai6/bai6.component";
import {Bai7Component} from "./bai7/bai7.component";

const routes: Routes = [
  {path: '', redirectTo: 'index.html', pathMatch: 'full'},
  {path: 'index.html', title: 'Trang chủ', component: HomeComponent},
  {path: 'Lab3_1.html', title: 'Bài 1', component: Bai1Component},
  {path: 'Lab3_2.html', title: 'Bài 2', component: Bai2Component},
  {path: 'Lab3_3.html', title: 'Bài 3', component: Bai3Component},
  {path: 'Lab3_4.html', title: 'Bài 4', component: Bai4Component},
  {path: 'Lab3_5.html', title: 'Bài 5', component: Bai5Component},
  {path: 'Lab3_6.html', title: 'Bài 6', component: Bai6Component},
  {path: 'Lab3_7.html', title: 'Bài 7', component: Bai7Component},
  {path: '**', redirectTo: ''}
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Angular | Lab3 - ${title}`);
    }
  }
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
};
