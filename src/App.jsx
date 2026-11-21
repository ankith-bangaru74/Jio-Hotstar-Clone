
import './App.css'
import Navbar from './Navbar/Navbar'
import { useState } from 'react'
import Home from './Home/Home'
import TV from './TV/TV'
import Movies from './Movies/Movies'
import Sports from './Sports/Sports'
import Sparks from './Sparks/Sparks'
import Categories from './Categories/Categories'
import MySpace from './MySpace/MySpace'
import SearchPage from './Search/Search'
import { CircularProgress } from '@mui/material'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Watch from './Watch/Watch'
function App() {

  const location = useLocation()
  const [loading, setLoading] = useState(false)
useEffect(() => {
setLoading(true)

window.scrollTo({
  top:0,
  behavior:'smooth'
})
const timer = setTimeout(() =>{
  setLoading(false)
}, 700)

return () => clearTimeout(timer)
}, [location.pathname])
  return (
    <>
      <Navbar />
   {loading && (
        <div className="page-loader">
            <CircularProgress />
        </div>
      )}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/sparks" element={<Sparks />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/my-space" element={<MySpace />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </div>
    </>
  )
}

export default App
