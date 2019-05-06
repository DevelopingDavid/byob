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
    episodesData.forEach(episode => {
      if (episode.series_Id === series.id) {
        episodesPromises.push(
          createEpisode(knex, {
            episodeTitle: episode.episodeTitle,
            description: episode.description,
            series_Id: seriesId[0]
          })
        )
      }
    })
    return Promise.all(episodesPromises)
  })
}

const createEpisode = (knex, episode) => {
  return knex('episodes').insert(episode)
};

exports.seed = function(knex, Promise) {
  return knex('episodes').del()
    .then(() => knex('series').del())
    .then(function () {
      let seriesPromises = [];

      seriesData.forEach(series => {
        seriesPromises.push(createSeries(knex, series))
      })
      
      return Promise.all(seriesPromises)
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};