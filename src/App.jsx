
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Shop from './components/shop'
import About from './components/about'
import BookOpenCard from './components/BookOpenCard'
import Authors from './components/authors'
import Contact from './components/contact'
import Footer from './components/footer'
import Blog from './components/blog'
function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      
      <div className='overflow-visible bg-[#fefaf6]'>
        <Navbar/>
        <Hero/>   
        <About/>
        <Authors/>
        <Shop/>
        <Blog/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  )
}

export default App
