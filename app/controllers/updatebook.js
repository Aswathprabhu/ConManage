import Controller from '@ember/controller';

export default Controller.extend({
  names:[],
  actions:
  {
    foo(book)
    {
      alert(book);
    },
    selectedDiacritic()
    {
      alert("Hi");
    },
    myMatcher(book)
    {
      return `${book.quantity}`;
    }
  }

});
