import { SamcoddesPage } from './app.po';

describe('samcoddes App', function() {
  let page: SamcoddesPage;

  beforeEach(() => {
    page = new SamcoddesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
