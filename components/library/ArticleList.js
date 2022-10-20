import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'

export default function ArticleList({ articles, imgHeight = 100, imgWidth = 150 }) {
    return (
        <>
            {
                articles.length && articles.map((data, index) => (
                    <div key={index} className="mb-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href={`/articles/${data?.attributes?.slug}`}>
                                <a>
                                    <div className="flex bg-stone-900  align-middle justify-center content-center">
                                        <Image height={imgHeight} width={imgWidth} src={`${process.env.NEXT_PUBLIC_API_URL}${data?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${data?.attributes?.image?.data?.attributes?.url}`} alt={data?.attributes?.title} />
                                        <p className='w-full py-2  px-3'> {data?.attributes?.title} </p>
                                    </div>
                                </a>
                            </Link>

                        </motion.div>
                    </div>
                ))
            }
        </>
    )
}
