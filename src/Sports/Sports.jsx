
import './Sports.styles.scss'
import {
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box
} from '@mui/material'

import AddIcon from '@mui/icons-material/Add'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { useRef, useState } from 'react'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { useNavigate } from 'react-router-dom'

function Sports() {
  const navigate = useNavigate()

  const SportsContainerRef = useRef(null)
  const updateContainerRef = useRef(null)
  const dhoniContainerRef = useRef(null)
  const indainContaineRef = useRef(null)

  const [selectedMove, setSelectedMove] = useState(null)
  const [selectedSport, setSelectedSport] = useState(null)
  const [selectedUpdate, setSelectedUpdate] = useState(null)

  const watch = (movie) => {
    if (!movie) return

    navigate('/watch', {
      state: {
        title: movie.name,
        description: movie.description,
        video: movie.video || 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
      }
    })
  }

  const scrollMovies = (direction, containerRef) => {
    const container = containerRef.current

    if (container) {
      container.scrollBy({
        left: direction === 'right' ? 700 : -700,
        behavior: 'smooth',
      })
    }
  }

  const channels = [
    {
      id: 1,
      name: "JioCinema",
      img: "https://imgs.search.brave.com/lFrXYaCHRXxO6JGk2hd8Kk8qkwnrA5ZwncXwvufPgV0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmlwbC5j/b20vZmlsZXMvcHJl/dmlldy8xMjgweDcy/MC80NjU5NzE3NjY4/Nzk0NDFmdmR1dXcw/dm1lMGZ5bjJhemVn/ZXA3cmdrYWc0c3Z3/dXQ0dWNqeDB1dWtr/bW9kaDIwdndpbzRj/aDFyZHltc3NoZ2N1/eGVjczlkaHRocWps/dmxreXEweWphZnJt/ZmZ2bnhrb2trLmpw/Zw",
      bg: "#071d4b",
    },
    {
      id: 2,
      name: "Sports18",
      img: "https://imgs.search.brave.com/rk7I6AtBj0hC4UNewP1Jh_jA9Zk7qewHorHoSbwXiiY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/Mjg5MDkzYmI3NmY2/MTJjZDZmYzQ1ZTUu/cG5n",
      bg: "#171717",
    },
    {
      id: 3,
      name: "IPL",
      img: "https://imgs.search.brave.com/8e0rRNP6G5tkPFqxT_f7NPcnOvUK1O0EEO1SWsx6qeI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E4LzI2/LzI0L2E4MjYyNDRh/YTdmMTIxNDQzOThi/OGE0MjkwMTE2Zjhi/LmpwZw",
      bg: "#09266b",
    },
    {
      id: 4,
      name: "FIFA",
      img: "https://imgs.search.brave.com/qg4tfI9CqB53cuKHHEccZmlHt_XVmZwed0Y2U8R2m-Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Zm9udGlubG9nby5j/b20vaW1hZ2VzL2Nt/cy81ZjBjNzM0NWUw/NTFkN2JhZjY1YzEz/NTBfcHJlbWllci1s/ZWFndWUtMjAxNi5h/dmlm",
      bg: "#004b48",
    },
    {
      id: 5,
      name: "Formula 1",
      img: "https://imgs.search.brave.com/l0HWRPPPzt4lTRKuNNyxQgyIaaNVhJg8fqGG4on6PB4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93cGwu/Y29tLmluL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI2LzEwL011/bWJhaS1JbmRpYW5z/LVdvbWVuLVdQTC0y/MDI3LVRlYW0tMTAy/NHg1NzYucG5n",
      bg: "#171717",
    },
  ]

  const dhoniMoves = [
    {
      id: 1,
      name: "Dhoni's Best Finishes",
      image: "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/288800/288882.6.jpg",
      description: "Relive MS Dhoni's unforgettable finishing shots and match-winning performances for Chennai Super Kings."
    },
    {
      id: 2,
      name: "Dhoni's Lightning Stumping",
      image: "https://www.deccanchronicle.com/h-upload/2025/03/24/1901228-untitleddesign30.webp",
      description: "Watch the legendary wicketkeeper's lightning-fast hands and incredible stumpings behind the wickets."
    },
    {
      id: 3,
      name: "Dhoni's IPL Journey",
      image: "https://img.airtel.tv/unsafe/fit-in/1600x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/VIDEO/690df0514d854e0e76007db8/images/LANDSCAPE_169/1744230180935-h?o=production",
      description: "A look back at Dhoni's remarkable IPL journey and his legacy with the Chennai Super Kings."
    },
    {
      id: 4,
      name: "Captain Cool Moments",
      image: "https://im.rediff.com/cricket/2022/apr/22dhoni1.jpg?h=450&w=450",
      description: "Experience the calm leadership and unforgettable moments that made Dhoni Captain Cool."
    },
    {
      id: 5,
      name: "Dhoni's IPL 2025 Action",
      image: "https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2025-04/GettyImages-2209722438.jpg.webp?itok=qLkxH2qf",
      description: "See Dhoni in action during the 2025 IPL season, representing Chennai Super Kings."
    },
    {
      id: 6,
      name: "Dhoni's Vintage Sixes",
      image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/ms_pti_dhoni_bcci_0-one_one.jpg?VersionId=RqEqsM8coG_0uiRHwVRF2yo1KxH4g6Qr",
      description: "Relive Dhoni's spectacular consecutive sixes against Lucknow Super Giants at Chepauk in 2023."
    },
    {
      id: 7,
      name: "Dhoni's Powerful Batting",
      image: "https://www.wisden.com/static-assets/waf-images/4f/58/e7/0/69835_GettyImages-143595758-e1525146118218.jpg",
      description: "Watch Dhoni demonstrate his powerful batting technique in the iconic yellow CSK jersey."
    },
    {
      id: 8,
      name: "Dhoni's Match-Winning Shot",
      image: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2023/05/msdhonicskdelhi.jpg?size=%2A%3A900",
      description: "Celebrate Dhoni's attacking batting and his ability to change the momentum of an IPL match."
    },
    {
      id: 9,
      name: "Dhoni's Mid-Innings Strike",
      image: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTE2ZjI5MjcwLTI3NTctMTFmMS04ZWE5LTk5MGI3ZjZhOWEzOS5qcGc%3D",
      description: "A close look at Dhoni's batting stance and concentration during a Chennai Super Kings match."
    }
  ]

  const indianSports = [
    {
      id: 21,
      name: "Neeraj Chopra – Olympic Gold",
      image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/08/neeraj-medal-1628346864.jpg",
      description: "Neeraj Chopra creates history by winning India's first Olympic gold in athletics at Tokyo 2020."
    },
    {
      id: 22,
      name: "PV Sindhu – Badminton Champion",
      image: "https://feeds.abplive.com/onecms/images/uploaded-images/2024/07/17/1fd4b0b78e10ab9ca5cab30399f69a37172122069021050_original.jpg?impolicy=abp_cdn&imwidth=1200",
      description: "PV Sindhu represents India with her powerful smashes and memorable international victories."
    },
    {
      id: 23,
      name: "Indian Women's Hockey Team",
      image: "https://thebridge.in/h-upload/2021/12/31/20963-golfer-aditi-ashok-shuttler-kidambi-srikanth-and-indiana-womens-hockey-team.webp",
      description: "The Indian women's hockey team celebrates its historic performance at the Tokyo Olympics."
    },
    {
      id: 24,
      name: "India – T20 World Cup Glory",
      image: "https://feeds.abplive.com/onecms/images/uploaded-images/2024/06/30/6903a8c7043ccc6b02b055cd4a9879b91719689020689625_original.jpg",
      description: "India defeat South Africa by seven runs to become T20 World Cup champions in 2024."
    },
    {
      id: 25,
      name: "Manu Bhaker – Olympic Medal",
      image: "https://images.moneycontrol.com/static-mcnews/2024/08/20240808165243_Olympics-.jpg?height=720&impolicy=website&width=1280",
      description: "Manu Bhaker makes history with her outstanding shooting performance at Paris 2024."
    },
    {
      id: 26,
      name: "Indian Hockey – Olympic History",
      image: "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0719%2Fr1360649_1256x707_16-9.jpg",
      description: "Celebrate India's legendary hockey legacy and its historic Olympic achievements."
    },
    {
      id: 27,
      name: "Kidambi Srikanth – Badminton",
      image: "https://thebridge.in/h-upload/2021/12/31/20963-golfer-aditi-ashok-shuttler-kidambi-srikanth-and-indiana-womens-hockey-team.webp",
      description: "Kidambi Srikanth makes India proud with his achievements in international badminton."
    },
    {
      id: 28,
      name: "Indian Hockey – Tokyo Olympics",
      image: "https://feeds.abplive.com/onecms/images/uploaded-images/2024/07/17/1fd4b0b78e10ab9ca5cab30399f69a37172122069021050_original.jpg?impolicy=abp_cdn&imwidth=1200",
      description: "Indian hockey players show teamwork, determination and fighting spirit on the field."
    },
    {
      id: 29,
      name: "Mary Kom – Boxing Champion",
      image: "https://media.licdn.com/dms/image/v2/D5612AQEYnSo337zz3g/article-cover_image-shrink_720_1280/B56ZpINv_xJ8Ac-/0/1762148156631?e=2147483647&t=ltNhrr-lTEQz44uC21w9xrAh4zAOeTK9tNo7u6oL-DM&v=beta",
      description: "Mary Kom inspires a generation through her achievements in international boxing."
    },
    {
      id: 30,
      name: "Indian Women's Hockey – Team Spirit",
      image: "https://thebridge.in/h-upload/2021/12/31/20963-golfer-aditi-ashok-shuttler-kidambi-srikanth-and-indiana-womens-hockey-team.webp",
      description: "A memorable celebration from India's women's hockey team."
    },
    {
      id: 31,
      name: "Neeraj Chopra – Javelin Throw",
      image: "https://images.moneycontrol.com/static-mcnews/2024/08/20240808165243_Olympics-.jpg?height=720&impolicy=website&width=1280",
      description: "Watch India's javelin star compete at the biggest sporting events."
    },
    {
      id: 32,
      name: "Indian Badminton – International Stage",
      image: "https://feeds.abplive.com/onecms/images/uploaded-images/2024/07/17/1fd4b0b78e10ab9ca5cab30399f69a37172122069021050_original.jpg?impolicy=abp_cdn&imwidth=1200",
      description: "Indian badminton players showcase their skill and determination against the world's best."
    },
    {
      id: 33,
      name: "Indian Hockey – Historic Victory",
      image: "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0719%2Fr1360649_1256x707_16-9.jpg",
      description: "Relive the memorable victories that shaped India's hockey history."
    },
    {
      id: 34,
      name: "Indian Sports – Olympic Pride",
      image: "https://d1af7m13b2f34i.cloudfront.net/media/untitled-3-1692039544053-original.jpg",
      description: "Indian athletes continue to inspire the country through dedication and sporting excellence."
    },
    {
      id: 35,
      name: "Indian Athletics – Track and Field",
      image: "https://images.moneycontrol.com/static-mcnews/2024/08/20240808165243_Olympics-.jpg?height=720&impolicy=website&width=1280",
      description: "India's athletes compete on the global stage in track and field events."
    },
    {
      id: 36,
      name: "Indian Sports – Tokyo Olympics Memories",
      image: "https://static.toiimg.com/thumb/msid-85168763,width-1280,height-720,imgsize-107035,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      description: "India's Olympic medal winners celebrate their historic seven-medal campaign at Tokyo 2020."
    },
    {
      id: 37,
      name: "Indian Hockey – Team Celebration",
      image: "https://thebridge.in/h-upload/2021/12/31/20963-golfer-aditi-ashok-shuttler-kidambi-srikanth-and-indiana-womens-hockey-team.webp",
      description: "The Indian team celebrates its achievements and unforgettable sporting moments."
    },
    {
      id: 38,
      name: "Indian Olympic Champions",
      image: "https://media.licdn.com/dms/image/v2/D5612AQEYnSo337zz3g/article-cover_image-shrink_720_1280/B56ZpINv_xJ8Ac-/0/1762148156631?e=2147483647&t=ltNhrr-lTEQz44uC21w9xrAh4zAOeTK9tNo7u6oL-DM&v=beta",
      description: "Celebrating India's champions across multiple Olympic sports."
    },
    {
      id: 39,
      name: "Indian Sports – Medal Moments",
      image: "https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2024-07/GettyImages-1331794140.jpg?itok=f-diy5q6",
      description: "PV Sindhu celebrates her bronze medal at the Tokyo 2020 Olympic Games."
    },
    {
      id: 40,
      name: "India – Sporting Legends",
      image: "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0719%2Fr1360649_1256x707_16-9.jpg",
      description: "A tribute to the athletes who helped build India's sporting legacy."
    }
  ]

  const teamUpdates = [
    {
      id: 1,
      name: "Gurnoor Brar Added to India's Test Squad",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F1aqaIoDWXM84xwH0etEqAY%2F02fbfbfc8f3a4a27d2317de1.webp&w=3840",
      description: "Gurnoor Brar joins India's Test squad for the New Zealand series, replacing the need for a further ODI replacement."
    },
    {
      id: 2,
      name: "Team India Celebrates a Big Wicket",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F1aqaIoDWXM84xwH0etEqAY%2F963d2d2c0898d37374c214c6.webp&w=3840",
      description: "Indian players come together to celebrate an important breakthrough against New Zealand."
    },

    {
      id: 4,
      name: "Virat, Rohit and Gill – Special Moment",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F1aqaIoDWXM84xwH0etEqAY%2Fbae4570e624822cf9787c43a.webp&w=3840",
      description: "Virat Kohli, Rohit Sharma and Shubman Gill come together during a special team event."
    },
    {
      id: 5,
      name: "India's Bowling Attack in Action",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F1aqaIoDWXM84xwH0etEqAY%2F178aec7cc6dd96d6ac81500a.webp&w=3840",
      description: "India's bowlers put pressure on the New Zealand batting lineup with crucial breakthroughs."
    },
    {
      id: 6,
      name: "Shubman Gill's Batting Performance",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F1aqaIoDWXM84xwH0etEqAY%2F9f6eeadddb23acaedb53c3d0.webp&w=3840",
      description: "Shubman Gill gets ready to play his shots during India's ODI campaign."
    },
    {
      id: 7,
      name: "Arshdeep Singh in Training",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F2vML6hXXsuy8mdyBtMgF9F%2F1c7f35fdebff98c3fdf5a6c2.webp&w=3840",
      description: "Arshdeep Singh prepares for the challenges of international cricket."
    },
    {
      id: 8,
      name: "India's Batting Lineup in Action",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F2vML6hXXsuy8mdyBtMgF9F%2F063b1b4da4bf48cc65aad488.webp&w=3840",
      description: "An Indian batter takes on the New Zealand bowling attack during the ODI series."
    },
    {
      id: 9,
      name: "Rohit Sharma's Powerful Shot",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F7y5BT4Lr5ObYutZjA9XtRZ%2F81ab8be5e0e7edc2db895cd1.webp&w=3840",
      description: "Rohit Sharma showcases his attacking batting style against New Zealand."
    },
    {
      id: 10,
      name: "India Celebrates Another Wicket",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F7y5BT4Lr5ObYutZjA9XtRZ%2F93d07929fc3fe318f46d8c04.webp&w=3840",
      description: "An Indian bowler celebrates after making an important breakthrough."
    },
    {
      id: 11,
      name: "Gurnoor Brar's Impressive Performance",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F2vML6hXXsuy8mdyBtMgF9F%2Ffa8f4cda2cf28e3769e418db.webp&w=3840",
      description: "Gurnoor Brar makes an impact during India's ODI tour of New Zealand."
    },
    {
      id: 12,
      name: "Indian Players Share a Team Moment",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F2vML6hXXsuy8mdyBtMgF9F%2F76462261c35bb71c2decb3f8.webp&w=3840",
      description: "Indian players congratulate each other after a strong team performance."
    },
    {
      id: 13,
      name: "Team India on the Field",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F2vML6hXXsuy8mdyBtMgF9F%2Fcf46a046bf6098f10c595b06.webp&w=3840",
      description: "The Indian team prepares for the next phase of the match."
    },
    {
      id: 14,
      name: "India's Fast Bowlers Strike",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F2vML6hXXsuy8mdyBtMgF9F%2F47826eb55c733bd2d46ae7a1.webp&w=3840",
      description: "India's bowling unit looks to dominate with pace and accuracy."
    },
    {
      id: 15,
      name: "Virat Kohli's Batting Moment",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F2vML6hXXsuy8mdyBtMgF9F%2F1f6e28d0c21ea51ab7fee83b.webp&w=3840",
      description: "Virat Kohli plays an attacking shot during the New Zealand ODI series."
    },
    {
      id: 16,
      name: "Indian Batters Take Charge",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F7y5BT4Lr5ObYutZjA9XtRZ%2Fe6dc27b3c0697eb3d7c20f7d.webp&w=3840",
      description: "India's batting lineup looks to build momentum during the match."
    },
    {
      id: 17,
      name: "India's Fielding Practice",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F7y5BT4Lr5ObYutZjA9XtRZ%2F3bca4f9e74d87e83e55b4400.webp&w=3840",
      description: "Indian players work on their fielding and catching during the match."
    },
    {
      id: 18,
      name: "Team India Celebrates Together",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F7y5BT4Lr5ObYutZjA9XtRZ%2F57b01a63a8d23711c9be7527.webp&w=3840",
      description: "A memorable team celebration after an important moment in the game."
    },
    {
      id: 19,
      name: "Yash Thakur Receives His ODI Cap",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F7y5BT4Lr5ObYutZjA9XtRZ%2Fcdf651e8bb212388399060f5.webp&w=3840",
      description: "A special milestone as Yash Thakur receives his ODI cap from Axar Patel."
    },
    {
      id: 20,
      name: "India's New Zealand Tour – Team Preparations",
      image: "https://www.bcci.tv/_next/image?q=75&url=%2Fcms%2Fphotos%2Fgalleries%2Fmaster%2F7y5BT4Lr5ObYutZjA9XtRZ%2Fce8c9d5b44f22401ce63082d.webp&w=3840",
      description: "Indian players get ready for the next challenge on their New Zealand tour."
    }
  ]

  return (
    <div className='sports-main'>

      {/* HERO SECTION */}
      <CardMedia
        image='https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6862/1794916356862-i'
        component='img'
        alt='main-img'
        className='dhoni-img'
      />

      <div className='dhoni-content'>
        <CardContent>
          <CardMedia
            image='https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/5561/1794916865561-t'
            component='img'
            alt='movie-title'
            className='dhoni-title'
          />

          <span className='moana-span'>Newly Added</span>

          <Typography className='moana-time'>
            2026
            <li>U/A 16+</li>
            <li>2h 55m</li>
            <li>4 languages</li>
          </Typography>

          <Typography className='rajasaab-info'>
            Seeking his lost grandfather, a young man enters a haunted mansion and awakens a family curse powerful enough to upend both his life and reality.
          </Typography>

          <Typography>
            Horror | Fantasy | SuperNatural | Quest
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            className='watch-btn'
            variant='contained'
            startIcon={<PlayArrowIcon />}
            onClick={() => watch({
              name: 'The Raja Saab',
              description: 'Seeking his lost grandfather, a young man enters a haunted mansion and awakens a family curse powerful enough to upend both his life and reality.'
            })}
          >
            Subscribe To Watch
          </Button>

          <Button className='addIcon'>
            <AddIcon />
          </Button>
        </CardActions>
      </div>

      {/* SPORTS CHANNELS */}
      <div className='channel-section'>
        <Typography variant='h6'>
          Top Sports Channels
        </Typography>

        <Box className='movie-row'>
          <div
            className='scroll-arrows left-arrows'
            onClick={() => scrollMovies('left', SportsContainerRef)}
          >
            <ChevronLeftIcon />
          </div>

          <div className='chennel-movies' ref={SportsContainerRef}>
            {channels.map((channel) => (
              <div className='chennel-card' key={channel.id}>
                <Card
                  className='background-card'
                  sx={{ backgroundColor: channel.bg }}
                >
                  <CardMedia
                    component='img'
                    image={channel.img}
                    alt={channel.name}
                    className='game-img'
                  />
                </Card>
              </div>
            ))}
          </div>

          <div
            className='scroll-arrows right-arrows'
            onClick={() => scrollMovies('right', SportsContainerRef)}
          >
            <ChevronRightIcon />
          </div>
        </Box>
      </div>

      {/* DHONI SECTION */}
      <div
        className='movie-setion'
        onMouseLeave={() => setSelectedMove(null)}
      >
        <Typography className='sports-title' variant='h6'>
          MSD's Captaincy Masterstrokes
        </Typography>

        <Box className='movie-row-wrapper'>
          <IconButton
            className='scroll-arrow left-arrow'
            onClick={() => scrollMovies('left', dhoniContainerRef)}
          >
            <ChevronLeftIcon />
          </IconButton>

          <div className='home-movies' ref={dhoniContainerRef}>
            {dhoniMoves.map((dhoni) => (
              <div
                key={dhoni.id}
                className={`movie-card ${
                  selectedMove?.id === dhoni.id ? 'active' : ''
                }`}
                onMouseEnter={() => setSelectedMove(dhoni)}
              >
                <CardMedia
                  component='img'
                  image={dhoni.image}
                  alt={dhoni.name}
                  className='sport-img'
                />

                <Typography>{dhoni.name}</Typography>

                {selectedMove?.id === dhoni.id && (
                  <div
                    className='movie-hover-card'
                    onMouseEnter={() => setSelectedMove(dhoni)}
                  >
                    <CardMedia
                      component='img'
                      image={selectedMove.backdrop || selectedMove.image}
                      alt={selectedMove.name}
                      className='preview-img'
                    />

                    <div className='preview-action'>
                      <Button
                        className='watch-btn'
                        variant='contained'
                        startIcon={<PlayArrowIcon />}
                        onClick={() => watch(dhoni)}
                      >
                        Watch Now
                      </Button>
                    </div>

                    <div className='preview-content'>
                      <Typography>
                        {selectedMove.description}
                      </Typography>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <IconButton
            className='scroll-arrow right-arrow'
            onClick={() => scrollMovies('right', dhoniContainerRef)}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </div>

      {/* INDIAN SPORTS SECTION */}
      <div
        className='movies-setion'
        onMouseLeave={() => setSelectedSport(null)}
      >
        <Typography className='sports-title' variant='h6'>
          Indian Sports
        </Typography>

        <Box className='movie-row-wrapper'>
          <IconButton
            className='scroll-arrow left-arrow'
            onClick={() => scrollMovies('left', indainContaineRef)}
          >
            <ChevronLeftIcon />
          </IconButton>

          <div className='home-movies' ref={indainContaineRef}>
            {indianSports.map((sport) => (
              <div
                key={sport.id}
                className={`movie-card ${
                  selectedSport?.id === sport.id ? 'active' : ''
                }`}
                onMouseEnter={() => setSelectedSport(sport)}
              >
                <CardMedia
                  component='img'
                  image={sport.image}
                  alt={sport.name}
                  className='sport-img'
                />

                <Typography>{sport.name}</Typography>

                {selectedSport?.id === sport.id && (
                  <div
                    className='movie-hover-card'
                    onMouseEnter={() => setSelectedSport(sport)}
                  >
                    <CardMedia
                      component='img'
                      image={selectedSport.backdrop || selectedSport.image}
                      alt={selectedSport.name}
                      className='preview-img'
                    />

                    <div className='preview-action'>
                      <Button
                        className='watch-btn'
                        variant='contained'
                        startIcon={<PlayArrowIcon />}
                        onClick={() => watch(sport)}
                      >
                        Watch Now
                      </Button>
                    </div>

                    <div className='preview-content'>
                      <Typography>
                        {selectedSport.description}
                      </Typography>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <IconButton
            className='scroll-arrow right-arrow'
            onClick={() => scrollMovies('right', indainContaineRef)}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </div>

      {/* TEAM INDIA UPDATES */}
      <div
        className='movies-setion'
        onMouseLeave={() => setSelectedUpdate(null)}
      >
        <Typography className='sports-title' variant='h6'>
          Latest Team India Updates
        </Typography>

        <Box className='movie-row-wrapper'>
          <IconButton
            className='scroll-arrow left-arrow'
            onClick={() => scrollMovies('left', updateContainerRef)}
          >
            <ChevronLeftIcon />
          </IconButton>

          <div className='home-movies' ref={updateContainerRef}>
            {teamUpdates.map((update) => (
              <div
                key={update.id}
                className={`movie-card ${
                  selectedUpdate?.id === update.id ? 'active' : ''
                }`}
                onMouseEnter={() => setSelectedUpdate(update)}
              >
                <CardMedia
                  component='img'
                  image={update.image}
                  alt={update.name}
                  className='sport-img'
                />

                <Typography>{update.name}</Typography>

                {selectedUpdate?.id === update.id && (
                  <div
                    className='movie-hover-card'
                    onMouseEnter={() => setSelectedUpdate(update)}
                  >
                    <CardMedia
                      component='img'
                      image={selectedUpdate.backdrop || selectedUpdate.image}
                      alt={selectedUpdate.name}
                      className='preview-img'
                    />

                    <div className='preview-action'>
                      <Button
                        className='watch-btn'
                        variant='contained'
                        startIcon={<PlayArrowIcon />}
                        onClick={() => watch(update)}
                      >
                        Watch Now
                      </Button>
                    </div>

                    <div className='preview-content'>
                      <Typography>
                        {selectedUpdate.description}
                      </Typography>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <IconButton
            className='scroll-arrow right-arrow'
            onClick={() => scrollMovies('right', updateContainerRef)}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </div>

    </div>
  )
}

export default Sports
