import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { UiModule } from './ui/ui.module';
import { QuoteServiceModule } from './quote-service/quote-service.module';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    QuoteServiceModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
