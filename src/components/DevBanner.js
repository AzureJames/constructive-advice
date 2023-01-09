import '../scss/components/_banner.scss';
import img from './assets/imgs/placeholder.jpg';

export default function DevBanner({title, tagline, svgColor}) {
  return (
    <>
        <div className='devbanner'>
            <h1 className='title'>{title}</h1>
              <img src={img} width='100' height='100'/>
            <p className='description'>{tagline}</p>
        </div>
    </>
  )
}