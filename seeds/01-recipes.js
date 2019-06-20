
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Bacon & Garlic Collards', instructions: 'Spicy jalapeno bacon ipsum dolor amet pork loin short loin capicola shank tenderloin pig ham, strip steak pork belly turkey kevin corned beef burgdoggen boudin.', dish_id: 1},
        {name: 'Spicy Shrimp Creole over Rice', instructions: 'Prosciutto corned beef spare ribs, tenderloin biltong drumstick cow turducken cupim ball tip hamburger meatloaf capicola pork tongue.', dish_id: 2},
        {name: 'Chicken, Sausage and Shrimp Jambalaya', instructions: 'Tail shoulder hamburger landjaeger filet mignon t-bone spare ribs porchetta. Short ribs sausage ribeye kevin, hamburger pork loin bresaola buffalo tongue rump frankfurter strip steak alcatra tenderloin.', dish_id: 3}
      ]);
    });
};
