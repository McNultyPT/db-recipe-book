const express = require('express');
const helmet = require('helmet');

const recipeBookRouter = require('../recipe_book/recipe_book_router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipebook', recipeBookRouter);

module.exports = server;