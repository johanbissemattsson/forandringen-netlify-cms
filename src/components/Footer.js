import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo2.svg'

const Footer = () => (
  <div className='site-footer-container'>
    <footer className='site-footer'>
      <nav>
        <Link to="/" className='home-link'>
          <figure className='image'>
            <img src={logo} alt='Förändringen' style={{ width: '100%', height: 'auto', maxWidth: '360px', margin: '0'}} />
          </figure>
        </Link>
        <div className='social-links'>
          <a href='https://www.facebook.com/knashemma/' className='social-link'>
            <svg viewBox='0 0 24 24' className='social-icon'>
              <path fill='#fff' d='M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z' />
            </svg>
          </a>
          <a href='https://www.twitter.com/knashemma/' className='social-link'>
            <svg viewBox='0 0 24 24' className='social-icon'>
              <path fill="#fff" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z" />                  
            </svg>
          </a>
        </div>
      </nav>
      <div className='site-info'>
        <div className='site-description'>
          <p><strong>Förändringen AB</strong> lorem ipsum ad est dolores finalique voriste quantum ad est. Domingo florentin qualiste eros quantum domingo florentin. Pling plong. Hej.</p>
        </div>
        <div className='site-contact'>
          <div className='email'>
              <h2>Mejla oss</h2>
              <a href='mailto:anna@forandring.nu'>anna@forandring.nu</a>
          </div>
          <div className='phone'>
            <h2>Ring oss</h2>
            <a href='tel:08-320003030'>08-320003030</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer
