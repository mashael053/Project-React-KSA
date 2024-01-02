import React from 'react'
import { Link } from 'react-router-dom'
import imageHome from './assets/imageHome.jpeg'
function HomePage() {
  return (
    <>
<section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <h1 className="text-4xl text-center text-gray-800 font-semibold mb-6 max-sm:text-sm">Welcome to "Expo Saudi Arabia" Website!</h1>
    <p className="text-lg text-center text-gray-700 mb-8 ">Explore amazing achievements in the Kingdom of Saudi Arabia and discover the events of Expo Saudi Arabia.</p>
    <div className="flex justify-center items-center">
      <Link to='/SignUp'>
      <h1 className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">Browse More</h1></Link>
    </div>
  </div>
  <img className='text-center mt-3 ' src={imageHome}></img>
</section>

    </>
  )
}


export default HomePage