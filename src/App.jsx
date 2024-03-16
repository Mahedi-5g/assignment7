
import './App.css'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import Title from './components/Blogs/Title'
import Counts from './components/Counts/Counts'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className='flex'>
        <Blogs></Blogs>
        <Counts></Counts>
      </div>
        

    </>
  )
}

export default App
