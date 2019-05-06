# Build Your Own Backend

## API endpoints

### Series

#### `GET /api/v1/series`
Data should look like something like this.

```javascript
  [{
    "id": 25,
    "show": "Boruto: Naruto Next Generations",
    "showDescription": "Unlike Naruto, Boruto is about a son who's living his life along his friend, avoiding being in his father's shadow. He has adventures in younger version, in school, revealing new abilities.",
    "genre": "Adventure fiction"
    },
    {
    "id": 26,
    "show": "Black Butler",
    "showDescription": "A young boy sells his soul to a demon in order to avenge his family's death and successfully lead their influential toy manufacturing company. The demon takes the form of a loyal butler who's always dressed in black.",
    "genre": "Thriller mystery"
    },
    {
    "id": 27,
    "show": "Death Parade",
    "showDescription": "After death, humans go to either heaven or hell. But for some, at the instant of their death, they arrive at the Quindecim, a bar attended by the mysterious white-haired Decim.",
    "genre": "Psychological thriller"
}]
```
### episodes

#### `GET /api/v1/episodes`
Data should look like something like this.

```javascript
   [{
    "episodeTitle": "Uzumaki Boruto!!",
    "description": "Prior to entering the Ninja Academy, Boruto Uzumaki, the son of Naruto Uzumaki, meets a bullied boy named Denki Kaminarimon, who is being forced to join the academy for the sake of his father's company.",
    "series_Id": 1
  },
  {
    "episodeTitle": "Hokage no musuko...!!",
    "description": "After having been suspended for two weeks for the trouble he caused at the entrance ceremony, Boruto finally begins his days attending the academy.",
    "series_Id": 1
  }]
```
### Series by id

#### `GET /api/v1/series/:id/`
Data should look like something like this.

```javascript
   [{
    "id": 25,
    "show": "Boruto: Naruto Next Generations",
    "showDescription": "Unlike Naruto, Boruto is about a son who's living his life along his friend, avoiding being in his father's shadow. He has adventures in younger version, in school, revealing new abilities.",
    "genre": "Adventure fiction"
    }]
```

### Episodes by id

#### `GET /api/v1/episode/:id/`
Data should look like something like this.

```javascript
   [{
    "episodeTitle": "Uzumaki Boruto!!",
    "description": "Prior to entering the Ninja Academy, Boruto Uzumaki, the son of Naruto Uzumaki, meets a bullied boy named Denki Kaminarimon, who is being forced to join the academy for the sake of his father's company.",
    "series_Id": 1
  }]
```
