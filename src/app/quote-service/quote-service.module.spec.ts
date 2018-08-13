import { QuoteServiceModule } from './quote-service.module';

describe('QuoteServiceModule', () => {
  let quoteServiceModule: QuoteServiceModule;

  beforeEach(() => {
    quoteServiceModule = new QuoteServiceModule();
  });

  it('should create an instance', () => {
    expect(quoteServiceModule).toBeTruthy();
  });
});
