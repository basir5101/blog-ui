import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function FeaturedArticles({ articles }) {
    return (
        <section className='px-12'>
            <h2 className='text-2xl first-letter:text-purple-400 first-letter:font-semibold first-letter:text-3xl'>Featured Articles</h2>
            <div className='grid lg:grid-cols-4 gap-7 md:grid-cols-3 mt-5'>
                {
                    articles.length && articles.map((data, index) => (
                        <div key={index} className="relative group shadow-inner   shadow-white bg-stone-900">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, rotate: 32 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={`/articles/${data?.attributes?.slug}`}>
                                    <a className='flex flex-col items-end justify-end content-end '>
                                        <Image className='group-hover:rotate-6 group-hover:scale-125 transition-all' height={400} width={500} src={`${process.env.NEXT_PUBLIC_API_URL}${data?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}`} alt={data?.attributes?.title} />
                                        <p className='w-full  py-2 text-center  px-3'> {data?.attributes?.title} </p>
                                    </a>
                                </Link>
                            </motion.div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
