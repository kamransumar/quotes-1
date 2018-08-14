import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote-service/quote-service.module';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
  providers: [QuoteService]
})
export class QuoteFormComponent implements OnInit {
quotes: Quote[];
formQuote = new Quote('full name', ' authors name' , 'the quote');

submitted = false;

onSubmit() { this.submitted = true; }

 newQuote() {
    const quoteLength = this.quotes.length;
    this.formQuote = new Quote('', '', '');
    this.quotes.push(this.formQuote);
  }
  constructor(quoteService: QuoteService) { this.quotes = quoteService.getAllQuotes();
}

  ngOnInit() {
  }

}
