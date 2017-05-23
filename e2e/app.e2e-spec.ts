import { Ng4GithubProfileSearchPage } from './app.po';

describe('ng4-github-profile-search App', () => {
  let page: Ng4GithubProfileSearchPage;

  beforeEach(() => {
    page = new Ng4GithubProfileSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
