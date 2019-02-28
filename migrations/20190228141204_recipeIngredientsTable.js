
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', function(tbl) {
        tbl
        .integer('quantity')
        .notNullable();
        
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE');

        tbl
            .integer('ingredients_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE');

        tbl.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients');
};
