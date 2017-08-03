import { PrimeAppPage } from './app.po';

describe('prime-app App', () => {
  let page: PrimeAppPage;

  beforeEach(() => {
    page = new PrimeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
