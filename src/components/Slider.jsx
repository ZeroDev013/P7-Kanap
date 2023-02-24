import { useState } from 'react'
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import '../styles/arrows.css'
import '../styles/slider.css'

function Slider({ dataSlider }) {

  const { pictures } = dataSlider;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current ===  pictures.length - 1 ? 0 : current + 1)
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1)
  };

  return (

    <div className="sliders">
      <div className="container__picture">
        {pictures.map((pictures, index) =>
          <div
            key={index}
            className={
              index === current
                ? "slider slide__picture-active"
                : "slider"
            }
          >
            <img src={pictures} alt="pictures" className="picture" />
          </div>)
        }

        <span className="prev" onClick={prevSlide}>
          <img src={arrowLeft} alt="arrowLeft" className='arrows' />
        </span>
        <span className="next" onClick={nextSlide}>
          <img src={arrowRight} alt="arrowRight" className='arrows' />
        </span>

        <div className="pagination">
          {pictures.map((_, index) => {
            return (
              <div
                key={index}
                className={index === current
                  ? "pagination_number pagination_number-active"
                  : "pagination_number"
                }
              >
                <p className="number">{current}/{pictures.length - 1}</p> 
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Slider;

