import React from 'react'
import { UserAuth } from './AuthContext';

const SmMenu = (props) => {
    const {user} = UserAuth();
    const cancelHolder = () => {
        props.onCancel();
    }
    return (
        <div>
            {user?.email ? (<div>
                <ul onClick={cancelHolder} className='text-gray-300 absolute text-base top-3 left-0 bg-black w-[150px] h-[17%] rounded-3xl z-10 px-4'>
                    <li className='p-3 hover:text-white cursor-pointer mb-8'>Home</li>
                    <li className='p-3 hover:text-white cursor-pointer my-8'>MarketPlace</li>
                    <li className='p-3 hover:text-white cursor-pointer my-8'>Creater</li>
                    <li className='p-3 hover:text-white cursor-pointer my-8'>Contact Us</li>
                </ul>
            </div>) : null}
        </div>
    )
}

export default SmMenu