// import { useState } from 'react'
import './css/App.css'
import MovieCard from './components/MovieCard'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext'
import Favorites from './pages/Favorites'

function App() {
  // const [count, setCount] = useState(0)
  // const moveiNumber = 1;


  return (
    <MovieProvider>
      <NavBar />

      <main className='main-content'>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
