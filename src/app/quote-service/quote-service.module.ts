import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { quote } from '../quote';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class QuoteServiceModule {
  constructor() { }

  getAllQuotes(): Quote[] {
    return Quotes;
  }
  }
