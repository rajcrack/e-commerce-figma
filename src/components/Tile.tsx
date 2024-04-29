import Link from 'next/link';
import React from 'react'

interface Props {
    title: string
    isActive?: boolean
    url?: string
}
export function Tile({ title, isActive, url }: Props) {

    return (
        <Link href={`${url ?? '#'}`}>
            <div className='pl-3 pr-4 py-2 mb-1 hover:bg-[#374151] focus:bg-[#374151] text-[#D1D5DB] w-full cursor-pointer'>
                <div className='text-[17px] font-medium'>{title}</div>
            </div>
        </Link>
    )
}


export function SubHeading({ title }: Props) {
    return (<>
        <div className='pl-3 pr-4 py-1'>
            <div className='text-gray-400 text-[16px]'>{title}</div>
        </div>
    </>);
}