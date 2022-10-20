import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

export default function NavLink({ link, name }) {
    const router = useRouter();
    const query = router.query.category;
    return (
        <li>
            <Link href={link || '/'}>
                <a className={`text-white text-base m-1 block font-semibold hover:text-purple-300 rounded-md hover:bg-purple-800 transition  py-2 px-7 ${query === name.toLowerCase() ? 'bg-purple-800' : "bg-stone-600"}`}> {name || 'Daily Science'} </a>
            </Link>
        </li>
    )
}
