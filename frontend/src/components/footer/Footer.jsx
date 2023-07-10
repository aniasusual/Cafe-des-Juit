import React from 'react'
import './footer.scss'
import SocialIcons from '../../assets/socialicons/SocialIcons'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Cafe des Juit</a>
      <div className="otherContent">
        <div className="contact">
            <h2>Contact cafe</h2>
            <div className="info">
                <div>Animesh Dhillon</div>
                <div>+91 9350409792</div>
                <div>d.animesh.pr@gmail.com</div>
            </div>
        </div>

        <div className="otherProducts">
            <h2>Also check out</h2>
            <a href="#" target="_blank">Juit Social</a>
        </div>

        <div className="developerContact">
            <h2>Contact Developer</h2>
            <div className="info">
                <div>Animesh Dhillon</div>
                <div>+91 9350409792</div>
                <div>d.animesh.pr@gmail.com</div>
            </div>
         
        
        </div>
      </div>
            <SocialIcons position='footer__socialicons' />
        <div className="footer__copyright">
          <small>&copy; {new Date().getFullYear()} ANIMESH DHILLON. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer