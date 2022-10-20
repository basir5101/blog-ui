import React from 'react'
import CommonLayout from '../../components/layouts/CommonLayout'
import Title from '../../components/library/Title';
import ApiClient from '../../utilities/ApiClient';
import { motion } from 'framer-motion'
import Link from 'next/link';

export default function Category(props) {
    return (
        <CommonLayout>
            <section className="mt-8 px-10">
                <Title title={`Articles Related To ${props.category.toUpperCase()}`} />
                <div className="lg:flex mt-6">
                    <div className="grid lg:grid-cols-3 gap-5 lg:w-3/4">
                        {
                            props.article.length > 0 &&
                            props.article?.map((data, index) => (
                                <div key={index} className="mb-5">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link href={`/articles/${data?.attributes?.slug}`}>
                                            <a>
                                                <img src="https://lh3.googleusercontent.com/-P0d93sGjFSQ/Ycd6QmS_0KI/AAAAAAAABdQ/Yw59HnD9srQ1S7p4OrmP6Hf0Ad33Lzp_gCNcBGAsYHQ/s16000/1041.webp" alt="" />
                                                <div className='w-full bg-purple-500 py-2 text-center  px-3'> {data?.attributes?.title} </div>
                                            </a>
                                        </Link>

                                    </motion.div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='lg:w-1/4 lg:ml-5'>
                        <Title title={'Read More Articles'} />
                        {
                            props.articles.length && props.articles.map((data, index) => (
                                <div key={index} className="my-5">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5, x: 100 }}
                                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link href={`/articles/${data?.attributes?.slug}`}>
                                            <a>
                                                <img src="https://lh3.googleusercontent.com/-P0d93sGjFSQ/Ycd6QmS_0KI/AAAAAAAABdQ/Yw59HnD9srQ1S7p4OrmP6Hf0Ad33Lzp_gCNcBGAsYHQ/s16000/1041.webp" alt="" />
                                                <div className='w-full bg-purple-500 py-2 text-center  px-3'> {data?.attributes?.title} </div>
                                            </a>
                                        </Link>

                                    </motion.div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </CommonLayout>
    )
}


export async function getStaticPaths() {
    let categories = await ApiClient.getCategories();
    const paths = categories.map((article) => (
        {
            params: { category: `${article?.attributes?.name}` }
        }
    ))

    return { paths, fallback: 'blocking' }

}

export async function getStaticProps(context) {
    const { category } = context.params
    const article = await ApiClient.getArticlesByCategory(category);
    let articles = await ApiClient.getArticles();
    return {
        props: {
            article,
            articles,
            category
        },

        revalidate: 10000, // In seconds
    }
}