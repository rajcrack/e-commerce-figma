import Link from 'next/link'
import React from 'react'
import { FaTwitter } from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi'
import { IoIosMail } from 'react-icons/io'
import Image from 'next/image';

export default function Footers() {
    return (
        <section className='bg-gradient-to-r from-[#F5F5F5] via to-transparent' >
            <div className='bg-white  mx-auto container w-full flex flex-row gap-5' >

                <div className='bg-[#F5F5F5] py-5 w-full rounded-e-3xl pr-10'>
                    {/* Mega news */}
                    <div className='flex flex-row justify-between'>
                        <div className='w-[60%]'>
                            <div className='flex flex-row gap-2'>
                                <span className='bg-red-600 p-1 rounded-lg'></span>  <h4 className='flex-1 text-xl font-semibold'>Mega News</h4>
                            </div>
                            <p className='text-[#3e3232de] py-4 px-6 lg:max-w-[90%] h-[285px] overflow-scroll mb-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellente</p>
                            <div className='flex flex-row gap-2'>
                                <span className='bg-red-600 p-1 rounded-lg'></span>  <h4 className='flex-1 text-xl font-semibold'>NewsLetters</h4>
                            </div>
                            <div className='flex flex-row justify-between items-center bg-white p-3 rounded-lg my-5'>
                                <span>Write Your Email ...</span>
                                <IoIosMail size={28} />
                            </div>
                        </div>
                        {/* Categories */}
                        <div className='w-[25%]'>
                            <div className='flex flex-row gap-2'>
                                <span className='bg-red-600 p-1 rounded-lg'></span>  <h4 className='flex-1 text-xl font-semibold'>Categories</h4>
                            </div>
                            <ul className='h-[285px] flex flex-col justify-evenly text-[14px] py-4  mb-[22px] pl-3'>
                                <Link href='#'><li>Culture</li></Link>
                                <Link href='#'><li>Fashion</li></Link>
                                <Link href='#'><li>Featured</li></Link>
                                <Link href='#'><li>Food</li></Link>
                                <Link href='#'><li>Healthy Living</li></Link>
                                <Link href='#'><li>Technology</li></Link>
                            </ul>
                            <div className='flex flex-row gap-2'>
                                <span className='bg-red-600 p-1 rounded-lg'></span>  <h4 className='flex-1 text-xl font-semibold'>Social Network</h4>
                            </div>
                            <div className='flex flex-row gap-3 items-center py-5'>
                                <div className='flex flex-row gap-2 items-center py-3 px-6 max-w-min rounded-xl text-white bg-gradient-to-r from-red-500 to-pink-500'>
                                    <FiInstagram />
                                    <span>Instagram
                                    </span>
                                </div>
                                <span className='p-3 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl text-xl text-white'>
                                    <FaTwitter />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='text-[#3E3232] bg-[#dbdada] flex flex-row items-center justify-between p-4 rounded-2xl'>
                        <div>Privacy Policy | Terms & Conditions</div>
                        <div>All Copyright @ 2024 Reserved.</div>
                    </div>
                </div>

                <div className='w-full flex flex-row py-5'>
                    <div className='w-[40%]'>
                        <div className='flex flex-row gap-2'>
                            <span className='bg-red-600 p-1 rounded-lg'></span>  <h4 className='flex-1 text-xl font-semibold'>New Comments</h4>
                        </div>
                        <div className='flex flex-col gap-[26px] my-7 justify-between max-h-[470px] overflow-scroll'>
                            <div className='bg-[#F5F5F5] p-3 pl-6 rounded-xl shadow-lg'>
                                <span className='text-lg font-semibold'>Ellsmartx</span>
                                <p className='text-sm text-[gray]'>how nice does this look 😍 I feel it should be delicious, thank you.</p>
                            </div>
                            <div className='bg-[#F5F5F5] p-3 pl-6 rounded-xl shadow-lg'>
                                <span className='text-lg font-semibold'>Cassia</span>
                                <p className='text-sm text-[gray]'>Take a rest, i'll be cheer up you again in 2 next game go go go.</p>
                            </div>
                            <div className='bg-[#F5F5F5] p-3 pl-6 rounded-xl shadow-lg'>
                                <span className='text-lg font-semibold'>Amanda</span>
                                <p className='text-sm text-[gray]'>you were stunning today, jan! 💗 great match 👍🏽👍🏽.</p>
                            </div>
                            <div className='bg-[#F5F5F5] p-3 pl-6 rounded-xl shadow-lg'>
                                <span className='text-lg font-semibold'>Denis Simonassi</span>
                                <p className='text-sm text-[gray]'>It was a great match today Janzi! You did great😉🇩🇪.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[60%]  pl-6'>
                        <div className='flex flex-row gap-2 '>
                            <span className='bg-red-600 p-1 rounded-lg'></span>  <h4 className='flex-1 text-xl font-semibold'>New Comments</h4>
                        </div>
                        <div className='grid grid-flow-row grid-cols-3 pl-5 max-h-[470px] gap-5 pt-12'>
                            <div className='relative w-[131px] h-[131px] rounded-xl bg-[url("/images/footer-1.png")]' ></div>
                            <div className='relative  w-[131px] h-[131px] rounded-xl bg-[url("/images/footer-2.png")]' ></div>
                            <div className='relative  w-[131px] h-[131px] rounded-xl bg-[url("/images/footer-3.png")]' ></div>
                            <div className='relative  w-[131px] h-[131px] rounded-xl bg-[url("/images/footer-4.png")]' ></div>
                            <div className='relative  w-[131px] h-[131px] rounded-xl bg-[url("/images/footer-5.png")]' ></div>
                            <div className='relative  w-[131px] h-[131px] rounded-xl bg-[url("/images/footer-6.png")]' ></div>
                            <div className='relative  w-[131px] h-[131px] rounded-xl bg-[url("/images/footer-7.png")]' ></div>
                            <div className='relative  w-[131px] h-[131px] rounded-xl bg-[url("/images/footer-8.png")]' ></div>
                            <div className='relative  w-[131px] h-[131px] rounded-xl bg-[url("/images/footer-9.png")]' ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
