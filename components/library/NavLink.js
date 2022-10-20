import Link from 'next/link'
import React from 'react'

export default function NavLink({ link, name }) {
    return (
        <li>
            <Link href={link || '/'}>
                <a className='text-white text-base m-1 block font-semibold hover:text-purple-300 rounded-md hover:bg-purple-800 transition bg-stone-600 py-2 px-7'> {name || 'Daily Science'} </a>
            </Link>
        </li>
    )
}
