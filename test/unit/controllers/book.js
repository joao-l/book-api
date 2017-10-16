import BooksController from '../../../controllers/books.js';

describe('Controllers: Books', () => {
  describe('Get all books: getAll()', () => {
    it('should return a list of books', () => {
      const Books = {
        findAll: td.function()
      };

      const expectedResponse = [{
        id: 1,
        name: 'Teste Book',
        created_at: '2016-08-06T23:55:35.692Z',
        update_at: '2016-08-06T23:55:35.692Z',
      }];

      td.when(Books.findAll({})).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.getAll()
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    })
  });

  describe('Get a book: getById()', () => {
    it('should return a book', () => {
      const Books = {
        findOne: td.function()
      };

      const expectedResponse = {
        id: 1,
        name: 'Teste Book',
        created_at: '2016-08-06T23:55:35.692Z',
        update_at: '2016-08-06T23:55:35.692Z',
      };

      td.when(Books.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.getById({ id: 1 })
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    })
  });

  describe('Create a book: createBook()', () => {
    it('should create a book', () => {
      const Books = {
        create: td.function()
      };

      const requestBody = {
        name: 'Teste Book'
      };

      const expectedResponse = {
        id: 1,
        name: 'Teste Book',
        created_at: '2016-08-06T23:55:35.692Z',
        update_at: '2016-08-06T23:55:35.692Z',
      };

      td.when(Books.create(requestBody)).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.createBook(requestBody)
        .then(response => {
          expect(response.statusCode).to.be.eql(201);
          expect(response.data).to.be.eql(expectedResponse);
        });
    })
  });

  describe('Update a book: updateBook()', () => {
    it('should update an existing book', () => {
      const Books = {
        update: td.function()
      };

      const requestBody = {
        id: 1,
        name: 'Teste Book Updated'
      };

      const expectedResponse = {
        id: 1,
        name: 'Teste Book Updated',
        created_at: '2016-08-06T23:55:35.692Z',
        update_at: '2016-08-06T23:55:35.692Z',
      };

      td.when(Books.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.updateBook(requestBody, { id: 1 })
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    })
  });

  describe('Delete a book: deleteBook()', () => {
    it('should delete an existing book', () => {
      const Books = {
        destroy: td.function()
      };

      td.when(Books.destroy({ where: { id: 1 } })).thenResolve({});

      const booksController = new BooksController(Books);
      return booksController.deleteBook({ id: 1 })
        .then(response => expect(response.statusCode).to.be.eql(204));
    })
  });
});