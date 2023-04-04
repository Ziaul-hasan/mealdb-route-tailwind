import React, { useState } from 'react';
import logo from '../../images/fast-food-vector-clipart-design-graphic-clipart-design-free-png.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Nav from '../Nav/Nav';

const Header = () => {
    const [open, setOpen] = useState(false)
    const routes = [{ "name": "All", "id": 1, "path": "/" }, { "name": "Chicken", "id": 2, "path": "/chicken" }, { "name": "Beef", "id": 3, "path": "/beef" }, { "name": "Fish", "id": 4, "path": "/fish" }];
    return (
        <nav className='flex justify-between items-center px-6 shadow-md shadow-slate-500 bg-slate-300'>
            <div className='flex items-center bg-slate-300 py-2 z-10'>
                <img className='w-10 h-10 md:w-16 md:h-16' src={logo} alt="" />
                <h1 className='ms-3 md:ms-6 text-xl md:text-4xl font-bold text-yellow-800'>Spicy Corner</h1>
            </div>
            <div>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                            open === true ? <XMarkIcon className="h-6 w-6 text-yellow-800" /> : <Bars3Icon className="h-6 w-6 text-yellow-800" />
                        }
                    </span>
                </div>
                <ul className={`md:flex absolute md:static duration-300 bg-slate-300 ${open ? 'top-14 right-0 left-0 py-6' : '-top-36 right-0 left-0 py-6'} items-center text-xl font-semibold text-yellow-800`}>
                    {
                        routes.map(route => <Nav key={route.id} route={route}></Nav>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Header;