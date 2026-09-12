import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "swiper/css"
import "swiper/css/autoplay"
import "./slideSwiper.css"

export const SlideSwiper = ({ imgs = [] }) => {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  if (!imgs.length) return null

  return (
    <div className="home-carousel-wrap">
      <Swiper
        className="home-carousel"
        modules={[Autoplay]}
        slidesPerView={1}
        centeredSlides
        spaceBetween={0}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        onSwiper={swiper => { swiperRef.current = swiper }}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
      >
        {imgs.map((img, index) => {
          const isActive = activeIndex === index
          return <SwiperSlide key={index} onClick={() => swiperRef.current?.slideTo(index)}>
            <GatsbyImage
              image={getImage(img)}
              alt={`Proyecto de Alicia Agosti Interiorismo ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              className={`home-carousel-image ${isActive ? "is-active" : "is-inactive"}`}
              imgStyle={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}
