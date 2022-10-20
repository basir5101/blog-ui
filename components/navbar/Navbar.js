import Link from 'next/link'
import React from 'react'
import NavLink from '../library/NavLink'
import Image from 'next/image'

export default function Navbar() {
    const nameLinks = [
        {
            name: 'Home',
            slug: '/'
        },
        {
            name: 'Daily Science',
            slug: '/categories/daily-science'
        },
        {
            name: 'Physics',
            slug: '/categories/physics'
        },
        {
            name: 'Space',
            slug: '/categories/space'
        },
        {
            name: 'Chemistry',
            slug: '/categories/chemistry'
        },
        {
            name: 'Mathematics',
            slug: '/categories/mathematics'
        },
        {
            name: 'Nature',
            slug: '/categories/nature'
        },
        {
            name: 'Technology',
            slug: '/categories/technology'
        }
    ]
    return (
        <nav className='px-5 flex justify-between  items-center'>
            <Image src="/logo.png" height={70} width={70} alt="logo" />
            <ul className='flex flex-wrap'>
                {
                    nameLinks.map(item => <NavLink key={item.slug} name={item.name} link={item.slug} />)
                }
            </ul>
        </nav>
    )
}
