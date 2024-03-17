const Navbar = () => {
    return (
        <div>
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
                    <div className="mr-2">
                        <label className="input input-bordered flex items-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg> <input type="text" className="grow" placeholder="Search" />
                        </label>
                    </div>
                    <div className="w-10 ">
                        <img alt="Tailwind CSS Navbar component"
                            className='rounded-full' src="https://i.ibb.co/X7Rj4YT/main-thumb-33162915-200-ldkguybdwmpvlreaedqtscbwjyqmvmbb.jpg" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;