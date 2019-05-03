const seriesData = require('../../series');
const episodesData = require('../../episodes');

const createSeries = (knex, series) => {
  return knex('series').insert({
    show: series.show,
    showDescription: series.showDescription,
    genre: series.genre
  }, 'id')
  .then(seriesId => {
    let episodesPromises = [];

    series.episodes.forEach(episode => {
      episodesPromises.push(
        createEpisode(knex, {
          episode: episode,
          seriesId: seriesId[0]
        })
      )
    });

    return Promise.all(episodesPromises);
  })
};

const createEpisode = (knex, episode) => {
  return knex('episodes').insert(episode);
};

exports.seed = (knex, Promise) => {
  return knex('episodes').del()
    .then(() => knex('series').del())
    .then(() => {
      let seriesPromises = [];

      seriesData.forEach(series => {
        seriesPromises.push(createSeries(knex, series));
      });

      return Promise.all(seriesPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};