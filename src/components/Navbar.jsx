import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import Overlay from './Overlay';
import SmMenu from './SmMenu';
import { UserAuth } from './AuthContext';

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const clickHolder = () => {
        setShow(true);
    }

    const closeHolder = () => {
        setShow(false);
    }

    const logoutHandler = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error);
            console.log("Congratulations! LogOut Successfully");
        }
    }

    return (
        <div className='flex justify-between items-center w-full h-14 md:text-base text-sm'>
            <div className='flex items-center'>
                {user?.email ? (<AiOutlineMenu onClick={clickHolder} className='text-white md:hidden mx-2 mr-3' size={25} />) : null}
                {show && <Overlay onCancel={closeHolder} />}
                {show && <SmMenu onCancel={closeHolder} />}
                <Link to='/grid' ><h1 className='text-white text-xl py-3 cursor-pointer font-bold md:mx-5'>DOPOP</h1></Link>
                {user?.email ? (<ul className='text-gray-400 hidden md:flex text-base'>
                    <li className='p-3 hover:text-white cursor-pointer'><Link to='/home'>Home</Link></li>
                    <li className='p-3 hover:text-white cursor-pointer'><Link to='marketplace'>MarketPlace</Link></li>
                    <li className='p-3 hover:text-white cursor-pointer'><Link to='creater'>Creater</Link></li>
                    <li className='p-3 hover:text-white cursor-pointer'><Link to='contact'>Contact Us</Link></li>
                </ul>) : null}
            </div>
            <div className='flex'>
                {user?.email ? (<form className='lg:flex hidden bg-gray-700 m-3 box-border rounded-full items-center'>
                    < AiOutlineSearch className='text-gray-400 mx-2' size={15} />
                    <input className='pr-2 bg-gray-700 outline-none text-base text-gray-400 rounded-full' type="text" placeholder='Search' />
                </form>) : null}
                {user?.email ? (<div className='m-3 flex'>
                    <Link to='/account'><button className='text-white whitespace-nowrap p-1 mr-2'>Account</button></Link>
                    <button onClick={logoutHandler} className='bg-gray-200 whitespace-nowrap text-black rounded md:px-3 px-1 mx-3 py-1'>Log Out</button>
                </div>) : (<div className='m-3 flex'>
                    <Link to='/'><button className='text-white whitespace-nowrap p-1 mr-2'>Log In</button></Link>
                    <Link to='/signup'><button className='bg-gray-200 whitespace-nowrap text-black rounded md:px-3 px-1 mx-3 py-1'>Sign Up</button></Link>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar