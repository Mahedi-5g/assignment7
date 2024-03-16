
import './App.css'

function App() {


  return (
    <>
      {/* navbar */}
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homes</a></li>
                <li><a>Recipes</a></li>
                <li><a>About</a></li>
                <li><a>Search</a></li>
              </ul>
            </div>
            <a className='text-3xl font-bold'>Recipe Calories</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base font-normal">
              <li><a>Homes</a></li>
              <li><a>Recipes</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <div className="form-control mr-2">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="w-10 ">
              <img alt="Tailwind CSS Navbar component" 
              className='rounded-full' src="https://i.ibb.co/X7Rj4YT/main-thumb-33162915-200-ldkguybdwmpvlreaedqtscbwjyqmvmbb.jpg" />
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default App
