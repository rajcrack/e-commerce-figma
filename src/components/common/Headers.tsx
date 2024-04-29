import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Popover } from 'flowbite-react';
import { FaRegBookmark } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoSearchSharp } from 'react-icons/io5';

export default function Headers() {
    return (
        <div className='container mx-auto flex flex-row justify-between sticky w-full h-[80px] items-center px-8 '>
            {/* headin 1 */}
            <div className='flex flex-row items-center w-full gap-6'>
                <Link href="/"><span className='text-[#FC4308] text-[22px] font-bold'>MEGA.news</span></Link>
                &nbsp;
                <Link href="#" className='font-medium hover:text-blue-500 text-[17px]' ><span>Categories</span></Link>
                <Link href="#" className='font-medium hover:text-blue-500 text-[17px]' ><span>Pages</span></Link>
                <Link href="#" className='font-medium hover:text-blue-500 text-[17px]' ><span>Contact Us</span></Link>
                <Link href="#" className='font-medium hover:text-blue-500 text-[17px]' ><span>About Us</span></Link>
            </div>
            {/* headin 2 */}
            <div className='w-full flex flex-row justify-end items-center gap-4'>
                <div className='bg-[#e9e9e9] p-2 rounded-lg flex flex-row w-full py-3 items-center justify-between px-2 gap-2 cursor-pointer'>
                    <BsThreeDotsVertical className='text-[21px] text-gray-400' />
                    <span className='flex-1 text-gray-400'>Search Everything</span>
                    <IoSearchSharp className='text-[23px] text-gray-400' />
                </div>

                <Popover placement="bottom-start" trigger="click" content={UserPopup}><div><span className='flex flex-row items-center gap-2 cursor-pointer'>
                    <span className="block rounded-full w-[43px] h-[43px] bg-[url('/images/user.jpg')] bg-cover"></span>
                    <span className="text-[16px]">Admin</span>
                    <IoIosArrowDown className='text-[21px]' />
                </span></div></Popover>
                <span className='rounded-md p-3 bg-[#e9e9e9]'>
                    <FaRegBookmark className='text-[21px]' />
                </span>
            </div>
        </div >
    )
}

const UserPopup: React.ReactNode = (<div className='z-10 rounded-md drop-shadow-sm'>
    <div className="absolute z-10  inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
        <div className="p-3">
            <div className="flex items-center justify-between mb-2">
                <img className="w-10 h-10 rounded-full" src="/images/user.jpg" alt="Jese Leos" />
                <div>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
                </div>
            </div>
            <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                <a href="#">Jese Leos</a>
            </p>
            <p className="mb-3 text-sm font-normal">
                <a href="#" className="hover:underline">@jeseleos</a>
            </p>
            <p className="mb-4 text-sm">Open-source contributor. Building <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</p>
            <ul className="flex text-sm">
                <li className="me-2">
                    <a href="#" className="hover:underline">
                        <span className="font-semibold text-gray-900 dark:text-white">799</span>
                        <span>Following</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">
                        <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                        <span>Followers</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</div>);



