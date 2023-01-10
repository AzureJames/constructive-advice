import '../scss/components/_banner.scss';
import img from './assets/placeholder.jpg';

export default function DevBanner({title, tagline, image, svgColor}) {
  return (
    <>
        <div className='devbanner'>
            <h1 className='title'>{title}</h1>
              <img src={img} width='100' height='100' alt="test"/>
            <p className='description'>{tagline}</p>
        </div>
    </>
  )
}