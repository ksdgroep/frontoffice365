import { FrontOffice365Page } from './app.po';

describe('front-office365 App', () => {
  let page: FrontOffice365Page;

  beforeEach(() => {
    page = new FrontOffice365Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
