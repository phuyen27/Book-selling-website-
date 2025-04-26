
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Shop from './components/shop'

function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
        <div className='absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-green-200/40 to-green-400/30 rounded-full blur-[120px] -z-10'></div>
      <div className='absolute top-1/2 left-[-150px] w-[300px] h-[300px] bg-gradient-to-br from-lime-300/30 to-green-300/40 rounded-full blur-[100px] -z-10'></div>
      <div className='absolute top-20 right-10 w-[250px] h-[250px] bg-gradient-to-tl from-green-100/50 to-green-300/30 rounded-full blur-[100px] -z-10'></div>

      <div className='overflow-visible'>
        <Navbar/>
        <Hero/>
        <Shop/>
      </div>
    </main>
  )
}

export default App
