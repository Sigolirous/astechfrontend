import React from 'react';
import API from '../../services/api'
import style from '../../style/style.css'
import homeIcon from '../../images/home.svg'
import emailIcon from '../../images/email.svg'
import productsIcon from '../../images/laptop.svg'
import logo from '../../images/logoBW.svg'
import coloredLogo from '../../images/logo.svg'

export default class OneProject extends React.Component {
    state = {
        project:[]
    }
    constructor(props) {
        super(props)
        this.myRef = React.createRef()  
    }
    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)  
    componentDidMount(){
        API.get(`/products?productId=${this.props.id}`).then(res=>{
            this.setState({project:res.data.results})
        })
    }
    componentDidUpdate(){
        this.scrollToMyRef()
    }
    render() { 
        return (
            <div className="containerProject">
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
              <div ref={this.myRef}></div>
          </header>
            <main>
                {this.state.project.map(project=>{
                    return(
                        <div className="oneProject">
                            <h1>{project.productname}</h1>
                            <img src={project.productimage} alt="project image"/>
                            <h2>About the project:</h2>
                            <p>{project.productinfo}</p>
                            <h2><b><a href={`${project.productlink}`}>Click here to see the project running</a></b></h2>
                            <h2>Price:<b><a href={`/contact?order=yes&id=${project.productid}`}>${project.productprice}</a></b></h2><br/>
                            <br/>
                            <a href="/projects" className="backButton"> &#60;&#60; Back</a>
                        </div>
                    )
                })}
                <br/>
            </main>
            <footer>
                <p>Created by Augusto Sigolo | 2019-2020</p>
            </footer>
        </div>
        );
    }
}
 
