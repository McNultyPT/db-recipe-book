
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments();

        tbl
            .string('name', 128)
            .notNullable()
            .unique();

        tbl
            .string('instructions')
            .notNullable();

        tbl.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};