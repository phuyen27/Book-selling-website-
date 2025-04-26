import React from 'react'

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
      {/*left col*/}
      <div className='w-full md:w-1/2 space-y-8'>Left</div>

      {/*right col*/}
      <div className='w-full md:w-1/2'>Right</div>

    </section>
  )
}

export default Hero