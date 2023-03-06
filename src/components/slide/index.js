import React from 'react'
import Slider from 'react-slick'

function Slide()
{
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }
    ]

  }
  return(
    <>
      <Slider {...settings} >
      <img src="/images/hamburger-double.jpg" alt="Hamburger Double" />
      <img src="/images/hamburger-just-eat.jpg" alt="Hamburger just-Eat" />
      <img src="/images/hamburger-gourmet.jpg" alt="Hamburger Gourmet" />
      <img src="/images/buger-delicious.jpg" alt="Hamburger Delicious" />
      <img src="/images/hamburger-crafters.jpg" alt="Hamburger Crafters" />
      </Slider>
    </>
  )
}
export default Slide