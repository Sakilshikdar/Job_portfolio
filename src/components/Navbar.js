import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({ children }) => {
    const nabStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <div class="w-full navbar bg-base-300">

                    <div class="flex-1 px-2 mx-2 text-2xl">Personal Portfolio</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <li style={{ nabStyle }}>
                                <Link to='/' className='rounded-lg'>
                                    Home
                                </Link>
                            </li>
                            <li style={{ nabStyle }}>
                                <a href='#about' className='rounded-lg'>
                                    About
                                </a>
                            </li>
                            <li style={{ nabStyle }}>
                                <a className='rounded-lg'>
                                    Services
                                </a>
                            </li>
                            <li style={{ nabStyle }} >
                                <a href='#contract' className='rounded-lg'>
                                    Contact
                                </a>
                            </li>
                            {/* <li style={{nabStyle}}>
                                <a className='rounded-lg'>
                                    Login
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li>
                        <a className='rounded-lg'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className='rounded-lg'>
                            About
                        </a>
                    </li>
                    <li>
                        <a className='rounded-lg'>
                            Services
                        </a>
                    </li>
                    <li>
                        <a className='rounded-lg'>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;