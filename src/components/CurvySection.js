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
          
          
          <svg xmlns="http://www.w3.org/2000/svg" style={smlSvg} width="16" height="96" fill="currentColor" class="bi bi-tree" viewBox="0 0 16 16">
  <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z"/>
</svg>
           
            <img src={img} width='130' height='100' alt="test"/>
            <h2 className='title off-white'>{title}</h2>
            <p className='description off-white' style={{marginTop: '0px', marginBottom: '5rem'}}>{tagline}</p>
        </div>
    </>
  )
}

// https://www.shapedivider.app/