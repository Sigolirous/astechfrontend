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
                Hello, my name is Augusto Sigolo.<br/>
                I started programming very young, around the age of 10 when I had my first contact with the "C" language. Since then I have been experimenting with a wide range of languages and nowadays I work especially with Python and Javascript (NodeJs and react), as well as developing Wordpress projects. That's why task automation and web design are my strengths within software development. However, over time, I also developed skills with graphic design, marketing (email, social media, etc) and data query. See everything I've done in the <a href="/projects"><b>projects</b></a> section and <a href="/contact"><b>contact</b></a> me. It will be a pleasure to develop a project made especially for you.
                </p><br/><br/>
                <div className="skillsBoard">
                    <div className="skill">
                        <h2>Software Development:</h2>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Social Media Bots</li>
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
                        <li>Data query</li>
                    </div>
                </div>
            </main>
            <footer>
                <p>Created by Augusto Sigolo | 2019-2020</p>
            </footer>
        </div>
    )
}