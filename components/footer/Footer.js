import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLink from '../library/NavLink'
import Title from '../library/Title'

export default function Footer() {
    const footerLinks = [
        {
            title: 'Categories',
            links: [
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
            ],
        },
        {
            title: 'Useful Links',
            links: [
                {
                    name: 'Space and Time',
                    slug: '/categories/daily-science'
                },
                {
                    name: 'Free Code Camp',
                    slug: '/categories/physics'
                },
                {
                    name: 'Open Source',
                    slug: '/categories/space'
                },
                {
                    name: "Learn Physics",
                    slug: '/categories/space'
                },
                {
                    name: 'No Way to leave',
                    slug: '/categories/space'
                },
            ]
        },
        {
            title: 'Contact',
            links: [
                {
                    name: 'LinkedIn',
                    slug: '/categories/daily-science'
                },
                {
                    name: 'GitHub',
                    slug: '/categories/physics'
                },
                {
                    name: 'Email',
                    slug: '/categories/space'
                },
                {
                    name: "Whatsapp",
                    slug: '/categories/space'
                },
                {
                    name: 'Phone',
                    slug: '/categories/space'
                },
            ]
        }

    ]
    return (
        <footer className='mt-14 p2-8 bg-stone-800'>
            <div className="grid lg:grid-cols-4 text-center md:grid-cols-3 grid-cols-2" >
                <Image src={'/logo.png'} height={250} width={200} alt={'logo'} />
                {
                    footerLinks.map((links, index) => (
                        <div key={index}>
                            <Title className='mb-8' title={links.title} />
                            {
                                links.links.map((link, index) => (
                                    <Link href={link.slug} key={index}>
                                        <a className='block mb-1 hover:text-stone-300 text-lg'>
                                            {link.name}
                                        </a>
                                    </Link>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className="text-center">all rights reserve @ Abdul Basir 2022</div>
        </footer>
    )
}
