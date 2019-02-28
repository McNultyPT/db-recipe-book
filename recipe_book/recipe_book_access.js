const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    getDishes,
};

function getDishes() {
    return db('dishes')
}

// function getDish(id) {
//     return db('dishes')
//         .where({ id })
//         .first();
// }

// async function addDish(dish) {
//     const [id] = await db('dishes').insert(dish);

//     return getDish(id);
// }