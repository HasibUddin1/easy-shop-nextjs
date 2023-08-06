"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import bannerImage1 from '../../assets/shopping-banner-image.jpg'
import bannerImage2 from '../../assets/shopping-banner-image-2.jpg'
import bannerImage3 from '../../assets/shopping-banner-image-3.jpg'
import bannerImage4 from '../../assets/shopping-banner-image-4.jpg'
import Image from "next/image";


const HeroSlider = () => {
    return (
        <section>
            <Swiper
                slidesPerView={1}
                loop
                navigation
                effect="fade"
                autoplay
                modules={[Navigation, EffectFade, Autoplay]}
            >
                <SwiperSlide>
                    <Image src={bannerImage1} width="100%" height="100%" alt="Error Loading Image" ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={bannerImage2} width="100%" height="100%" alt="Error Loading Image" ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={bannerImage3} width="100%" height="100%" alt="Error Loading Image" ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={bannerImage4} width="100%" height="100%" alt="Error Loading Image" ></Image>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HeroSlider;