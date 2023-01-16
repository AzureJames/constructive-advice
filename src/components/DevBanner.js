import '../scss/components/_banner.scss';
import img from '../img/dudes.jpg';

export default function DevBanner({title, tagline, image, svgColor}) {
  return (
    <>
        <div className='devbanner'>
            <h1 className='title'>{title}</h1>
              <img src={img} width='300' height='225' alt="test"/>
            <p className='description'>{tagline}</p>
        </div>
    </>
  )
}