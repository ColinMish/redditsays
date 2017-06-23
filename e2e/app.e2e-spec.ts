import { RedditSaysPage } from './app.po';

describe('reddit-says App', () => {
  let page: RedditSaysPage;

  beforeEach(() => {
    page = new RedditSaysPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
