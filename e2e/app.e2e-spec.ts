import { Assignment2Page } from './app.po';

describe('assignment2 App', () => {
  let page: Assignment2Page;

  beforeEach(() => {
    page = new Assignment2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
