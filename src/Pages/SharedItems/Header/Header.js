import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open,setOpen]=useState(false);
 const navItems=[
     {item:'HOME', link:'/'},
     {item:'PRODUCTS', link:'/products'},
     {item:'SERVICES', link:'/'},
     {item:'CONTACT', link:'/'},
     {item:'LOGIN', link:'/login'}
 ]
    return (
       <div className='shadow-lg w-full sticky top-0 left-0 '>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>

               <div className='font-fold text-2xl cursor-pointer text-grey-500'>
                   <span>Inventory Management</span>
               </div>
               <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' >
                   {open ? <XIcon className="h-7 w-7 text-blue-500"></XIcon> : <MenuIcon className="h-7 w-7 text-blue-500"></MenuIcon>}
                   
               </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${ open ? 'top-6 opacity-100' : 'top-[-200px]' } opacity-100 `}>

                        {
                            navItems.map(item=>
                                <li key={item.item} className='md:ml-8 text-md space-x-1 md:my-0 my-7'>
                                    <Link to={item.link} className='text-gray-500 font-semibold hover:pb-5  hover:text-green-500 hover:border-b-4 border-green-500 transition duration-300 ease-in-out'>{item.item}</Link>
                                </li>
                            )
                        }
                    </ul>

           </div>
       </div>
    );
};

export default Header;