import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FoterComponent } from './foter/foter.component';
import { NavigateMenuComponent } from './navigate-menu/navigate-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FoterComponent,
    NavigateMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
