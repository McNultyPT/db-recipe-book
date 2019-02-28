const express = require('express');

const RecipeBook = require('./recipe_book_access.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const dishes = await RecipeBook.getDishes();
        res.status(200).json(dishes);
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Error retrieving the dishes.' });
    }
});

module.exports = router;