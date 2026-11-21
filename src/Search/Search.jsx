
import React, { useEffect, useState } from 'react'
import './Search.styles.scss'
import {
  CardMedia,
  TextField,
  Typography,
  Button,
  CircularProgress
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Search() {
  const navigate = useNavigate()

  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const watch = (movie) => {
    navigate('/watch', {
      state: {
        title: movie.name,
        description: movie.description,
        video: movie.video ||
          'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
      }
    })
  }

  const ottMovie = [
    // MOVIES
    {
      id: 1,
      name: "RRR",
      year: 2022,
      age: "UA 16+",
      seasons: "3h 7m",
      language: "Telugu",
      genre: "Action / Drama",
      image: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE%40._V1_FMjpg_UX1000_.jpg",
      description: "Two revolutionaries fight against British colonial rule.",
    },
    {
      id: 2,
      name: "Vikram",
      year: 2022,
      age: "A",
      seasons: "2h 54m",
      language: "Tamil",
      genre: "Action / Thriller",
      image: "https://image.tmdb.org/t/p/original/k340hGNTfE0DYlDqXRJfMyXJtDx.jpg",
      description: "A special agent investigates a dangerous drug syndicate.",
    },
    {
      id: 3,
      name: "Devara",
      year: 2024,
      age: "UA 16+",
      seasons: "2h 57m",
      language: "Telugu",
      genre: "Action / Drama",
      image: "https://www.hindustantimes.com/ht-img/img/2024/01/01/optimize/devara_1704097613157_1704097623969.jpg",
      description: "A fearless man protects his coastal village from danger.",
    },
    {
      id: 4,
      name: "Leo",
      year: 2023,
      age: "A",
      seasons: "2h 44m",
      language: "Tamil",
      genre: "Action / Thriller",
      image: "https://media.senscritique.com/media/000021439997/0/leo.png",
      description: "A quiet café owner faces a violent past.",
    },
    {
      id: 5,
      name: "Stree 2",
      year: 2024,
      age: "UA 16+",
      seasons: "2h 27m",
      language: "Hindi",
      genre: "Horror / Comedy",
      image: "https://images.filmibeat.com/ph-big/2024/12/top-advance-tickets-sales-of-2024-pushpa-2-leads-the-charge1733416337_1.jpg",
      description: "The people of Chanderi face another supernatural threat.",
    },
    {
      id: 6,
      name: "Jawan",
      year: 2023,
      age: "UA 16+",
      seasons: "2h 49m",
      language: "Hindi",
      genre: "Action / Thriller",
      image: "https://images.filmibeat.com/ph-big/2023/08/jawan_16914785234.jpg",
      description: "A prison warden fights corruption and injustice.",
    },
    {
      id: 8,
      name: "Salaar",
      year: 2023,
      age: "A",
      seasons: "2h 55m",
      language: "Telugu",
      genre: "Action / Thriller",
      image: "https://images.filmibeat.com/ph-big/2024/12/top-5-indian-films-with-record-breaking-teaser-views-in-24-hours1735534334_0.jpg",
      description: "Two friends become caught in a violent power struggle.",
    },
    {
      id: 9,
      name: "Pathaan",
      year: 2023,
      age: "UA 16+",
      seasons: "2h 26m",
      language: "Hindi",
      genre: "Action / Spy",
      image: "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-12/317666930_1263521114492266_5039336158227913944_n.jpg?VersionId=zPqpqVUJkd2GTBsfOPnoNJ_IdP94Z11c&size=750%3A%2A",
      description: "An Indian agent races to stop a dangerous mercenary group.",
    },
    {
      id: 12,
      name: "Dhurandhar",
      year: 2025,
      age: "A",
      seasons: "3h 34m",
      language: "Hindi",
      genre: "Action / Crime",
      image: "https://www.impawards.com/intl/india/2025/posters/dhurandhar.jpg",
      description: "An intelligence agent goes deep undercover to dismantle a syndicate.",
    },

    // SHOWS
    {
      id: 13,
      name: "Sacred Games",
      year: 2018,
      age: "A",
      seasons: "2 Seasons",
      language: "Hindi",
      genre: "Crime / Thriller",
      image: "https://media.assettype.com/thequint%2F2018-06%2F7658caa2-cd66-4411-9fa0-5811d9021065%2FSacred_Games_Vertical_Main_PRE_UK.jpg",
      description: "A Mumbai police officer uncovers a dangerous criminal conspiracy.",
    },
    {
      id: 14,
      name: "The Family Man",
      year: 2019,
      age: "A",
      seasons: "2 Seasons",
      language: "Hindi",
      genre: "Action / Thriller",
      image: "https://adgully.com/img/800/202105/image-4.png.jpg",
      description: "A secret agent balances national security with family life.",
    },
    {
      id: 15,
      name: "Mirzapur",
      year: 2018,
      age: "A",
      seasons: "3 Seasons",
      language: "Hindi",
      genre: "Crime / Drama",
      image: "https://www.filmoria.co.uk/wp-content/uploads/2018/10/Poster-2.jpg",
      description: "Power, crime and revenge dominate the city of Mirzapur.",
    },
    {
      id: 16,
      name: "Panchayat",
      year: 2020,
      age: "UA 13+",
      seasons: "3 Seasons",
      language: "Hindi",
      genre: "Comedy / Drama",
      image: "https://img.republicworld.com/all_images/GOwjHObXkAAuewH-1733896227411.webp",
      description: "A young graduate adjusts to life in a village panchayat office.",
    },
    {
      id: 17,
      name: "Scam 1992",
      year: 2020,
      age: "UA 16+",
      seasons: "1 Season",
      language: "Hindi",
      genre: "Biography / Crime",
      image: "https://image.tmdb.org/t/p/original/dFTuVCjMMLCZB8mobKSwu5KC2bq.jpg",
      description: "The rise and fall of stockbroker Harshad Mehta.",
    },
    {
      id: 18,
      name: "Special Ops",
      year: 2020,
      age: "UA 16+",
      seasons: "2 Seasons",
      language: "Hindi",
      genre: "Action / Spy",
      image: "https://assets.gqindia.com/photos/67c04fa5458ab285b67fb8f9/master/w_1600%2Cc_limit/special-ops.jpg",
      description: "An intelligence officer investigates a long-running terror threat.",
    },
    {
      id: 19,
      name: "Gullak",
      year: 2019,
      age: "UA 13+",
      seasons: "4 Seasons",
      language: "Hindi",
      genre: "Family / Comedy",
      image: "https://images.justwatch.com/poster/138249201/s718/gullk.jpg",
      description: "A middle-class family finds humour in everyday life.",
    },
    {
      id: 20,
      name: "Aarya",
      year: 2020,
      age: "A",
      seasons: "3 Seasons",
      language: "Hindi",
      genre: "Crime / Drama",
      image: "https://image.tmdb.org/t/p/original/4E5Lm6e0DHLTahfIlr6K1gBYBps.jpg",
      description: "A mother enters the criminal world to protect her family.",
    },
    {
      id: 21,
      name: "Paatal Lok",
      year: 2020,
      age: "A",
      seasons: "2 Seasons",
      language: "Hindi",
      genre: "Crime / Thriller",
      image: "https://www.impawards.com/intl/india/tv/posters/paatal_lok_ver8_xlg.jpg",
      description: "A police officer investigates a complicated criminal case.",
    },
    {
      id: 22,
      name: "Kota Factory",
      year: 2019,
      age: "UA 13+",
      seasons: "3 Seasons",
      language: "Hindi",
      genre: "Drama / Comedy",
      image: "https://m.media-amazon.com/images/M/MV5BODY1Y2EyYWEtOGVhNi00MGQ1LTliNDEtMWZlMzM3ODczOTU5XkEyXkFqcGc%40._V1_.jpg",
      description: "Students navigate competitive exams and life in Kota.",
    },
    {
      id: 23,
      name: "Asur",
      year: 2020,
      age: "A",
      seasons: "2 Seasons",
      language: "Hindi",
      genre: "Crime / Mystery",
      image: "https://media.senscritique.com/media/000021211700/0/asur_welcome_to_your_dark_side.jpg",
      description: "A forensic expert investigates crimes inspired by mythology.",
    },
    {
      id: 24,
      name: "Made in Heaven",
      year: 2019,
      age: "A",
      seasons: "2 Seasons",
      language: "Hindi",
      genre: "Drama / Romance",
      image: "https://m.media-amazon.com/images/M/MV5BZjg2NzI0YWEtMjJmOS00OTIzLTllZDYtZGExNGY4ZmZjNWJkXkEyXkFqcGc%40._V1_.jpg",
      description: "Two wedding planners navigate relationships and social expectations.",
    },
    {
      id: 25,
      name: "Aspirants",
      year: 2021,
      age: "UA 13+",
      seasons: "2 Seasons",
      language: "Hindi",
      genre: "Drama",
      image: "https://images.plex.tv/photo?scale=1&size=large-1920&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FdHAxJpWuDyFzCRkbPJfWxfWdMBs.jpg",
      description: "Three friends navigate the challenges of civil service preparation.",
    },
    {
      id: 26,
      name: "Delhi Crime",
      year: 2019,
      age: "A",
      seasons: "3 Seasons",
      language: "Hindi",
      genre: "Crime / Drama",
      image: "https://economictimes.indiatimes.com/thumb/msid-93917039%2Cwidth-1200%2Cheight-900%2Cresizemode-4%2Cimgsize-63478/delhi-crime.jpg?from=mdr",
      description: "Police officers investigate serious crimes in Delhi.",
    },
    {
      id: 27,
      name: "Rocket Boys",
      year: 2022,
      age: "UA 13+",
      seasons: "2 Seasons",
      language: "Hindi",
      genre: "Biography / Drama",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1ec369198317541.663f1af0f2b3f.jpg",
      description: "The story of India's pioneering scientists and space ambitions.",
    },
    {
      id: 28,
      name: "Breathe",
      year: 2018,
      age: "A",
      seasons: "1 Season",
      language: "Hindi",
      genre: "Crime / Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BMTczNjIzNjk5N15BMl5BanBnXkFtZTgwNTAyMDk1NDM%40._V1_.jpg",
      description: "A desperate father makes dangerous choices to save his son.",
    },
    {
      id: 29,
      name: "Taaza Khabar",
      year: 2023,
      age: "UA 16+",
      seasons: "2 Seasons",
      language: "Hindi",
      genre: "Fantasy / Comedy",
      image: "https://m.media-amazon.com/images/M/MV5BN2Y4M2ZiNjQtZDYxMS00MGY4LTlhMjYtODdlMTNmYWIzOWE3XkEyXkFqcGc%40._V1_.jpg",
      description: "A sanitation worker discovers he can predict future events.",
    },
    {
      id: 30,
      name: "Bandish Bandits",
      year: 2020,
      age: "UA 13+",
      seasons: "2 Seasons",
      language: "Hindi",
      genre: "Music / Romance",
      image: "https://assets.gqindia.com/photos/67c0409b867e2ac5a474a25a/master/w_1600%2Cc_limit/Bandish-Bandits.jpg",
      description: "Two musicians from different worlds discover love through music.",
    },
  ]

  useEffect(() => {
    if (!search) {
      setLoading(false)
      return
    }

    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [search])

  const filteredMovies = ottMovie.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='search-page'>

      <TextField
        placeholder='Movies, Shows, and more'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='search-bar'
        size='medium'
        fullWidth
      />

      <div className='search-main'>
        {loading ? (
          <CircularProgress className='search-loader' />
        ) : filteredMovies.length === 0 ? (
          <Typography variant='h6' className='no-result'>
            No movies Found
          </Typography>
        ) : (
          filteredMovies.map((movie) => (
            <div
              className={`search-card ${selectedMovie?.id === movie.id ? 'active' : ''}`}
              key={movie.id}
              onMouseEnter={() => setSelectedMovie(movie)}
              onMouseLeave={() => setSelectedMovie(null)}
            >
              <CardMedia
                component='img'
                image={movie.image}
                alt={movie.name}
                className='search-img'
              />

              {selectedMovie?.id === movie.id && (
                <div className='movie-hover'>
                  <CardMedia
                    component='img'
                    image={selectedMovie.backdrop || selectedMovie.image}
                    alt={selectedMovie.name}
                    className='extend-img'
                  />

                  <div className='preview-btn'>
                    <Button
                      variant='contained'
                      className='watch-btn'
                      onClick={() => watch(selectedMovie)}
                    >
                      Watch Now
                    </Button>

                    <div className='preview-info'>
                      <Typography>
                        {selectedMovie.year} • {selectedMovie.age} • {selectedMovie.seasons} • {selectedMovie.language}
                      </Typography>

                      <Typography>
                        {selectedMovie.description}
                      </Typography>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Search
