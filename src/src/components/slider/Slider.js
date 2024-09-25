import React from "react"
import Slider from "react-slick"
import image1 from "../../images/slider/SLID1parterre.jpg"
import image2 from "../../images/slider/SLID2bodega.jpg"
import image3 from "../../images/slider/SLID3faluas.jpg"
import image4 from "../../images/slider/SLID4principe.jpg"
import image5 from "../../images/slider/SLID5palacio.jpg"
import "./Slider.css"
import BtnAcceso from "../buttons/btnAcceso"

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 412,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const images = [
    { id: 1, src: image1, alt: "Slide 1" },
    { id: 2, src: image2, alt: "Slide 2" },
    { id: 3, src: image3, alt: "Slide 3" },
    { id: 4, src: image4, alt: "Slide 4" },
    { id: 5, src: image5, alt: "Slide 5" },
  ]

  return (
    <>
      <Slider {...settings} className="slider-container slider">
        {images.map(image => (
          <div key={image.id} className="slide">
            <img src={image.src} alt={image.alt} className="slide-image" />
          </div>
        ))}
      </Slider>
      <BtnAcceso></BtnAcceso>
    </>
  )
}

export default Carousel
