import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 m-auto'>
            <img className='w-[400px]' src={logo} alt="" />
            <p className='text-accent'>Journalism without Fear and Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE , MMMM dd , yyyy")}</p>
        </div>
    );
};

export default Header;