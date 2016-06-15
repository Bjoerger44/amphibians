
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('amphibians').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('amphibians').insert({name: "Poison Dart Frog", image_url: "http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Amphibians/H-P/poison-dart-frog-orange-blue.jpg", type: "frog", size: 0}),
        knex('amphibians').insert({name: "American Bullfrog", image_url: "http://naturemappingfoundation.org/natmap/photos/amphibians/american_bullfrog_0184np.jpg", type: "frog", size: 1})
      ]);
    })
};
