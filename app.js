import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
import booksRouter from './routes/books.js';

const app = express();

app.config = config;
app.datasource = datasource(app);
app.use(bodyParser.json());
app.set('port', 7000);
const Books = app.datasource.models.Books;
booksRouter(app, Books);

export default app;