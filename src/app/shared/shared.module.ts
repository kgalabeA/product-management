import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer';
import { SharedComponent } from './shared.component';
import { NavComponent } from './navigation';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [FooterComponent,SharedComponent,NavComponent,ButtonComponent],
  exports:[SharedComponent,ButtonComponent]
})
export class SharedModule { }
