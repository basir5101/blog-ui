import React from 'react'
import CommonLayout from '../../../components/layouts/CommonLayout'
import Title from '../../../components/library/Title';
import ApiClient from '../../../utilities/ApiClient';
import ReactMarkdown from 'react-markdown';
import moment from 'moment/moment';
import PopularArticles from '../../../components/home/popularArticles/PopularArticles';
import Link from 'next/link';
import { motion } from 'framer-motion'
import Image from 'next/image';
import ArticleList from '../../../components/library/ArticleList';

export default function Article({ article, articles }) {
    console.log(article);
    return (
        <CommonLayout>
            <section className='px-10 mt-8 lg:flex'>
                <article className='lg:w-3/4'>
                    <Title title={article[0]?.attributes?.title} />
                    <div className='text-gray-400 text-md'>
                        {
                            moment(article[0]?.attributes?.publishedAt).format("MMM Do YY")
                        }
                    </div>
                    <div className='text-center my-5'>
                        <Image height={400} width={500} src={`${process.env.NEXT_PUBLIC_API_URL}${article[0]?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}`} alt={article[0]?.attributes?.title} />
                    </div>
                    <div className='mt-8'>
                        {/* eslint-disable-next-line react/no-children-prop */}
                        <ReactMarkdown children={article[0]?.attributes?.body} />
                    </div>
                </article>
                <div className='mt-5 lg:w-1/4 lg:ml-10'>
                    <h3 className='text-base mb-3 text-stone-300'>Read More Articles</h3>
                    <ArticleList articles={articles} />
                </div>
            </section>
        </CommonLayout>
    )
}


export async function getStaticPaths() {
    let articles = await ApiClient.getArticles();
    const paths = articles.map((article) => (
        {
            params: { id: `${article.id}`, title: `${article?.attributes?.slug}` }
        }
    ))

    return { paths, fallback: 'blocking' }

}


export async function getStaticProps(context) {
    const { title } = context.params
    const article = await ApiClient.getArticlesBySlug(title);
    let articles = await ApiClient.getArticles();
    return {
        props: {
            article,
            articles
        },

        revalidate: 10000, // In seconds
    }
}