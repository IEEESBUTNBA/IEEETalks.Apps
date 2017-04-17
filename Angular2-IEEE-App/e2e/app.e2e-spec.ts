import { IEEEWebAppPage } from './app.po';

describe('ieee-web-app App', () => {
  let page: IEEEWebAppPage;

  beforeEach(() => {
    page = new IEEEWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
