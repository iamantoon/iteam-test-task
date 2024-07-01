import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavMenuComponent
  ]
})
export class CoreModule { }