import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import Title from './components/Blogs/Title'
import Counts from './components/Counts/Counts'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [counts, setCounts] = useState([]);


  const handleAddToCount = blog => {
    const newCounts = [...counts, blog];
    setCounts(newCounts);
  }



  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className='flex'>
        <Blogs handleAddToCount={handleAddToCount}></Blogs>
        <div className='border-2 rounded-xl p-4 w-2/5 my-4'>
          <Counts counts={counts}></Counts>

        </div>
      </div>
    </>
  )
}

export default App