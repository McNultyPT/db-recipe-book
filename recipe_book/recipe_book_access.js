const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    getDishes,
    getDish,
};

function getDishes() {
    return db('dishes')
}

function getDish(id) {
    return db('dishes')
        .where({ id })
        .innerJoin('recipes', 'dishes.id', 'recipes.dish_id')
}

// select * dishes, recipes.name
// from dishes
// inner join recipes on dishes.id = recipes.dish_id

// async function addDish(dish) {
//     const [id] = await db('dishes').insert(dish);

//     return getDish(id);
// }