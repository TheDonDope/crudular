import { CrudularPage } from './app.po';

describe('crudular App', () => {
  let page: CrudularPage;

  beforeEach(() => {
    page = new CrudularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cru!!');
  });
});
