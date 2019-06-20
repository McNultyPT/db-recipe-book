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

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dish = await getDish(id)

    if (dish) {
        res.status(200).json(dish);
    } else {
        res.status(404).json({ errorMessage: 'A dish with that ID does not exist.' });
    }
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Could not retrieve the dish.' });
    }
});

module.exports = router;