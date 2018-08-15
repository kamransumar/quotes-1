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
formQuote = new Quote(0, '' , '', '');

submitted = false;

onSubmit() { this.submitted = true; }

 newQuote() {
    this.formQuote = new Quote(0, '', '', '');
    this.quotes.push(this.formQuote);
  }
  updateQuoteById(id: number): Quote {
        for (const quote of this.quotes) {
          if (quote.id === id) {
            this.formQuote = new Quote(quote.id, quote.name, quote.author,
            quote.quote, );
            return this.formQuote;
          }
    }
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm('are you sure you want to delete this quote?');
      if (toDelete) {
        this.quotes.splice(index);
      }
    }
  }
  constructor(quoteService: QuoteService) { this.quotes = quoteService.getAllQuotes();
}

  ngOnInit() {
  }

}
