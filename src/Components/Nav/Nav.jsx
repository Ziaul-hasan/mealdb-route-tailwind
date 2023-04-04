import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ route }) => {
    const { name, path } = route
    return (
        <div>
            <li className='me-8 hover:bg-yellow-600 md:hover:bg-transparent md:hover:text-yellow-600 px-6 md:px-0'>
                <Link to={path}>{name}</Link>
            </li>
        </div>
    );
};

export default Nav;