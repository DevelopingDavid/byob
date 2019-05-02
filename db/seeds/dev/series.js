
exports.seed = function(knex, Promise) {
  // We must return a Promise from within our seed function
  // Without this initial `return` statement, the seed execution
  // will end before the asynchronous tasks have completed
  return knex('episodes').del() // delete all footnotes first
    .then(() => knex('series').del()) // delete all papers

    // Now that we have a clean slate, we can re-insert our paper data
    .then(() => {
      return Promise.all([
        
        // Insert a single paper, return the paper ID, insert 2 footnotes
        knex('series').insert({
          show: 'Boruto: Naruto Next Generations',
          showDescription: "Unlike Naruto, Boruto is about a son who's living his life along his friend, avoiding being in his father's shadow. He has adventures in younger version, in school, revealing new abilities.', publisher: 'Minnesota",
          genre: 'Adventure fiction'
        }, 'id')
        .then(series => {
          return knex('episodes').insert([
            { 
             episodeTitle: 'Uzumaki Boruto!!',
             description: "Prior to entering the Ninja Academy, Boruto Uzumaki, the son of Naruto Uzumaki, meets a bullied boy named Denki Kaminarimon, who is being forced to join the academy for the sake of his father's company.",
             seriesId: series[0] 
            }
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ]) // end return Promise.all
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
