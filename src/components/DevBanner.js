import '../scss/components/_banner.scss';
// import img from '../img/whiterose.jpg';
import img from '../img/contact-bg-sm.jpg';

export default function DevBanner({title, tagline, tagline2, image, svgColor}) {
  return (
    <>
        <div className='devbanner'>
            <h1 className='title'>{title}</h1>
              <img src={img} width={375} height={250} alt="mountain forest"/>
            <p className='description'>{tagline}</p>
            <p className='description'>{tagline2}</p>
        </div>
    </>
  )
}