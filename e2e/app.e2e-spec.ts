import { Ng2MapPage } from './app.po';

describe('ng2-map App', function() {
  let page: Ng2MapPage;

  beforeEach(() => {
    page = new Ng2MapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
