import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AlimonyCalculatorComponent } from 'src/alimony-calculator/alimony-calculator.component';

@NgModule({
   declarations: [
      AppComponent,
      AlimonyCalculatorComponent
   ],
   imports: [
      BrowserModule,
      CommonModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
