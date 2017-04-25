import { SampleApiPage } from './app.po';

describe('sample-api App', () => {
  let page: SampleApiPage;

  beforeEach(() => {
    page = new SampleApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
