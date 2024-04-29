import React from 'react'
import { SubHeading, Tile } from '../Tile'

export default function AdminSideBar() {
    return (
        <section className='lg:w-[19rem] bg-[#162234] py-2'>
            <SubHeading title='Home' />
            <Tile title='Heading' isActive={false} />
            <Tile title='Heading' isActive={false} />
            <Tile title='Heading' isActive={false} />
            <Tile title='Heading' isActive={false} />
            <Tile title='Heading' isActive={false} />
        </section>
    )
}
