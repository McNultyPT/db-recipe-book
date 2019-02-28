
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments();

        tbl
            .integer('dish_id')
            .unsigned()
            .references('id')
            .inTable('dishes')
            .onUpdate('CASCADE')

        tbl
            .string('name', 128)
            .notNullable()
            .unique();

        tbl
            .text('instructions')
            .notNullable();

        tbl.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};