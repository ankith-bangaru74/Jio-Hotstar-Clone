
import './Categories.styles.scss'
import React, { useState, useRef } from 'react'
import {
  IconButton,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box
} from '@mui/material'

import AddIcon from '@mui/icons-material/Add'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useNavigate } from 'react-router-dom'

function Categories() {
  const navigate = useNavigate()

  // WATCH FUNCTION
  const watch = (movie) => {
    if (!movie) return

    navigate('/watch', {
      state: {
        title: movie.name,
        description: movie.description,
        video:
          movie.video ||
          'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
      }
    })
  }

  const movies = [
    { id: 1, name: "Dhurandhar", year: "2025", age: "A", seasons: "1 Movie", language: "Hindi", image: "https://posters.onesheet.org/posters/current/2025/dhurandhar-2025-hi-theatrical.jpg", description: "An undercover agent enters a dangerous criminal network." },
    { id: 3, name: "Mickey 17", year: "2025", age: "U/A 13+", seasons: "1 Movie", language: "English", image: "https://cdn.mos.cms.futurecdn.net/arkA67QtEJZskZQgacnLEK-1200-80.jpg", description: "An employee faces an extraordinary adventure in space." },
    { id: 4, name: "The Wild Robot", year: "2024", age: "U/A 7+", seasons: "1 Movie", language: "English", image: "https://image.tmdb.org/t/p/original/rKQ4c4lBEmx4PXQZqCqq7YCsmWD.jpg", description: "A robot learns to survive in the wilderness." },
    { id: 5, name: "Salaar", year: "2023", age: "A", seasons: "1 Movie", language: "Telugu", image: "https://xl.movieposterdb.com/24_01/2023/13927994/xl_salaar-cease-fire-part-1-movie-poster_c1249804.jpg", description: "A powerful friendship unfolds in a violent world." },
    { id: 6, name: "Avatar: Fire and Ash", year: "2025", age: "U/A 13+", seasons: "1 Movie", language: "English", image: "https://lumiere-a.akamaihd.net/v1/images/screenshot_2025-09-02_at_14_898ebc1e.png?region=0%2C0%2C984%2C1460", description: "A new adventure unfolds across Pandora." },
    { id: 7, name: "Black Bag", year: "2025", age: "U/A 16+", seasons: "1 Movie", language: "English", image: "https://images.flickdirect.com/movies/black-bag/black-bag-poster.jpg", description: "An intelligence agent faces a test of loyalty." },
    { id: 8, name: "Anora", year: "2024", age: "A", seasons: "1 Movie", language: "English", image: "https://i.pinimg.com/736x/d0/53/64/d053647e902584cfecefd23b129dada6.jpg", description: "A young woman's unexpected relationship changes her life." },
    { id: 9, name: "Weapons", year: "2025", age: "A", seasons: "1 Movie", language: "English", image: "https://cdn.moviefone.com/admin-uploads/highlights/images/weapons-official-poster_1745953260.webp", description: "A mysterious disappearance shocks an entire town." },
    { id: 10, name: "Nosferatu", year: "2024", age: "A", seasons: "1 Movie", language: "English", image: "https://www.wuppertalerkinos.de/fileadmin/wuppertalerkinos/import/_processed_/b/7/csm_fw41big_10_dd0b2976b9.jpg", description: "A terrifying vampire brings darkness to a town." },
    { id: 12, name: "Bugonia", year: "2025", age: "U/A 16+", seasons: "1 Movie", language: "English", image: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/122/2025/09/10090017/Bugonia_OfficialPoster.jpeg", description: "Two men become involved in a strange conspiracy." },
    { id: 13, name: "Michael", year: "2026", age: "U/A 13+", seasons: "1 Movie", language: "English", image: "https://www.newdvdreleasedates.com/images/posters/large/michael-2026-04.jpg", description: "A biographical story about a legendary musical performer." },
    { id: 14, name: "Obsession", year: "2026", age: "A", seasons: "1 Movie", language: "English", image: "https://cineamo-tmdb.b-cdn.net/t/p/w780/qiEvD5GD0mMiWLq82eWXpgOZ8BF.jpg?width=640", description: "A mysterious desire leads to frightening consequences." },
    { id: 15, name: "Hoppers", year: "2026", age: "U/A 7+", seasons: "1 Movie", language: "English", image: "https://dx35vtwkllhj9.cloudfront.net/disney/hoppers/images/regions/ca/onesheet.jpg", description: "An animal lover discovers a way to communicate with animals." },
    { id: 16, name: "Toy Story 5", year: "2026", age: "U/A 7+", seasons: "1 Movie", language: "English", image: "https://i.ebayimg.com/images/g/BOcAAeSwg6Bp7Aew/s-l1600.jpg", description: "The beloved toys embark on another adventure." },
    { id: 17, name: "One Battle After Another", year: "2025", age: "A", seasons: "1 Movie", language: "English", image: "https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/1/6/2/8374261/762950339271.jpg", description: "A former revolutionary gets pulled into a dangerous conflict." },
    { id: 18, name: "Ready or Not 2", year: "2026", age: "A", seasons: "1 Movie", language: "English", image: "https://images.squarespace-cdn.com/content/v1/56a1633ac21b86f80ddeacb4/d0e9e8bd-19fb-438a-8752-b7d1fc024ec2/ready%2Bor%2Bnot%2B2%2Bposter.jpg", description: "A deadly survival game begins again." },
    { id: 19, name: "Moana", year: "2026", age: "U/A 7+", seasons: "1 Movie", language: "English", image: "https://media2.firstshowing.net/firstshowing/img17/moanaliveactbigpost26main591.jpg", description: "Moana sets out on an ocean adventure to protect her people." },
    { id: 20, name: "The Mandalorian and Grogu", year: "2026", age: "U/A 13+", seasons: "1 Movie", language: "English", image: "https://fr.web.img3.acsta.net/img/23/d1/23d1eba5e5a7e8f438c72370cb98c9b7.jpg", description: "A bounty hunter and his young companion explore the galaxy." }
  ]

  const drama = [
    { id: 1, name: "Bepannah", year: "2018", age: "13+", seasons: "1 Season", language: "Hindi", image: "https://m.media-amazon.com/images/M/MV5BNTRhMzA1OTctZWU3Ni00YjIzLTgwOTItYzlkZWQxZmM3MTdjXkEyXkFqcGc%40._V1_.jpg", description: "A romantic story of love, betrayal and second chances." },
    { id: 2, name: "Naagin", year: "2015", age: "13+", seasons: "Multiple Seasons", language: "Hindi", image: "https://m.media-amazon.com/images/M/MV5BYjMyNzkyY2QtNTNiNS00NDdiLWI2NDgtZjU4Yjg4Mjc3OTQ5XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg", description: "A supernatural story of love, revenge and mystery." },
    { id: 3, name: "Mahabharat", year: "2013", age: "U", seasons: "1 Season", language: "Hindi", image: "https://images.plex.tv/photo?scale=1&size=large-1920&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fiu3Kwzcdrh0HjkPD6cKkTIALgvW.jpg", description: "The legendary story of the Pandavas and Kauravas." },
    { id: 4, name: "Yeh Rishta Kya Kehlata Hai", year: "2009", age: "U", seasons: "Multiple Seasons", language: "Hindi", image: "https://metadata-static.plex.tv/7/gracenote/7ffa7089a8e6e909d3a62e0e61787201.jpg", description: "A family story about love, relationships and traditions." },
    { id: 5, name: "Bade Achhe Lagte Hain", year: "2011", age: "U", seasons: "3 Seasons", language: "Hindi", image: "https://1.bp.blogspot.com/-M3TjDi1NrMM/YMoVWebDXSI/AAAAAAAAaxc/ocayELrr_WkbOFarSshmmQ9_BjIM8lcegCLcBGAsYHQ/w1200-h630-p-k-no-nu/Bade-Achhe-Lagte-Hain-2.jpg", description: "A mature love story about marriage and family." },
    { id: 7, name: "Lakshmi Ghar Aayi", year: "2021", age: "U", seasons: "1 Season", language: "Hindi", image: "https://m.media-amazon.com/images/M/MV5BYWY0YTdhZTEtODFjYi00ODlkLWJiOWItMmVlYzRiZDMyN2U2XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg", description: "A young woman's journey through marriage and family life." },
    { id: 8, name: "Kumkum Bhagya", year: "2014", age: "13+", seasons: "Multiple Seasons", language: "Hindi", image: "https://img.airtel.tv/unsafe/fit-in/500x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/ZEEFIVE/SERIES/66ff8f525abda913131e8381/images/PORTRAIT/720x1080withlogo2a5d69a587d14482827b0242e28548b0f64cd8ffa5c1441287afbb48e6772dc7.jpg?o=production", description: "A romantic family drama filled with unexpected twists." },
    { id: 9, name: "Ishqbaaaz", year: "2016", age: "13+", seasons: "1 Season", language: "Hindi", image: "https://images.justwatch.com/backdrop/177268085/s1440/ishqbaaaz", description: "Three brothers face love, family conflicts and challenges." },
    { id: 10, name: "Punar Vivah", year: "2012", age: "U", seasons: "2 Seasons", language: "Hindi", image: "https://image.airtel.tv/MWTV/MWTV_EPISODE_397_30000000549740865_26/LANDSCAPE_43/21CA8227924B801635D8F6BDF6A50A181A95A8B6.jpg", description: "A story about second chances at love and marriage." },
    { id: 11, name: "Anupamaa", year: "2020", age: "U", seasons: "Multiple Seasons", language: "Hindi", image: "https://static.toiimg.com/thumb/resizemode-4%2Cwidth-1280%2Cheight-720%2Cmsid-96448063/96448063.jpg", description: "A woman's journey towards independence and self-respect." },
    { id: 12, name: "Ghum Hai Kisikey Pyaar Meiin", year: "2020", age: "13+", seasons: "Multiple Seasons", language: "Hindi", image: "https://www.jagranimages.com/images/newimg/15052025/Ghum%20Hai%20Kisikey%20Pyaar%20Meiin%281%29.jpg", description: "A complicated story of love, duty and relationships." },
    { id: 13, name: "Uttaran", year: "2008", age: "U", seasons: "1 Season", language: "Hindi", image: "https://img.airtel.tv/unsafe/fit-in/1600x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/69387d38e3d9d500e3a48f61/images/LANDSCAPE_169/1734434492847-h?o=production", description: "Two girls from different backgrounds experience life and rivalry." },
    { id: 14, name: "Sadda Haq", year: "2013", age: "13+", seasons: "2 Seasons", language: "Hindi", image: "https://img.airtel.tv/unsafe/fit-in/500x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/650b2d44ff0eda1acb05c26a/images/119-v?o=production", description: "A young engineering student fights for her dreams." },
    { id: 15, name: "Dear Ishq", year: "2023", age: "13+", seasons: "1 Season", language: "Hindi", image: "https://images.livemint.com/img/2023/01/21/original/Disney--Hotstar-announces-new-show--Dear-Ishq-_1674284392813.jpg", description: "A romantic story between an author and a book editor." },
    { id: 16, name: "Kuch Rang Pyar Ke Aise Bhi", year: "2016", age: "U", seasons: "3 Seasons", language: "Hindi", image: "https://image.tmdb.org/t/p/w780/38iQPks9U1rY0oE4uDogEsyMJlv.jpg", description: "A beautiful story about love, family and relationships." },
    { id: 17, name: "Ishq Mein Marjawan", year: "2017", age: "13+", seasons: "2 Seasons", language: "Hindi", image: "https://i.pinimg.com/736x/02/9c/4f/029c4f76cd9d82789d5b08416b04712a.jpg", description: "A romantic thriller full of secrets and suspense." },
    { id: 18, name: "Balika Vadhu", year: "2008", age: "U", seasons: "2 Seasons", language: "Hindi", image: "https://ilarge.lisimg.com/image/8734827/1032full-balika-vadhu-poster.jpg", description: "A social drama about childhood, marriage and growing up." },
    { id: 19, name: "Pavitra Rishta", year: "2009", age: "U", seasons: "2 Seasons", language: "Hindi", image: "https://akamaividz2.zee5.com/image/upload/w_504%2Ch_756%2Cc_scale%2Cf_webp%2Cq_auto%3Aeco/resources/0-6-133/portrait/1920x770c88c739da92142378023c53c1e4fbd37db77022b80014cfeb6bc7afae31b69ab.jpg", description: "An emotional love story about marriage and family bonds." },
    { id: 20, name: "Imlie", year: "2020", age: "U", seasons: "Multiple Seasons", language: "Hindi", image: "https://resize.indiatv.in/resize/newbucket/1200_-/2023/01/collage-maker-27-jan-2023-11-1674841388.jpg", description: "A young woman's journey through love and family challenges." }
  ]

  const newShows = [
    { id: 1, name: "Bareilly Ke Bacchan", year: "2026", age: "U/A 13+", seasons: "1 Season", language: "Hindi", image: "https://image.tmdb.org/t/p/w1280/a5hGq4iQExCWclEQs3fs9UdGCaZ.jpg", description: "A comedy-drama filled with family moments and entertainment." },
    { id: 2, name: "ViR: The Robot Boy", year: "2026", age: "U", seasons: "1 Season", language: "Hindi", image: "https://image.tmdb.org/t/p/w1280/h1xoHORrmCHsHPZk1ZHH0aXpeWE.jpg", description: "An adventurous robot boy takes on exciting challenges." },
    { id: 3, name: "Heart Beat", year: "2026", age: "U/A 13+", seasons: "1 Season", language: "Tamil", image: "https://image.tmdb.org/t/p/w1280/aHEr565AkKrwC7Q18u3OEjGavyj.jpg", description: "A drama about relationships, emotions and life." },
    { id: 4, name: "The Court", year: "2026", age: "U/A 16+", seasons: "1 Season", language: "English", image: "https://image.tmdb.org/t/p/w1280/iXUtd6fpt15vMZSO6du1uXQjcmv.jpg", description: "A courtroom drama filled with difficult cases and decisions." },
    { id: 5, name: "Mr & Mrs Office", year: "2026", age: "U/A 13+", seasons: "1 Season", language: "Hindi", image: "https://image.tmdb.org/t/p/w1280/demMPIRzA47Px0NaNW0b1F9yxMq.jpg", description: "Workplace relationships and unexpected situations create comedy." },
    { id: 6, name: "Pushpaka Vimanam", year: "2026", age: "U/A 13+", seasons: "1 Season", language: "Telugu", image: "https://image.tmdb.org/t/p/w1280/tEFSs0djTqmJdAQDLUClC9InWxd.jpg", description: "An entertaining story full of unexpected twists." },
    { id: 7, name: "Bigg Boss Malayalam", year: "2026", age: "U/A 16+", seasons: "New Season", language: "Malayalam", image: "https://image.tmdb.org/t/p/w1280/o75RAzbauCTLnchulrlLGK3mTgo.jpg", description: "Contestants live together and compete in exciting challenges." },
    { id: 8, name: "MobLand", year: "2025", age: "A", seasons: "1 Season", language: "English", image: "https://image.tmdb.org/t/p/w1280/5Xc7WpWsgflfgEMoBlf9TmWhfbH.jpg", description: "A crime drama revolving around powerful London crime families." },
    { id: 9, name: "Tulsa King", year: "2025", age: "A", seasons: "3 Seasons", language: "English", image: "https://image.tmdb.org/t/p/w1280/y13WOeZ2rz2Ezpws0RJ0I8sQpG4.jpg", description: "A former mafia boss builds a criminal empire in Tulsa." },
    { id: 10, name: "SpongeBob SquarePants", year: "2025", age: "U", seasons: "Multiple Seasons", language: "English", image: "https://image.tmdb.org/t/p/w1280/5h0EU2lqBb03dp5vtRuUHJwqzem.jpg", description: "SpongeBob and his friends enjoy funny adventures under the sea." },
    { id: 11, name: "Chicago Fire", year: "2025", age: "U/A 13+", seasons: "Multiple Seasons", language: "English", image: "https://image.tmdb.org/t/p/w1280/mqwUwexSSiBGC9qGgu38tKczFn.jpg", description: "Firefighters and paramedics face dangerous situations every day." },
    { id: 12, name: "Chicago P.D.", year: "2025", age: "U/A 16+", seasons: "Multiple Seasons", language: "English", image: "https://image.tmdb.org/t/p/w1280/w7R4ooo2IbOfBKOoMDwaiMGsNQf.jpg", description: "Police officers investigate serious crimes across Chicago." },
    { id: 13, name: "Real Time with Bill Maher", year: "2025", age: "A", seasons: "Multiple Seasons", language: "English", image: "https://image.tmdb.org/t/p/w1280/pbpoLLp4kvnYVfnEGiEhagpJuVZ.jpg", description: "A talk show featuring discussions about current events and politics." },
    { id: 14, name: "9-1-1", year: "2025", age: "U/A 16+", seasons: "Multiple Seasons", language: "English", image: "https://image.tmdb.org/t/p/w1280/u6HuWWohheyzAj5PUn4rBd0eH92.jpg", description: "First responders handle emergencies and life-threatening situations." },
    { id: 15, name: "Survivor", year: "2025", age: "U/A 13+", seasons: "Multiple Seasons", language: "English", image: "https://image.tmdb.org/t/p/w1280/Ap0qf8VxF9DW4NXLYvMmpg3WkdF.jpg", description: "Contestants compete in challenges while trying to survive on an island." },
    { id: 16, name: "Rivals", year: "2025", age: "A", seasons: "1 Season", language: "English", image: "https://image.tmdb.org/t/p/w1280/3p9t1KDo5iXAn1zsSPn8sdtakWs.jpg", description: "A drama about ambition, rivalry and complicated relationships." },
    { id: 17, name: "Chicago Med", year: "2025", age: "U/A 13+", seasons: "Multiple Seasons", language: "English", image: "https://image.tmdb.org/t/p/w1280/s55mHZ5q68IUtRsQdy2oC3nPpG7.jpg", description: "Doctors and nurses handle challenging medical emergencies." },
    { id: 18, name: "WAR", year: "2025", age: "U/A 16+", seasons: "1 Season", language: "Hindi", image: "https://image.tmdb.org/t/p/w1280/AtCR5LMuvwepTi1kipKq878Rbuq.jpg", description: "An action-packed story involving danger, conflict and suspense." },
    { id: 19, name: "The Patrick Star Show", year: "2025", age: "U", seasons: "Multiple Seasons", language: "English", image: "https://image.tmdb.org/t/p/w1280/44zbV1t35gxgcSN7sTlkUY85GC9.jpg", description: "Patrick Star hosts his own funny and unusual television show." },
    { id: 20, name: "Georgie & Mandy's First Marriage", year: "2025", age: "U/A 13+", seasons: "1 Season", language: "English", image: "https://image.tmdb.org/t/p/w1280/3z2mYFxUkzanb2eeIcVyfJq0G3q.jpg", description: "A young couple navigates marriage, family and everyday life." }
  ]

  const top10Movies = [
    { id: 1, name: "Avengers: Endgame", year: 2019, age: "UA 13+", seasons: "3h 1m", language: "English", genre: "Action / Adventure", image: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg", description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe." },
    { id: 2, name: "Obsession", year: 2026, age: "A", seasons: "Movie", language: "English", genre: "Horror / Thriller", image: "https://cdn.taposapp.com/poster/600x900/wRj24muuaHHZxKb09P-vpMYA2b_4pf6RayNzDHqp_UY.jpg", description: "A mysterious wish takes a terrifying turn, leading to unexpected consequences." },
    { id: 3, name: "I'm Game", year: 2026, age: "UA 16+", seasons: "Movie", language: "Malayalam", genre: "Action / Thriller", image: "https://m.media-amazon.com/images/M/MV5BZGQ4MzVhMGEtZTQxNy00NDgzLWFiMTMtYWEwMDNiZDFmNGYwXkEyXkFqcGc%40._V1_.jpg", description: "An intense action thriller filled with suspense, challenges and unexpected twists." },
    { id: 4, name: "How to Have Sex", year: 2023, age: "A", seasons: "1h 31m", language: "English", genre: "Drama", image: "https://www.cinestar.de/media/cache/web_l/media/filmbilder/h/how-to-have-sex/how-to-have-sex-62e50511f9448578d362ec5b3346e642_poster.jpg", description: "Three British teenagers head to Greece for a summer holiday that changes their lives." },
    { id: 5, name: "The Kingdom", year: 2007, age: "A", seasons: "1h 50m", language: "English", genre: "Action / Thriller", image: "https://images.contentstack.io/v3/assets/blt13adb7e2033fcee5/blt49aa85b1123198b5/691c8912de8bde6630476d36/TheKingdom_Poster_2000x3000_uaa.jpg?width=2560", description: "An FBI team travels to Saudi Arabia to investigate a deadly terrorist attack and uncover a dangerous conspiracy." },
    { id: 6, name: "Michael", year: 2026, age: "UA 13+", seasons: "Movie", language: "English", genre: "Biography / Drama", image: "https://m.media-amazon.com/images/M/MV5BNzllNmRlN2EtMDQyOC00ODJjLTg4OWQtZDNmNGU3YzlkNjc1XkEyXkFqcGc%40._V1_.jpg", description: "A biographical film exploring the life, music and extraordinary journey of Michael Jackson." },
    { id: 7, name: "The Super Mario Galaxy Movie", year: 2026, age: "U", seasons: "Movie", language: "English", genre: "Animation / Adventure", image: "https://images.contentstack.io/v3/assets/blt13adb7e2033fcee5/bltc1902be5a724814d/69f2494ff44fdff368fd7f76/SuperMarioGalaxyMovie_keyart_Poster.jpg?width=2560", description: "Mario and his friends embark on an exciting adventure across the galaxy." },
    { id: 8, name: "Meet the Parents", year: 2000, age: "UA 13+", seasons: "1h 48m", language: "English", genre: "Comedy / Romance", image: "https://images.contentstack.io/v3/assets/blt13adb7e2033fcee5/blte4d85b62e940f310/6aed0ac0a9851dcd7b0bd0f5/MeettheParents_keyart_poster_2000x3000.jpg?width=2560", description: "A man tries to win over his girlfriend's father during an unforgettable family visit." },
    { id: 9, name: "One Battle After Another", year: 2025, age: "A", seasons: "2h 41m", language: "English", genre: "Action / Drama", image: "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/86/ad670574239450a74e728a6c99e3da3e_original.jpg?t=1758620598", description: "A former revolutionary is pulled back into a dangerous world while searching for his daughter." },
    { id: 10, name: "Bethlehem Kudumba Unit", year: 2026, age: "UA 13+", seasons: "Movie", language: "Malayalam", genre: "Comedy / Drama", image: "https://cdn.district.in/movies-assets/images/cinema/Bethlehem-Kudumba-Unit-3c611200-6ed5-11f1-9444-c504df2f3dc4.jpg?im=Resize%2Cwidth%3D400", description: "A Malayalam family entertainer filled with relationships, humour and emotional moments." }
  ]

  const topTrendingMovies = [
    { id: 1, rank: 1, name: "Obsession", year: 2026, age: "A", seasons: "1h 48m", language: "English", genre: "Horror / Thriller", image: "https://image.tmdb.org/t/p/w500/26hkYwRR6VsdjoelsOLpB5Cx1HD.jpg", description: "A psychological thriller exploring dark secrets and dangerous fixations." },
    { id: 2, rank: 2, name: "Avengers Endgame: Encore", year: 2026, age: "UA 16+", seasons: "3h 10m", language: "English", genre: "Action / Sci-Fi", image: "https://image.tmdb.org/t/p/w500/5yUwsjgWlYCIF5ck1NaUr5zEGg7.jpg", description: "The surviving Avengers assemble once more to reverse Thanos's devastation." },
    { id: 3, rank: 3, name: "Bethlehem Kudumba Unit", year: 2026, age: "UA 13+", seasons: "2h 35m", language: "Malayalam", genre: "Romance / Comedy", image: "https://image.tmdb.org/t/p/w500/5y7LFaq6YA4wMYmNAgRVtgdOL8G.jpg", description: "A heartwarming rom-com about first love and second chances." },
    { id: 4, rank: 4, name: "Dhurandhar", year: 2025, age: "A", seasons: "3h 34m", language: "Hindi", genre: "Action / Crime", image: "https://www.impawards.com/intl/india/2025/posters/dhurandhar.jpg", description: "An intelligence agent goes deep undercover to dismantle a syndicate." },
    { id: 5, rank: 5, name: "Disclosure Day", year: 2026, age: "UA 16+", seasons: "2h 26m", language: "English", genre: "Sci-Fi / Thriller", image: "https://image.tmdb.org/t/p/w500/4KZXlZ5tTT6ghbW77gS4hSLkCd7.jpg", description: "A global sci-fi thriller dealing with monumental extraterrestrial truths." },
    { id: 6, rank: 6, name: "Batman: Knightfall", year: 2026, age: "UA 16+", seasons: "1h 18m", language: "English", genre: "Action / Animation", image: "https://static.dc.com/2026-08/BatmanKnightfall_ProdPage_Gallery_16x9_01.jpg?w=1200", description: "The Dark Knight faces his ultimate physical and mental breakdown test." },
    { id: 7, rank: 7, name: "Weapons", year: 2025, age: "A", seasons: "2h 08m", language: "English", genre: "Mystery / Thriller", image: "https://image.tmdb.org/t/p/w500/atUtWrDlLzT1yeVK2EoYtvbS963.jpg", description: "An interconnected multi-story horror mystery involving missing people." },
    { id: 8, rank: 8, name: "The Super Mario Galaxy Movie", year: 2026, age: "UA", seasons: "1h 38m", language: "English", genre: "Animation / Adventure", image: "https://image.tmdb.org/t/p/w500/5ewrnKp4TboU4hTLT5cWO350mHj.jpg", description: "Mario and friends embark on a brand new cosmic space journey." },
    { id: 9, rank: 9, name: "Interstellar", year: 2014, age: "UA 13+", seasons: "2h 49m", language: "English", genre: "Sci-Fi / Drama", image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
    { id: 10, rank: 10, name: "Fifty Shades of Grey", year: 2015, age: "A", seasons: "2h 05m", language: "English", genre: "Romance / Drama", image: "https://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg", description: "Literature student Anastasia Steele's life changes forever when she meets Christian Grey." }
  ]

  const [selectedMovie, setSelectedMovie] = useState(null)
  const [selectedTopMovie, setSelectedTopMovie] = useState(null)
  const [seletedTrending, setSelectedTrending] = useState(null)
  const [selectedNewShows, setSelectedNewShows] = useState(null)
  const [selectedDrama, setSelectedDrama] = useState(null)

  const topMoviesContaienrRef = useRef(null)
  const dramaContainerRef = useRef(null)
  const movieContainerRef = useRef(null)
  const newShowsContainerRef = useRef(null)
  const topTrendingMoviesContainerRef = useRef(null)

  const scrollMovies = (direction, containerRef) => {
    const container = containerRef.current

    if (container) {
      container.scrollBy({
        left: direction === 'right' ? 700 : -700,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div>
      <div className='home-main'>
        <div className='ads-title'>
          <CardMedia
            image='https://shifu.hotstarext.com/SOURCE/VOD/cd-2026-11-12/MahabharatEDYS2DTD_BB_W-dd643544-93bc-449c-afb6-5ee9b74361ec.jpg'
            component='img'
            alt='ads'
            className='img-ads'
          />

          <CardContent>
            <div className='ads-content'>
              <CardMedia
                image='https://brand-img1.hotstarext.com/image/upload/v1739279601/YR/Growth_120x120_Square_Logo.png'
                alt='jio-hot'
                component='img'
                className='jio-star'
              />

              <div className='logo-side'>
                <Typography className='mahabarat-title'>
                  Mahabarat
                </Typography>

                <Typography className='mahabarat-title-2'>
                  Ek Dharmayudh S2
                </Typography>
              </div>
            </div>

            <Typography className='main-ads-title'>
              Celebrate this festive season with a curated collection of top picks
            </Typography>
          </CardContent>
        </div>

        <CardMedia
          image='https://image.tmdb.org/t/p/original/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg'
          component='img'
          alt='main-img'
          className='title-img'
        />

        <div className='moana-content'>
          <CardContent>
            <CardMedia
              image='https://image.tmdb.org/t/p/w500/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg'
              component='img'
              alt='moatitle'
              className='moana-title'
            />

            <span className='moana-span'>Newly Added</span>

            <Typography className='moana-time'>
              2026
              <li>U/7+</li>
              <li>1h 55m</li>
              <li>4 languages</li>
            </Typography>

            <Typography className='moana-info'>
              In Disney’s live-action adventure, Moana seeks to save her people.
            </Typography>

            <Typography>
              Action | Adeventure | kids | fantasy
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              className='watch-btn'
              variant='contained'
              startIcon={<PlayArrowIcon />}
              onClick={() => watch(movies.find(movie => movie.name === 'Moana'))}
            >
              Subscribe To Watch
            </Button>

            <Button className='addIcon'>
              <AddIcon />
            </Button>
          </CardActions>
        </div>
      </div>

      {/* NOW ON JIOHOTSTAR */}
      <div className='movies-section' onMouseLeave={() => setSelectedMovie(null)}>
        <Typography className='section-titl' variant='h6'>
          Now on JioHotstar
        </Typography>

        <Box className='movie-row-wrapper'>
          <IconButton className='scroll-arrow left-arrow' onClick={() => scrollMovies('left', movieContainerRef)}>
            <ChevronLeftIcon />
          </IconButton>

          <div className='home-movies' ref={movieContainerRef}>
            {movies.map(movie => (
              <div
                key={movie.id}
                className={`movie-card ${selectedMovie?.id === movie.id ? 'active' : ''}`}
                onMouseEnter={() => setSelectedMovie(movie)}
              >
                <CardMedia component='img' image={movie.image} alt={movie.name} className='main-img' />

                {selectedMovie?.id === movie.id && (
                  <div className='movie-hover-card'>
                    <CardMedia
                      component='img'
                      image={selectedMovie.backdrop || selectedMovie.image}
                      alt={selectedMovie.name}
                      className='preview-img'
                    />

                    <div className='preview-action'>
                      <Button
                        variant='contained'
                        className='watch-btn'
                        startIcon={<PlayArrowIcon />}
                        onClick={() => watch(selectedMovie)}
                      >
                        Watch Now
                      </Button>
                    </div>

                    <div className='preview-content'>
                      <Typography className='side-info'>
                        {selectedMovie.year} • {selectedMovie.age} • {selectedMovie.seasons} • {selectedMovie.language}
                      </Typography>

                      <Typography>{selectedMovie.description}</Typography>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <IconButton className='scroll-arrow right-arrow' onClick={() => scrollMovies('right', movieContainerRef)}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </div>

      {/* LATEST DRAMA */}
      <div className='movies-section' onMouseLeave={() => setSelectedDrama(null)}>
        <Typography className='section-titl' variant='h6'>
          Latest Drama
        </Typography>

        <Box className='movie-row-wrapper'>
          <IconButton className='scroll-arrow left-arrow' onClick={() => scrollMovies('left', dramaContainerRef)}>
            <ChevronLeftIcon />
          </IconButton>

          <div className='home-movies' ref={dramaContainerRef}>
            {drama.map(item => (
              <div
                key={item.id}
                className={`movie-card ${selectedDrama?.id === item.id ? 'active' : ''}`}
                onMouseEnter={() => setSelectedDrama(item)}
              >
                <CardMedia component='img' image={item.image} alt={item.name} className='main-img' />

                {selectedDrama?.id === item.id && (
                  <div className='movie-hover-card'>
                    <CardMedia
                      component='img'
                      image={selectedDrama.backdrop || selectedDrama.image}
                      alt={selectedDrama.name}
                      className='preview-img'
                    />

                    <div className='preview-action'>
                      <Button
                        variant='contained'
                        className='watch-btn'
                        startIcon={<PlayArrowIcon />}
                        onClick={() => watch(selectedDrama)}
                      >
                        Watch Now
                      </Button>
                    </div>

                    <div className='preview-content'>
                      <Typography className='side-info'>
                        {selectedDrama.year} • {selectedDrama.age} • {selectedDrama.seasons} • {selectedDrama.language}
                      </Typography>

                      <Typography>{selectedDrama.description}</Typography>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <IconButton className='scroll-arrow right-arrow' onClick={() => scrollMovies('right', dramaContainerRef)}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </div>

      {/* NEWLY ADDED SHOWS */}
      <div className='movies-section' onMouseLeave={() => setSelectedNewShows(null)}>
        <Typography className='section-titl' variant='h6'>
          Newly Added Shows
        </Typography>

        <Box className='movie-row-wrapper'>
          <IconButton className='scroll-arrow left-arrow' onClick={() => scrollMovies('left', newShowsContainerRef)}>
            <ChevronLeftIcon />
          </IconButton>

          <div className='home-movies' ref={newShowsContainerRef}>
            {newShows.map(show => (
              <div
                key={show.id}
                className={`movie-card ${selectedNewShows?.id === show.id ? 'active' : ''}`}
                onMouseEnter={() => setSelectedNewShows(show)}
              >
                <CardMedia component='img' image={show.image} alt={show.name} className='main-img' />

                {selectedNewShows?.id === show.id && (
                  <div className='movie-hover-card'>
                    <CardMedia
                      component='img'
                      image={selectedNewShows.backdrop || selectedNewShows.image}
                      alt={selectedNewShows.name}
                      className='preview-img'
                    />

                    <div className='preview-action'>
                      <Button
                        variant='contained'
                        className='watch-btn'
                        startIcon={<PlayArrowIcon />}
                        onClick={() => watch(selectedNewShows)}
                      >
                        Watch Now
                      </Button>
                    </div>

                    <div className='preview-content'>
                      <Typography className='side-info'>
                        {selectedNewShows.year} • {selectedNewShows.age} • {selectedNewShows.seasons} • {selectedNewShows.language}
                      </Typography>

                      <Typography>{selectedNewShows.description}</Typography>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <IconButton className='scroll-arrow right-arrow' onClick={() => scrollMovies('right', newShowsContainerRef)}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </div>

      {/* TOP POPULAR MOVIES */}
      <div className='movies-section' onMouseLeave={() => setSelectedTrending(null)}>
        <Typography className='section-titl' variant='h6'>
          Top Popular Movies
        </Typography>

        <Box className='movie-row-wrapper'>
          <IconButton className='scroll-arrow left-arrow' onClick={() => scrollMovies('left', topTrendingMoviesContainerRef)}>
            <ChevronLeftIcon />
          </IconButton>

          <div className='home-movies' ref={topTrendingMoviesContainerRef}>
            {topTrendingMovies.map(movie => (
              <div
                key={movie.id}
                className={`movie-card ${seletedTrending?.id === movie.id ? 'active' : ''}`}
                onMouseEnter={() => setSelectedTrending(movie)}
              >
                <CardMedia component='img' image={movie.image} alt={movie.name} className='main-img' />

                {seletedTrending?.id === movie.id && (
                  <div className='movie-hover-card'>
                    <CardMedia
                      component='img'
                      image={seletedTrending.backdrop || seletedTrending.image}
                      alt={seletedTrending.name}
                      className='preview-img'
                    />

                    <div className='preview-action'>
                      <Button
                        variant='contained'
                        className='watch-btn'
                        startIcon={<PlayArrowIcon />}
                        onClick={() => watch(seletedTrending)}
                      >
                        Watch Now
                      </Button>
                    </div>

                    <div className='preview-content'>
                      <Typography className='side-info'>
                        {seletedTrending.year} • {seletedTrending.age} • {seletedTrending.seasons} • {seletedTrending.language}
                      </Typography>

                      <Typography>{seletedTrending.description}</Typography>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <IconButton className='scroll-arrow right-arrow' onClick={() => scrollMovies('right', topTrendingMoviesContainerRef)}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </div>

      {/* TOP 10 MOVIES */}
      <div className='movies-section' onMouseLeave={() => setSelectedTopMovie(null)}>
        <Typography className='section-title' variant='h6'>
          Top 10 Movies
        </Typography>

        <Box className='movie-row-wrapper'>
          <IconButton className='scroll-arrow left-arrow' onClick={() => scrollMovies('left', topMoviesContaienrRef)}>
            <ChevronLeftIcon />
          </IconButton>

          <div className='home-movies' ref={topMoviesContaienrRef}>
            {top10Movies.map(movie => (
              <div
                key={movie.id}
                className={`movie-card ${selectedTopMovie?.id === movie.id ? 'active' : ''}`}
                onMouseEnter={() => setSelectedTopMovie(movie)}
              >
                <CardMedia
                  component='img'
                  image={movie.image}
                  alt={movie.name}
                  className='main-img'
                />

                {selectedTopMovie?.id === movie.id && (
                  <div className='movie-hover-card'>
                    <CardMedia
                      component='img'
                      image={selectedTopMovie.backdrop || selectedTopMovie.image}
                      alt={selectedTopMovie.name}
                      className='preview-img'
                    />

                    <div className='preview-action'>
                      <Button
                        className='watch-btn'
                        startIcon={<PlayArrowIcon />}
                        variant='contained'
                        onClick={() => watch(selectedTopMovie)}
                      >
                        Watch Now
                      </Button>
                    </div>

                    <div className='preview-content'>
                      <Typography className='side-info'>
                        {selectedTopMovie.year} • {selectedTopMovie.age} • {selectedTopMovie.seasons} • {selectedTopMovie.language}
                      </Typography>

                      <Typography>{selectedTopMovie.description}</Typography>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <IconButton className='scroll-arrow right-arrow' onClick={() => scrollMovies('right', topMoviesContaienrRef)}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </div>
    </div>
  )
}

export default Categories
