
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Collard Greens'},
        {name: 'Shrimp Creole'},
        {name: 'Jambalaya'}
      ]);
    });
};
