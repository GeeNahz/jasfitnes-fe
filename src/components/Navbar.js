import React, { useState } from 'react';
import logo from '../img/logo2.jpg'


const Navbar = () => {

    const [searchText, setSearchText] = useState("")

    return (
        <nav className='fixed top-0 flex justify-between w-full bg-white text-black mx-auto my-0 py-3 px-10 z-20'>
            <div className="logo h-5 w-12">
                <img src={ logo } alt="logo" />
            </div>
            <div>
                {/* on md screen */}
                <div className='flex flex-row space-x-5'>
                    <ul className="flex flex-row space-x-5 uppercase">
                        <li className='active'>Home</li>                
                        <li>Services</li>                
                        <li>About</li>                
                        <li>Contact</li>                
                    </ul>
                    <form className=''>
                        <input className='hidden bg-gray-200 rounded-full py-1 pl-5 lg:inline' type="search" name="search" value={ searchText } onChange={e => setSearchText(e.target.value)} placeholder="Search"/>
                        <i className='fa fa-search lg:ml-2'></i>                    
                    </form>
                </div>
                {/* on sm screen */}
            </div>
        </nav>
    );
}
 
export default Navbar;