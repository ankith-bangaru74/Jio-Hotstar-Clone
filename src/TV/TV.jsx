import React from 'react'
import { useState } from 'react';
import './TV.styles.scss'
import {
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,  Box, 
  Card
} from '@mui/material';
import { } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRef } from 'react';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from 'react-router-dom';


const drama = [
  {
    id: 1,
    name: "Bepannah",
    year: "2018",
    age: "13+",
    seasons: "1 Season",
    language: "Hindi",
    image: "https://m.media-amazon.com/images/M/MV5BNTRhMzA1OTctZWU3Ni00YjIzLTgwOTItYzlkZWQxZmM3MTdjXkEyXkFqcGc%40._V1_.jpg",
    description: "A romantic story of love, betrayal and second chances.",
  },
  {
    id: 2,
    name: "Naagin",
    year: "2015",
    age: "13+",
    seasons: "Multiple Seasons",
    language: "Hindi",
    image: "https://m.media-amazon.com/images/M/MV5BYjMyNzkyY2QtNTNiNS00NDdiLWI2NDgtZjU4Yjg4Mjc3OTQ5XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
    description: "A supernatural story of love, revenge and mystery.",
  },
  {
    id: 3,
    name: "Mahabharat",
    year: "2013",
    age: "U",
    seasons: "1 Season",
    language: "Hindi",
    image: "https://images.plex.tv/photo?scale=1&size=large-1920&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fiu3Kwzcdrh0HjkPD6cKkTIALgvW.jpg",
    description: "The legendary story of the Pandavas and Kauravas.",
  },
  {
    id: 4,
    name: "Yeh Rishta Kya Kehlata Hai",
    year: "2009",
    age: "U",
    seasons: "Multiple Seasons",
    language: "Hindi",
    image: "https://metadata-static.plex.tv/7/gracenote/7ffa7089a8e6e909d3a62e0e61787201.jpg",
    description: "A family story about love, relationships and traditions.",
  },
  {
    id: 5,
    name: "Bade Achhe Lagte Hain",
    year: "2011",
    age: "U",
    seasons: "3 Seasons",
    language: "Hindi",
    image: "https://1.bp.blogspot.com/-M3TjDi1NrMM/YMoVWebDXSI/AAAAAAAAaxc/ocayELrr_WkbOFarSshmmQ9_BjIM8lcegCLcBGAsYHQ/w1200-h630-p-k-no-nu/Bade-Achhe-Lagte-Hain-2.jpg",
    description: "A mature love story about marriage and family.",
  },
  {
    id: 7,
    name: "Lakshmi Ghar Aayi",
    year: "2021",
    age: "U",
    seasons: "1 Season",
    language: "Hindi",
    image: "https://m.media-amazon.com/images/M/MV5BYWY0YTdhZTEtODFjYi00ODlkLWJiOWItMmVlYzRiZDMyN2U2XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
    description: "A young woman's journey through marriage and family life.",
  },
  {
    id: 8,
    name: "Kumkum Bhagya",
    year: "2014",
    age: "13+",
    seasons: "Multiple Seasons",
    language: "Hindi",
    image: "https://img.airtel.tv/unsafe/fit-in/500x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/ZEEFIVE/SERIES/66ff8f525abda913131e8381/images/PORTRAIT/720x1080withlogo2a5d69a587d14482827b0242e28548b0f64cd8ffa5c1441287afbb48e6772dc7.jpg?o=production",
    description: "A romantic family drama filled with unexpected twists.",
  },
  {
    id: 9,
    name: "Ishqbaaaz",
    year: "2016",
    age: "13+",
    seasons: "1 Season",
    language: "Hindi",
    image: "https://images.justwatch.com/backdrop/177268085/s1440/ishqbaaaz",
    description: "Three brothers face love, family conflicts and challenges.",
  },
  {
    id: 10,
    name: "Punar Vivah",
    year: "2012",
    age: "U",
    seasons: "2 Seasons",
    language: "Hindi",
    image: "https://image.airtel.tv/MWTV/MWTV_EPISODE_397_30000000549740865_26/LANDSCAPE_43/21CA8227924B801635D8F6BDF6A50A181A95A8B6.jpg",
    description: "A story about second chances at love and marriage.",
  },
  {
    id: 11,
    name: "Anupamaa",
    year: "2020",
    age: "U",
    seasons: "Multiple Seasons",
    language: "Hindi",
    image: "https://static.toiimg.com/thumb/resizemode-4%2Cwidth-1280%2Cheight-720%2Cmsid-96448063/96448063.jpg",
    description: "A woman's journey towards independence and self-respect.",
  },
  {
    id: 12,
    name: "Ghum Hai Kisikey Pyaar Meiin",
    year: "2020",
    age: "13+",
    seasons: "Multiple Seasons",
    language: "Hindi",
    image: "https://www.jagranimages.com/images/newimg/15052025/Ghum%20Hai%20Kisikey%20Pyaar%20Meiin%281%29.jpg",
    description: "A complicated story of love, duty and relationships.",
  },
  {
    id: 13,
    name: "Uttaran",
    year: "2008",
    age: "U",
    seasons: "1 Season",
    language: "Hindi",
    image: "https://img.airtel.tv/unsafe/fit-in/1600x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/69387d38e3d9d500e3a48f61/images/LANDSCAPE_169/1734434492847-h?o=production",
    description: "Two girls from different backgrounds experience life and rivalry.",
  },
  {
    id: 14,
    name: "Sadda Haq",
    year: "2013",
    age: "13+",
    seasons: "2 Seasons",
    language: "Hindi",
    image: "https://img.airtel.tv/unsafe/fit-in/500x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/650b2d44ff0eda1acb05c26a/images/119-v?o=production",
    description: "A young engineering student fights for her dreams.",
  },
  {
    id: 15,
    name: "Dear Ishq",
    year: "2023",
    age: "13+",
    seasons: "1 Season",
    language: "Hindi",
    image: "https://images.livemint.com/img/2023/01/21/original/Disney--Hotstar-announces-new-show--Dear-Ishq-_1674284392813.jpg",
    description: "A romantic story between an author and a book editor.",
  },
  {
    id: 16,
    name: "Kuch Rang Pyar Ke Aise Bhi",
    year: "2016",
    age: "U",
    seasons: "3 Seasons",
    language: "Hindi",
    image: "https://image.tmdb.org/t/p/w780/38iQPks9U1rY0oE4uDogEsyMJlv.jpg",
    description: "A beautiful story about love, family and relationships.",
  },
  {
    id: 17,
    name: "Ishq Mein Marjawan",
    year: "2017",
    age: "13+",
    seasons: "2 Seasons",
    language: "Hindi",
    image: "https://i.pinimg.com/736x/02/9c/4f/029c4f76cd9d82789d5b08416b04712a.jpg",
    description: "A romantic thriller full of secrets and suspense.",
  },
  {
    id: 18,
    name: "Balika Vadhu",
    year: "2008",
    age: "U",
    seasons: "2 Seasons",
    language: "Hindi",
    image: "https://ilarge.lisimg.com/image/8734827/1032full-balika-vadhu-poster.jpg",
    description: "A social drama about childhood, marriage and growing up.",
  },
  {
    id: 19,
    name: "Pavitra Rishta",
    year: "2009",
    age: "U",
    seasons: "2 Seasons",
    language: "Hindi",
    image: "https://akamaividz2.zee5.com/image/upload/w_504%2Ch_756%2Cc_scale%2Cf_webp%2Cq_auto%3Aeco/resources/0-6-133/portrait/1920x770c88c739da92142378023c53c1e4fbd37db77022b80014cfeb6bc7afae31b69ab.jpg",
    description: "An emotional love story about marriage and family bonds.",
  },
  {
    id: 20,
    name: "Imlie",
    year: "2020",
    age: "U",
    seasons: "Multiple Seasons",
    language: "Hindi",
    image: "https://resize.indiatv.in/resize/newbucket/1200_-/2023/01/collage-maker-27-jan-2023-11-1674841388.jpg",
    description: "A young woman's journey through love and family challenges.",
  },
];

const realityShows = [
  {
    id: 1,
    name: "Bigg Boss",
    year: "2006",
    age: "U/A 16+",
    seasons: "20 Seasons",
    language: "Hindi",
    image: "https://images.ottplay.com/images/reality-1752498443.jpg?height=675&impolicy=ottplay-202501_high&width=1200",
    description: "Contestants live together in a house, facing tasks, nominations and eliminations."
  },
  {
    id: 2,
    name: "Laughter Chefs",
    year: "2024",
    age: "U/A 13+",
    seasons: "3 Seasons",
    language: "Hindi",
    image: "https://m.media-amazon.com/images/M/MV5BYzY2YzBlMDctMWJlMi00NzFiLTliMTctMmM3MTdhOTU3N2RkXkEyXkFqcGc%40._V1_.jpg",
    description: "Celebrity contestants combine cooking challenges with hilarious comedy."
  },
  {
    id: 3,
    name: "Khatron Ke Khiladi",
    year: "2008",
    age: "U/A 13+",
    seasons: "15 Seasons",
    language: "Hindi",
    image: "https://i.timesnowhindi.com/stories/khatron.jpg",
    description: "Celebrity contestants face extreme stunts and terrifying challenges."
  },
  {
    id: 4,
    name: "MTV Roadies",
    year: "2003",
    age: "U/A 16+",
    seasons: "21 Seasons",
    language: "Hindi",
    image: "https://admin.tellychakkar.com/sites/www.tellychakkar.com/files/s3fs-public/images/story/2026/05/20/New%20Project%20%2830%29.jpg",
    description: "Young contestants compete in demanding physical and mental challenges."
  },
  {
    id: 5,
    name: "MTV Splitsvilla",
    year: "2008",
    age: "U/A 16+",
    seasons: "16 Seasons",
    language: "Hindi",
    image: "https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FktzskTR8C2DWOLrKbSTNSFsSzxA.jpg",
    description: "Singles enter a villa to find love while competing in relationship challenges."
  },
  {
    id: 6,
    name: "MasterChef India",
    year: "2010",
    age: "U/A 7+",
    seasons: "9 Seasons",
    language: "Hindi",
    image: "https://cf-img-a-in.tosshub.com/sites/visualstory/stories/2023_01/story_16792/assets/12.png?time=1672644502",
    description: "Talented home cooks compete to become India's next MasterChef."
  },
  {
    id: 7,
    name: "Celebrity MasterChef",
    year: "2025",
    age: "U/A 7+",
    seasons: "1 Season",
    language: "Hindi",
    image: "https://images.ottplay.com/images/big/best-culinary-shows-on-ott-1742291694.jpeg?height=675&impolicy=ottplay-202501_high&width=1200",
    description: "Celebrity contestants showcase their cooking skills in exciting competitions."
  },
  {
    id: 8,
    name: "MTV Hustle",
    year: "2019",
    age: "U/A 13+",
    seasons: "5 Seasons",
    language: "Hindi",
    image: "https://images.justwatch.com/poster/152531165/s718/season-1.%7Bformat%7D",
    description: "India's finest underground rappers compete to become hip-hop stars."
  },
  {
    id: 9,
    name: "Koffee with Karan",
    year: "2004",
    age: "U/A 13+",
    seasons: "8 Seasons",
    language: "Hindi",
    image: "https://images.mid-day.com/images/images/2023/oct/KKKs8.jpg",
    description: "Bollywood celebrities share stories, secrets and fun conversations."
  },
  {
    id: 10,
    name: "Bigg Boss Telugu",
    year: "2017",
    age: "U/A 16+",
    seasons: "9 Seasons",
    language: "Telugu",
    image: "https://m.media-amazon.com/images/M/MV5BMmI3YjQyM2EtZjYzMS00ZWI3LWI2NmUtNTE3NWE4ZTQ4YmE0XkEyXkFqcGc%40._V1_.jpg",
    description: "Telugu celebrities live together and compete through daily challenges."
  },
  {
    id: 11,
    name: "Bigg Boss Tamil",
    year: "2017",
    age: "U/A 16+",
    seasons: "8 Seasons",
    language: "Tamil",
    image: "https://metadata-static.plex.tv/0/gracenote/040e89ea80767c8bb85aca399dae19b9.jpg",
    description: "Contestants face emotional challenges, tasks and public voting."
  },
  {
    id: 12,
    name: "Cooku with Comali",
    year: "2019",
    age: "U/A 13+",
    seasons: "5 Seasons",
    language: "Tamil",
    image: "https://images.justwatch.com/poster/318241187/s718/season-5.jpg",
    description: "Professional cooking meets comedy in this entertaining competition."
  },
  {
    id: 13,
    name: "Temptation Island India",
    year: "2023",
    age: "U/A 16+",
    seasons: "1 Season",
    language: "Hindi",
    image: "https://m.media-amazon.com/images/M/MV5BZmYxMTg5ZjgtMmM5Zi00MmQzLWFmZWItM2Y2MGUzNWM1ZGQ2XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
    description: "Couples test their relationships while facing difficult romantic choices."
  },
  {
    id: 14,
    name: "Dance Plus",
    year: "2015",
    age: "U",
    seasons: "6 Seasons",
    language: "Hindi",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201707/dance-plus-story%2Bfb_647_070217112939.jpg?size=1200%3A675",
    description: "Talented dancers compete with spectacular performances and choreography."
  },
  {
    id: 15,
    name: "India's Got Talent",
    year: "2009",
    age: "U",
    seasons: "11 Seasons",
    language: "Hindi",
    image: "https://images.plex.tv/photo?scale=2&size=medium-360&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fioidmq4jfbZsQJnhA4kJTw5GRiA.jpg",
    description: "Performers from across India showcase their extraordinary talents."
  },
  {
    id: 16,
    name: "Super Dancer",
    year: "2016",
    age: "U",
    seasons: "4 Seasons",
    language: "Hindi",
    image: "https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FAin8nxR1sEmEuiNIRR8In4IIrFe.jpg",
    description: "Young dancers showcase their skills and compete for the championship."
  },
  {
    id: 17,
    name: "The Kapil Sharma Show",
    year: "2016",
    age: "U/A 13+",
    seasons: "4 Seasons",
    language: "Hindi",
    image: "https://m.media-amazon.com/images/M/MV5BZDlmM2IxOWYtNmYyMC00NTE0LTk5M2MtNDRkMTU0YTVlZWZmXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
    description: "Celebrities join Kapil Sharma for comedy, conversations and entertainment."
  },
  {
    id: 18,
    name: "Shark Tank India",
    year: "2021",
    age: "U/A 7+",
    seasons: "5 Seasons",
    language: "Hindi",
    image: "https://images.justwatch.com/poster/326921791/s718/season-4.jpg",
    description: "Entrepreneurs pitch their business ideas to successful investors."
  },
  {
    id: 19,
    name: "The 50",
    year: "2026",
    age: "U/A 16+",
    seasons: "1 Season",
    language: "Hindi",
    image: "https://thedailyguardian.com/wp-content/uploads/2025/12/upcoming-reality-tv-shows-on-ott-platforms.png",
    description: "Fifty contestants compete in a high-stakes reality competition."
  },
  {
    id: 20,
    name: "Dhamaal with Pati Patni Aur Panga",
    year: "2025",
    age: "U/A 13+",
    seasons: "1 Season",
    language: "Hindi",
    image: "https://img.airtel.tv/unsafe/fit-in/1600x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/690e0b58e8538d5c8a62bdb5/images/LANDSCAPE_169/1763361544967-h?o=production",
    description: "Celebrity couples take on entertaining challenges and relationship games."
  }
];

const channels = [
  { id: 1, name: "Star Plus", img: "https://www.tvlogo.org/india/star-plus-in.png" },
  { id: 2, name: "Colors TV", img: "https://www.tvlogo.org/india/colors-in.png" },
  { id: 3, name: "Star Bharat", img: "https://www.tvlogo.org/india/star-bharat-in.png" },
  { id: 4, name: "Star Gold", img: "https://www.tvlogo.org/india/star-gold-in.png" },
  { id: 5, name: "Star Sports 1", img: "https://www.tvlogo.org/india/star-sports-1-in.png" },
  { id: 6, name: "Star Vijay", img: "https://www.tvlogo.org/india/vijay-tv-in.png" },
  { id: 7, name: "Star Maa", img: "https://www.tvlogo.org/india/star-maa-in.png" },
  { id: 8, name: "Asianet", img: "https://www.tvlogo.org/india/asianet-in.png" },
  { id: 9, name: "Star Jalsha", img: "https://www.tvlogo.org/india/star-jalsha-in.png" },
  { id: 10, name: "Star Pravah", img: "https://www.tvlogo.org/india/star-pravah-in.png" },
  { id: 11, name: "Star Suvarna", img: "https://www.tvlogo.org/india/star-suvarna-in.png" },
  { id: 12, name: "Sony Entertainment", img: "https://www.tvlogo.org/india/sony-entertainment-television-in.png" },
  { id: 13, name: "Sony SAB", img: "https://www.tvlogo.org/india/sony-sab-in.png" },
  { id: 14, name: "Sony MAX", img: "https://www.tvlogo.org/india/sony-max-in.png" },
  { id: 15, name: "Sony MAX 2", img: "https://www.tvlogo.org/india/sony-max-2-in.png" },
  { id: 23, name: "History TV18", img: "https://www.tvlogo.org/india/history-tv18-in.png" },
  { id: 24, name: "Sony BBC Earth", img: "https://www.tvlogo.org/india/sony-bbc-earth-in.png" },
  { id: 25, name: "Star Sports 1 Hindi", img: "https://www.tvlogo.org/india/star-sports-1-hindi-in.png" },
  { id: 26, name: "Star Sports 2", img: "https://www.tvlogo.org/india/star-sports-2-in.png" },
  { id: 27, name: "Zee TV", img: "https://www.tvlogo.org/india/zee-tv-in.png" },
  { id: 28, name: "Zee Cinema", img: "https://www.tvlogo.org/india/zee-cinema-in.png" },
  { id: 29, name: "Zee Marathi", img: "https://www.tvlogo.org/india/zee-marathi-in.png" },
  { id: 30, name: "Zee Tamil", img: "https://www.tvlogo.org/india/zee-tamil-news-in.png" }
];


function TV() {
  const [selectedChennel , setSelectedChennel] = useState(null)
  const [selectedShow , setSelectedShow] = useState(null)
  const [selectedDrama , setSelectedDrama ] = useState(null)
  const chennelContainerRef = useRef(null)
  
const dramaContainerRef = useRef(null)
const topMoviesContaienrRef = useRef(null)
const showContainerRef = useRef(null)
const topTrendingMoviesContainerRef = useRef(null) 
const scrollMovies   = (direction,containerRef) => {
      const container = containerRef.current;
      if (container) {
        container.scrollBy({
          left: direction === 'right' ? 700 : -700,
          behavior: "smooth",
        })
      }
}

const navigate = useNavigate()

const watch = (movie) => {
  if(!movie) return

  navigate('/watch' , {
    state: {
      title: movie.name,
      description: movie.description,
       video: movie.video || 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
    }
  })
}
  return (
    <div>
       <div className='home-main'>
          <div className='ads-title'>
         <CardMedia 
         image='https://shifu.hotstarext.com/SOURCE/VOD/cd-2026-11-17/DhaiChalDTDhsm1_BB_W-1db3c57d-04ad-4f36-9b3f-db6808b3a038.jpg'
         component="img"
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
                  <Typography  className='mahabarat-title'>
                       Dhai Chaal
                  </Typography>
                  <Typography className='mahabarat-title-2'>
                    Out on November 27
                  </Typography>
                  </div>
                  </div>
                  <Typography className='main-ads-title'>
                    Ambition turns toxic when a campus rivalry becomes a fight for life.
                  </Typography>
               </CardContent>

               </div>
            <CardMedia 
            image='https://imgs.search.brave.com/bQE2byNKGh0O41xA7pV1EqrlEsOvS_UydaLLlbCHs6w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS50bWRiLm9yZy90/L3Avb3JpZ2luYWwv/a29yY2d2MzRMck83/WVZzUWFRUmZvejdT/bjlnLmpwZw'
            component='img'
            alt='main-img'
            className='title-img'
            />
            <div className='moana-content'>
            <CardContent >
                   <CardMedia 
                   image='https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/7903/1794511157903-t'
                   component='img'
                   alt='moatitle'
                   className='moana-title'
                   />
                   <span className='moana-span'>Newly Added</span>
                  <Typography className='moana-time'>
                    2026
                    <li>U/A 16+</li>
                    <li>1 Season</li>
                    <li>8 languages</li>
                  </Typography>
                  <Typography className='moana-info'>
                    The queen bee of St. Teresa's is found dead in a frozen lake, and the girl has also gone viral. Her twin is determined to uncover the truth, no matter the cost.
                  </Typography>
                  <Typography>
                    thriller | Mystery | Drama | Yound Adult
                  </Typography>
            </CardContent>
            <CardActions>
              <Button className='watch-btn' onClick={() => watch({title:'  The queen bee of St. Teresa'})} variant='contained' startIcon={<PlayArrowIcon />} >
               Subcribe To Watch
              </Button>
              <Button className='addIcon'>
                <AddIcon />
              </Button>
            </CardActions>
            </div>
        </div>

         <div className='channel-section'>
          <Typography variant='h6'>
            Top Popular Channels
          </Typography>
          <Box className='movie-row'>
               <div className='scroll-arrows  left-arrows' onClick={() => scrollMovies('left', chennelContainerRef) }>
                <ChevronLeftIcon />
               </div>
                 <div className='chennel-movies' ref={chennelContainerRef}>
                 {channels.map((channel) => (
                  <div className='chennel-card' key={channel.id}>
                    <Card className='background-card'>
                   <CardMedia 
                   component='img'
                   image={channel.img}
                   alt={channel.name}
                   className='channel-img'
                   />
                   </Card>
                  </div>
                 ))}
                   </div>
              <div className='scroll-arrows right-arrows' onClick={() => scrollMovies('right' ,chennelContainerRef)}>
                <ChevronRightIcon />
              </div>

        </Box>
        
         </div>


            <div className='movies-section'
           onMouseLeave={() => setSelectedDrama(null)}
           >
            <Typography className='section-title'>
                Latest Drama
            </Typography>
              <Box className='movie-row-wrapper'>
                   <IconButton className='scroll-arrow left-arrow' onClick={() => scrollMovies('left', showContainerRef)}>
                  <ChevronLeftIcon />
                   </IconButton>
            <div className='home-movies' ref={showContainerRef}>
               {drama.map((drama) => (
                <div key={drama.id} className={`movie-card ${
                  selectedDrama?.id === drama.id ? 'active' : ''
                }`} 
                onMouseEnter={() => setSelectedDrama(drama)}
                >
                  <CardMedia    
                  component='img'
                  image={drama.image}
                  alt={drama.name}
                  className='main-img'
                  />

  
            {selectedDrama?.id === drama.id && (
            <div className='movie-hover-card' 
            onMouseEnter={() => setSelectedDrama(selectedDrama)}
            >
            <CardMedia 
            component='img'
            image={selectedDrama.backdrop || selectedDrama.image}
            alt={selectedDrama.name}
            className='preview-img'
            />   
            <div className='preview-action'>
              <Button variant='contained' onClick={() => watch(selectedDrama)} className='watch-btn' startIcon={<PlayArrowIcon />}>
              Watch Now
              </Button>
            </div>
            <div className='preview-content'>
                 <Typography className='side-info'>
                 {selectedDrama.year} • {selectedDrama.age} •
          {selectedDrama.seasons} • {selectedDrama.language}
                 </Typography>

                 <Typography>
                  {selectedDrama.description}
                 </Typography>
            </div>
            
            </div>
            )}
              </div>
               ))}
           </div>
           <IconButton className='scroll-arrow right-arrow' onClick={() => scrollMovies('right', showContainerRef)}>
                <ChevronRightIcon />
           </IconButton>
             </Box>        
    </div>
                          
          <div className='movies-section'  onMouseLeave={() => setSelectedShow(null)}>
            <Typography variant='h6'>
              Top 10 TV Shows
            </Typography>

            <Box className='movie-row-wrapper'>
              <IconButton className='scroll-arrow left-arrow' onClick={() =>  scrollMovies('left', topMoviesContaienrRef )} >
                   <ChevronLeftIcon />
              </IconButton>
              <div className='home-movies' ref={topMoviesContaienrRef} >
                        {realityShows.map((show) => (
                      <div className={`movie-card ${
                        selectedShow?.id === show.id ? 'active' : '' 
                      }`} 
                      onMouseEnter={() => setSelectedShow(show)}
                     
                      >
                          <CardMedia 
                          component='img'
                          image={show.image}
                          alt={show.name}
                          className='main-img'
                          />
                           {selectedShow?.id === show.id  && (
                            <div className='movie-hover-card'>  
                                <CardMedia  
                                component='img'
                                image={selectedShow.backdrop || selectedShow.image}
                                alt={selectedShow.name}
                                className='preview-img'
                                />                
                                <div className='preview-action'>
                                  <Button className='watch-btn' onClick={() => watch(selectedShow)} variant='contained' startIcon={<PlayArrowIcon />} >
                                       Watch now
                                  </Button>
                                  </div>     
                                <div className='side-info'>
                                   {selectedShow.year} • {selectedShow.age}
                                   {selectedShow.seasons} • {selectedShow.language}
                                  </div>                  
                                  <div className='preview-content'>
                                     {selectedShow.description}
                                  </div>
                            </div>
                           )}x
                               
                        </div>          
                               ))}   
                               </div>  
                               <IconButton className='scroll-arrow right-arrow' onClick={() => scrollMovies('right' , topMoviesContaienrRef )}>
                                         <ChevronRightIcon />
                                  </IconButton>         
            </Box>
          </div>
 <div className='movies-section'
           onMouseLeave={() => setSelectedDrama(null)}
           >
            <Typography className='section-title' variant='h6'>
                Now on Jio hotstar
            </Typography>
              <Box className='movie-row-wrapper'>
                   <IconButton className='scroll-arrow left-arrow' onClick={() => scrollMovies('left', dramaContainerRef)}>
                  <ChevronLeftIcon />
                   </IconButton>
            <div className='home-movies' ref={dramaContainerRef}>
               {drama.map((drama) => (
                <div key={drama.id} className={`movie-card ${
                  selectedDrama?.id === drama.id ? 'active' : ''
                }`} 
                onMouseEnter={() => setSelectedDrama(drama)}
                >
                  <CardMedia    
                  component='img'
                  image={drama.image}
                  alt={drama.name}
                  className='main-img'
                  />

  
            {selectedDrama?.id === drama.id && (
            <div className='movie-hover-card' 
            onMouseEnter={() => setSelectedDrama(selectedDrama)}
            >
            <CardMedia 
            component='img'
            image={selectedDrama.backdrop || selectedDrama.image}
            alt={selectedDrama.name}
            className='preview-img'
            />   
            <div className='preview-action'>
              <Button variant='contained' className='watch-btn' onClick={() =>  setSelectedDrama} startIcon={<PlayArrowIcon />}>
              Watch Now
              </Button>
            </div>
            <div className='preview-content'>
                 <Typography className='side-info'>
                 {selectedDrama.year} • {selectedDrama.age} •
          {selectedDrama.seasons} • {selectedDrama.language}
                 </Typography>

                 <Typography>
                  {selectedDrama.description}
                 </Typography>
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
     <div className='movies-section'  onMouseLeave={() => setSelectedShow(null)}>
            <Typography variant='h6'>
              Jio Hotstar Specials 
            </Typography>

            <Box className='movie-row-wrapper'>
              <IconButton className='scroll-arrow left-arrow' onClick={() =>  scrollMovies('left',topTrendingMoviesContainerRef )} >
                   <ChevronLeftIcon />
              </IconButton>
              <div className='home-movies' ref={topTrendingMoviesContainerRef} >
                        {realityShows.map((show) => (
                      <div className={`movie-card ${
                        selectedShow?.id === show.id ? 'active' : '' 
                      }`} 
                      onMouseEnter={() => setSelectedShow(show)}
                     
                      >
                          <CardMedia 
                          component='img'
                          image={show.image}
                          alt={show.name}
                          className='main-img'
                          />
                           {selectedShow?.id === show.id  && (
                            <div className='movie-hover-card'>  
                                <CardMedia  
                                component='img'
                                image={selectedShow.backdrop || selectedShow.image}
                                alt={selectedShow.name}
                                className='preview-img'
                                />                
                                <div className='preview-action'>
                                  <Button className='watch-btn' onClick={() => watch(selectedShow)} variant='contained' startIcon={<PlayArrowIcon />} >
                                       Watch now
                                  </Button>
                                  </div>     
                                <div className='side-info'>
                                   {selectedShow.year} • {selectedShow.age}
                                   {selectedShow.seasons} • {selectedShow.language}
                                  </div>                  
                                  <div className='preview-content'>
                                     {selectedShow.description}
                                  </div>
                            </div>
                           )}
                               
                        </div>          
                               ))}   
                               </div>  
                               <IconButton className='scroll-arrow right-arrow' onClick={() => scrollMovies('right' , topTrendingMoviesContainerRef )}>
                                         <ChevronRightIcon />
                                  </IconButton>         
            </Box>
          </div>
    </div>
  )
}

export default TV