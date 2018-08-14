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
formQuote = new Quote('', '' , '');

submitted = false;

onSubmit() { this.submitted = true; }

 newQuote() {
    this.formQuote = new Quote('', '', '');
    this.quotes.push(this.formQuote);
  }
  updateQuoteById(id: number): Quote {
        for (const quote of this.quotes) {
          if (quote.id === id) {
            this.formQuote = new Quote(quote.id, quote.name, quote.quote,
            quote.tag, quote.note);
            return this.formQuote;
          }
    }
  }
  constructor(quoteService: QuoteService) { this.quotes = quoteService.getAllQuotes();
}

  ngOnInit() {
  }

}
