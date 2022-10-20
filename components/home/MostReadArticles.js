import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import ArticleList from '../library/ArticleList'

export default function MostReadArticles({ articles }) {
    return (
        <section className='px-12 mt-12'>
            <h2 className='text-2xl first-letter:text-purple-400 first-letter:font-semibold first-letter:text-3xl'>Most Read Articles</h2>
            <div className='grid lg:grid-cols-4 gap-5 md:grid-cols-3 mt-5'>
                <ArticleList articles={articles} imgHeight={180} imgWidth={180} />
            </div>
        </section>
    )
}
