// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Banner({ articles }) {
    console.log(articles);
    return (
        <div>
            <Swiper
                className='my-10'
                slidesPerView={2}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    520: {
                        slidesPerView: 1,
                        spaceBetween: 18,
                    },
                    720: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    820: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                autoplay={false}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Autoplay]}
            >
                {
                    articles.map((data, index) => (
                        <SwiperSlide className='mx-2 border border-dotted border-purple-900' key={index}>
                            <div className="relative group">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link href={`/articles/${data?.attributes?.slug}`}>
                                        <a>
                                            <Image height={400} width={800} src={`${process.env.NEXT_PUBLIC_API_URL}${data?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}`} alt="" />
                                            <div className='w-full bg-purple-500 py-2 text-center  px-3'> {data?.attributes?.title} </div>
                                        </a>
                                    </Link>
                                </motion.div>
                            </div>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
