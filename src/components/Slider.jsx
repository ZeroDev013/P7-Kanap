import { useState } from 'react'
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import '../styles/arrows.css'
import '../styles/slider.css'

function Slider({ dataSlider }) {

  const { pictures } = dataSlider;
  const [current, setCurrent] = useState(0);
  /* const arrows = this.state.arrow; */

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1)
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1)
  };

  return (

    /* images */
    <div className="sliders">
      {pictures.map((picture, index) =>
        <div
          key={index}
          className={
            index === current
              ? "slider slide__picture-active"
              : "slider"
          }
        >
          <img src={picture} alt="pictures" className="picture" />
        </div>)
      }
      {pictures.length > 1 &&
        <>
          <span className="prev" onClick={prevSlide}>
            <img src={arrowLeft} alt="arrowLeft" className='arrows' />
          </span>
          <span className="next" onClick={nextSlide}>
            <img src={arrowRight} alt="arrowRight" className='arrows' />
          </span>
          <div className="pagination">
            {current + 1}/{pictures.length}
          </div>
        </>
      }
    </div>
  )
}



export default Slider;

