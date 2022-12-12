import React from 'react';
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img5 from "../images/img-5.jpg";
import img6 from "../images/img-6.jpg";

const Grid = () => {
    return (
        <div className='my-5 md:mx-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 place-items-center'>
            <div className='relative h-[200px] md:w-[230px] w-[80%]'>
                <img src={img1} alt="/" className='h-full md:w-[500px] w-full object-cover rounded-2xl' />
                <div className='absolute bg-gray-500/20 lg:left-5 md:left-[9px] bottom-3 h-[22%] lg:w-[85%] md:w-[90%] w-[90%] left-5 rounded-full'>
                    <div className='py-1 px-5 font-bold text-[10px] whitespace-nowrap   flex text-gray-400 items-center justify-between'>
                        <div className='p-1'>
                            <h1>Average Bid</h1>
                            <p>34.6 ETH</p>
                        </div>
                        <div className='p-1'>
                            <h1>Current Bid</h1>
                            <p>24.6 ETH</p>
                        </div>
                        <div className='p-1'>
                            <button className='rounded-xl bg-black px-3 py-1'>Bid</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center row-start-1 lg:col-start-2 md:col-span-2 text-white md:h-[200px]'>
                <h1 className='font-bold lg:text-4xl md:text-2xl text-center leading-normal'>Create, Buy & Sell NFTs</h1>
                <p className='text-gray-400 lg:text-sm md:text-[13px] m-4 text-center'>Discover the best & new digital assets</p>
                <button className='bg-blue-800 m-4 py-3 md:text-sm px-4 rounded-full'>View Market</button>
            </div>
            <div className='relative h-[200px] md:w-[230px] w-[80%]'>
                <img src={img2} alt="/" className='h-full md:w-[500px] w-full object-cover rounded-2xl' />
                <div className='absolute bg-gray-500/20 lg:left-5 md:left-[9px] bottom-3 h-[22%] lg:w-[85%] md:w-[90%] w-[90%] left-5 rounded-full'>
                <div className='py-1 px-5 font-bold text-[10px] whitespace-nowrap   flex text-gray-400 items-center justify-between'>
                        <div className='p-1'>
                            <h1>Average Bid</h1>
                            <p>34.6 ETH</p>
                        </div>
                        <div className='p-1'>
                            <h1>Current Bid</h1>
                            <p>24.6 ETH</p>
                        </div>
                        <div className='p-1'>
                            <button className='rounded-xl bg-black px-3 py-1'>Bid</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative h-[200px] md:w-[230px] w-[80%]'>
                <img src={img3} alt="/" className='h-full md:w-[500px] w-full object-cover rounded-2xl' />
                <div className='absolute bg-gray-500/20 lg:left-5 md:left-[9px] bottom-3 h-[22%] lg:w-[85%] md:w-[90%] w-[90%] left-5 rounded-full'>
                <div className='py-1 px-5 font-bold text-[10px] whitespace-nowrap   flex text-gray-400 items-center justify-between'>
                        <div className='p-1'>
                            <h1>Average Bid</h1>
                            <p>34.6 ETH</p>
                        </div>
                        <div className='p-1'>
                            <h1>Current Bid</h1>
                            <p>24.6 ETH</p>
                        </div>
                        <div className='p-1'>
                            <button className='rounded-xl bg-black px-3 py-1'>Bid</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative h-[200px] md:w-[230px] w-[80%]'>
                <img src={img4} alt="/" className='h-full md:w-[500px] w-full object-cover rounded-2xl' />
                <div className='absolute bg-gray-500/20 lg:left-5 md:left-[9px] bottom-3 h-[22%] lg:w-[85%] md:w-[90%] w-[90%] left-5 rounded-full'>
                <div className='py-1 px-5 font-bold text-[10px] whitespace-nowrap   flex text-gray-400 items-center justify-between'>
                        <div className='p-1'>
                            <h1>Average Bid</h1>
                            <p>34.6 ETH</p>
                        </div>
                        <div className='p-1'>
                            <h1>Current Bid</h1>
                            <p>24.6 ETH</p>
                        </div>
                        <div className='p-1'>
                            <button className='rounded-xl bg-black px-3 py-1'>Bid</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative h-[200px] md:w-[230px] w-[80%]'>
                <img src={img5} alt="/" className='h-full md:w-[500px] w-full object-cover rounded-2xl' />
                <div className='absolute bg-gray-500/20 lg:left-5 md:left-[9px] bottom-3 h-[22%] lg:w-[85%] md:w-[90%] w-[90%] left-5 rounded-full'>
                <div className='py-1 px-5 font-bold text-[10px] whitespace-nowrap   flex text-gray-800 items-center justify-between'>
                        <div className='p-1'>
                            <h1>Average Bid</h1>
                            <p>34.6 ETH</p>
                        </div>
                        <div className='p-1'>
                            <h1>Current Bid</h1>
                            <p>24.6 ETH</p>
                        </div>
                        <div className='p-1'>
                            <button className='rounded-xl bg-black px-3 py-1 text-gray-400'>Bid</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative h-[200px] md:w-[230px] w-[80%]'>
                <img src={img6} alt="/" className='h-full md:w-[500px] w-full object-cover rounded-2xl' />
                <div className='absolute bg-gray-500/20 lg:left-5 md:left-[9px] bottom-3 h-[22%] lg:w-[85%] md:w-[90%] w-[90%] left-5 rounded-full'>
                <div className='py-1 px-5 font-bold text-[10px] whitespace-nowrap   flex text-gray-400 items-center justify-between'>
                        <div className='p-1'>
                            <h1>Average Bid</h1>
                            <p>34.6 ETH</p>
                        </div>
                        <div className='p-1'>
                            <h1>Current Bid</h1>
                            <p>24.6 ETH</p>
                        </div>
                        <div className='p-1'>
                            <button className='rounded-xl bg-black px-3 py-1'>Bid</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid