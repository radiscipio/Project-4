import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='home-container'>
        <div className='home-tagline'>The perfect razor, for the perfect you</div>
      </div>
      <div>
        <div className='main-body'>
          <div className='main-container'>
            <div className='sword'>
              <img className="main-icons" src={("https://res.cloudinary.com/radiscipio/image/upload/v1570468905/ykhmkkk00l3k0hshcf5k.png")} />
              <div>
                We employ Japanese Master Swordsmiths to make the perfect razor
              </div>
            </div>
            <div className='main-razor'>
            <img className="main-icons" src={("https://res.cloudinary.com/radiscipio/image/upload/v1570468905/lkhwj4bhtfnabts8s6xo.png")} />
              <div className='main-right-tag'>The last razor you'll ever need</div>
              <div><Link className='product-link' to='/Products'>See them here</Link></div>
            </div>
            <div className='main-music'>
              <img className="main-icons" src={("https://res.cloudinary.com/radiscipio/image/upload/v1570468905/qtrfbi11qr3dgzqqmulq.png")} />
              <div>
              Our razors wake up to the sweet melody of a twenty piece symphony orchestra. Only the best, for the best
              </div>
          </div>
          </div>
        </div>
        <div className='image-container'>
          <img className='four-panel' src={("https://res.cloudinary.com/radiscipio/image/upload/v1570471656/pkai38u2uuv5cuiu3iy2.jpg")} />
          <img className='four-panel' src={("https://res.cloudinary.com/radiscipio/image/upload/v1570471752/qywflpxingshggf1moi4.jpg")} />
          <img className='four-panel' src={("https://res.cloudinary.com/radiscipio/image/upload/v1570471794/evtjyvevdezfneqmdfhx.jpg")} />
          <img className='four-panel' src={("https://res.cloudinary.com/radiscipio/image/upload/v1570471711/roxw6izcuzwjtcupwb3c.png")} />
        </div>
      </div>
    </div>
  )
}


export default Home