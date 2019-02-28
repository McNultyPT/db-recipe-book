
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dish_recipes', function(tbl) {
        tbl
            .integer('dish_id')
            .unsigned()
            .references('id')
            .inTable('dishes')
            .onUpdate('CASCADE');

        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE');

        tbl.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dish_recipes');
};
