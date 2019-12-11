import React, {useRef} from 'react';
import style from '../style/style.css'
import homeIcon from '../images/home.svg'
import emailIcon from '../images/email.svg'
import productsIcon from '../images/laptop.svg'
import logo from '../images/logoBW.svg'
import coloredLogo from '../images/logo.svg'

export default function Home(){
    return(
        <div className="container">
          <header>
              {/* Desktop menu */}
              <nav>
                  <img src={coloredLogo} alt="colored logo" className="navLogo"/>
                  <div className="menuContent">
                      <a href="/">| Home | </a>
                      <a href="/projects">Projects | </a>
                      <a href="/contact">Contact | </a>
                  </div>
              </nav>
              {/* Mobile menu */}
              <nav className="smallNav">
              <a href="/"><img src={homeIcon} alt="Home icon"/></a>
              <a href="/projects"><img src={productsIcon} alt="Products icon"/></a>
              <a href="/contact"><img src={emailIcon} alt="Email icon"/></a>
              </nav>
              <h1>Augusto Sigolo</h1>
              <p>Technological solutions to you</p>
               <a href="#main"><img src={logo} alt="logo" className="dropButton"/></a>
              <div id="main"></div>
          </header><br/>
            <main>
                <h1>About My work:</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p><br/><br/>
                <div className="skillsBoard">
                    <div className="skill">
                        <h2>Software Development:</h2>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Twitter Bots</li>
                    </div>
                    <div className="skill">
                        <h2>Electronics:</h2>
                        <li>Arduino</li>
                        <li>Radio</li>
                    </div>
                    <div className="skill">
                        <h2>Marketing:</h2>
                        <li>Email marketing</li>
                        <li>Social media marketing with bots</li>
                    </div>
                </div>
            </main>
            <footer>
                <p>Created by Augusto Sigolo | 2019-2020</p>
            </footer>
        </div>
    )
}