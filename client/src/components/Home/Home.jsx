import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-body'>
      <div className='home-container'>
        <div className='home-tagline'>The perfect razor, for the perfect you</div>
      </div>
      <div>
        <div className='main-body'>
          <div className='main-container'>
            <div className='about-box'>
              <img className="main-icons" src={("https://res.cloudinary.com/radiscipio/image/upload/v1570468905/ykhmkkk00l3k0hshcf5k.png")} alt="" />
              <div>
                Hand crafted by Japanese Master Swordsmiths, in a secluded forest, on top of a mountain
              </div>
            </div>
            <div className='about-box'>
              <img className="main-icons" src={("https://res.cloudinary.com/radiscipio/image/upload/v1570468905/lkhwj4bhtfnabts8s6xo.png")} alt="" />
              <div>The last razor you'll ever need</div>
              <div><Link className='product-link' to='/Products'>See them here</Link></div>
            </div>
            <div className='about-box'>
              <img className="main-icons" src={("https://res.cloudinary.com/radiscipio/image/upload/v1570468905/qtrfbi11qr3dgzqqmulq.png")} alt="" />
              <div>
                Our razors wake up to the sweet melody of a twenty piece symphony orchestra. Only the best, for the best
              </div>
            </div>
          </div>
        </div>
        <div className='image-container'>
          <img className='four-panel' src={("https://res.cloudinary.com/radiscipio/image/upload/v1570471656/pkai38u2uuv5cuiu3iy2.jpg")} alt="" />
          <img className='four-panel' src={("https://res.cloudinary.com/radiscipio/image/upload/v1570471752/qywflpxingshggf1moi4.jpg")} alt="" />
          <img className='four-panel' src={("https://res.cloudinary.com/radiscipio/image/upload/v1570471794/evtjyvevdezfneqmdfhx.jpg")} alt="" />
          <img className='four-panel' src={("https://res.cloudinary.com/radiscipio/image/upload/v1570471711/roxw6izcuzwjtcupwb3c.png")} alt="" />
        </div>
      </div>
      <div className='main-container'>
        <div className='testimonial'>
          <div>"My dad came back after 18 years just to teach me how to shave with these razors"</div>
          <div>- Guy Manderson</div>
        </div>
        <div className='testimonial'>
        <div>"Shave so smooth that Rob Thomas and Santana had to make another song about it"</div>
          <div>- Jackson Michaels</div>
        </div>
        <div className='testimonial'>
        <div>"Please leave me alone, I've never even heard of that company before"</div>
          <div>- Some guy named Barry</div>
        </div>
      </div>
    </div>
  )
}


export default Home