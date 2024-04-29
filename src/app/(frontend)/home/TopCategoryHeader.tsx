"use client";
import React from 'react'
import styles from './home.module.css';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

export default function TopCategoryHeader() {
    const scrollright = () => {
        const scroller: any = document.getElementById("scroller");
        for (let index = 0; index < 90; index++) {
            scroller.scrollLeft = (scroller?.scrollLeft ?? 0) + 1;
        }
    }
    const scrollLeft = () => {
        const scroller: any = document.getElementById("scroller");
        for (let index = 0; index < 90; index++) {
            scroller.scrollLeft = (scroller?.scrollLeft ?? 0) - 1;
        }
    }

    return (

        <div className='flex flex-row items-center'>

            <MdArrowBackIos className='text-xl cursor-pointer' onClick={(e) => { scrollLeft(); }} />
            <div className={'w-full flex flex-row gap-3 text-ellipsis overflow-auto ' + styles.scrollbar} id='scroller'>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 1</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 2</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 3</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 4</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 5</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 6</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 7</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 8</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 9</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 10</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 11</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 12</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 13</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 14</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 15</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 16</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 17</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 18</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 19</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 20</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 21</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 22</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 23</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 24</div>
                <div className="bg-[#808080] bg-gradient-to-r from-cyan-500 to-blue-500  bg-no-repeat bg-cover py-[6px] px-4 rounded-lg text-white min-w-max">#Content 25</div>
            </div>
            <MdArrowForwardIos className='text-xl cursor-pointer' onClick={(e) => { scrollright(); }} />

        </div>
    )
}
