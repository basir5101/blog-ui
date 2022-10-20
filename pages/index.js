import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/Banner'
import CommonLayout from '../components/layouts/CommonLayout'
import PopularArticles from '../components/home/popularArticles/PopularArticles'
import ApiClient from '../utilities/ApiClient'
import MostReadArticles from '../components/home/MostReadArticles'
import FeaturedArticles from '../components/home/FeaturedArticles'

export default function Home({ articles }) {
  return (
    <CommonLayout>
      <Banner articles={articles || []} />
      <PopularArticles articles={articles || []} />
      <MostReadArticles articles={articles || []} />
      <FeaturedArticles articles={articles || []} />

    </CommonLayout>
  )
}


export async function getStaticProps() {
  const articles = await ApiClient.getArticles();

  return {
    props: {
      articles: articles || [],
    },

    revalidate: 10000, // In seconds
  }
}