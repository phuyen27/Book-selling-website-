
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Shop from './components/shop'
import About from './components/about'
import BookOpenCard from './components/BookOpenCard'
import Authors from './components/authors'

function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      
      <div className='overflow-visible  bg-orange-50'>
        <Navbar/>
        <Hero/>   
        <About/>
        <Authors/>
        <Shop/>
       
      </div>
    </main>
  )
}

export default App
