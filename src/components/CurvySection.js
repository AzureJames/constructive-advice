import '../scss/components/_curvysection.scss';
import img from '../img/woman-sunset.jpg';

export default function CurvySection({title, tagline, image,theClass, svgColor}) {
  const smlSvg = {fill: '#fcfbfc', width: '5rem'};

  return (
    <>
        <div className='curvysection'>
          <div className="custom-shape-divider-top-1673719581">
              <svg dataName="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>
          </div>
          <svg viewBox="0 0 64 64" style={smlSvg}>
            <path d="M60 40h-1v-4a5 5 0 0 0-5-5h-1V18a7 7 0 0 0-7-7H18a7 7 0 0 0-7 7v13h-1a5 5 0 0 0-5 5v4H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7.33a1 1 0 0 0 .95-.68l.72-2.27a3 3 0 0 1 2.84-2h32.28a3 3 0 0 1 2.84 2l.76 2.27a1 1 0 0 0 1 .68H60a1 1 0 0 0 1-1V41a1 1 0 0 0-1-1ZM13 18a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v13h-3.18c.3-.84.13-1.21.18-3a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3c0 1.79-.12 2.16.18 3h-6.36c.3-.84.13-1.21.18-3a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3c.05 1.79-.12 2.16.18 3H13Zm24 12v-2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1Zm-19 0v-2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1ZM7 36a3 3 0 0 1 3-3h44a3 3 0 0 1 3 3v4H7Zm52 15h-5.61l-.53-1.58A5 5 0 0 0 48.12 46H15.88a5 5 0 0 0-4.74 3.42L10.61 51H5v-9h54Z"></path>
          </svg>
            <img src={img} width='130' height='100' alt="test"/>
            <h2 className='title off-white'>{title}</h2>
            <p className='description off-white'>{tagline}</p>
        </div>
    </>
  )
}

// https://www.shapedivider.app/