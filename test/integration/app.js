describe('Routes Books', () => {
  const Books = app.datasource.models.Books;
  const defaultBook = {
    id: 1,
    name: "Default Book"
  };

  beforeEach(done => {
    Books
      .destroy({ where: {} })
      .then(() => Books.create(defaultBook))
      .then(() => done());
  });

  describe('Routes GET /books', () =>
    it('should return a list of books', done => {
      request
        .get('/books')
        .end((err, res) => {
          expect(res.body[0].id).to.be.eql(defaultBook.id);
          expect(res.body[0].name).to.be.eql(defaultBook.name);

          done(err);
        });
    })
  );

  describe('Routes GET /books/{id}', () =>
    it('should return a book', done => {
      request
        .get('/books/1')
        .end((err, res) => {
          expect(res.body.id).to.be.eql(defaultBook.id);
          expect(res.body.name).to.be.eql(defaultBook.name);

          done(err);
        });
    })
  );

  describe('Routes POST /books', () =>
    it('should create a book', done => {
      const newBook = {
        id: 2,
        name: "New Book"
      };

      request
        .post('/books')
        .send(newBook)
        .end((err, res) => {
          expect(res.body.id).to.be.eql(newBook.id);
          expect(res.body.name).to.be.eql(newBook.name);

          done(err);
        });
    })
  );

  describe('Routes PUT /books/{id}', () =>
    it('should update a book', done => {
      const updatedBook = {
        id: 1,
        name: "Updated Book"
      };

      request
        .put('/books/1')
        .send(updatedBook)
        .end((err, res) => {
          expect(res.body).to.be.eql([1]);

          done(err);
        });
    })
  );

  describe('Routes DELETE /books/{id}', () =>
    it('should DELETE a book', done => {
      request
        .delete('/books/1')
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(204);

          done(err);
        });
    })
  )
});