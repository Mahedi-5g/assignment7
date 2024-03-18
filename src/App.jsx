import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import Title from './components/Blogs/Title'
import Counts from './components/Counts/Counts'
import Navbar from './components/Navbar/Navbar'
import Preparing from './components/preparing/Preparing'

function App() {
  const [counts, setCounts] = useState([]);
  const [prepareToCook,setPrepareToCook] = useState([]);




  const handleAddToCount = blog => {
    const newCounts = [...counts, blog];
    setCounts(newCounts);
  }

  const handlePreparing = item=>{
    const remaining = counts.filter(i=> i.recipe_id !== item.recipe_id)
    setCounts(remaining)
    setPrepareToCook([...prepareToCook,item])

  }
  console.log(prepareToCook);

  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className='flex'>
        <Blogs handleAddToCount={handleAddToCount}></Blogs>
        <div className='border-2 rounded-xl p-4 w-2/5 my-4'>
          <Counts handlePreparing={handlePreparing} counts={counts}></Counts>
          <div>
            <h1 className='text-center text-2xl font-semibold mt-8 mb-3'>Currently cooking:{prepareToCook.length}</h1>
            <hr />
            <Preparing prepareToCook={prepareToCook}></Preparing>
          </div>
          

        </div>
      </div>
    </>
  )
}

export default App