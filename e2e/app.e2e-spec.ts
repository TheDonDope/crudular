import { CrudularPage } from './app.po';

describe('crudular App', () => {
  let page: CrudularPage;

  beforeEach(() => {
    page = new CrudularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cru works!');
  });
});
