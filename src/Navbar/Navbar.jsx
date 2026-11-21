import  { useState } from 'react'
import './Navbar.styles.scss'
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import { House, Popcorn, Search,TvMinimal ,SportShoe, Video, Copy, CircleUser } from 'lucide-react'

import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  
  const menuItems = [
  { name: "Home", icon: <House />, path: "/" },
  { name: "Search", icon: <Search />, path: "/search" },
  { name: "TV", icon: <TvMinimal />, path: "/tv" },
  { name: "Movies", icon: <Popcorn />, path: "/movies" },
  { name: "Sports", icon: <SportShoe />, path: "/sports" },
  { name: "Sparks", icon: <Video />, path: "/sparks" },
  { name: "Categories", icon: <Copy />, path: "/categories" },
  { name: "My Space", icon: <CircleUser />, path: "/my-space" }
]
  return (
   <div>
    <Drawer variant='permanent' 
    className='sidebar'
    >
        <div className='logo'>
            <Link to='/'>
            <img  src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png" alt="hotstar-icon" />
             </Link>
        </div>
   <List>
    {menuItems.map((item) => (
    <ListItemButton component={NavLink} to={item.path} className='menu-items' key={item.name} >
        <ListItemIcon>
            {item.icon}
        </ListItemIcon>
        <ListItemText  
        
        primary={item.name}
        className='nav-name'
        />
    </ListItemButton>
       ))}
   </List>
    </Drawer>
   </div>
  )
}

export default Navbar