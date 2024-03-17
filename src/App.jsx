
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import Title from './components/Blogs/Title'
import Counts from './components/Counts/Counts'
import Navbar from './components/Navbar/Navbar'
import Count from './components/Count/Count'

function App() {
  const [counts, setCounts] = useState([]);
  const [coocking,setCooking] = useState([])

  const handleAddToCount = blog => {
    const newCounts = [...counts, blog];
    setCounts(newCounts);
  }

  const handlePreparing = data =>{
    console.log('find data',data);

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
          {/* <Count handlePreparing={handlePreparing}></Count> */}
        </div>
      </div>
    </>
  )
}

export default App
