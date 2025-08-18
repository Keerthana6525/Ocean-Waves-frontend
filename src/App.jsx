import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Carousel from'./Components/Carousel'
import AnnouncementBar from './Components/Announcement'
import Achievements from './Components/Achievements'
import About from './Components/About'
import Services from './Components/Services'
import Footer from './Components/Footer'
import Products from './Components/Products'
import Accessories from './Components/Accessories'
import Officeequp from './Components/Officeequp'
import Brands from './Components/Brands'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Carousel/>
     <AnnouncementBar/>
     <Achievements/>
     <About/>
     <Services/>
     <Products/>
     <Accessories/>
     <Officeequp/>
     <Brands/>
     <Footer/>
    </>
  )
}

export default App
