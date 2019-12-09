import React from 'react';
import style from '../../style/style.css'
import homeIcon from '../../images/home.svg'
import emailIcon from '../../images/email.svg'
import productsIcon from '../../images/laptop.svg'
import logo from '../../images/logoBW.svg'
import coloredLogo from '../../images/logo.svg'
import API from '../../services/api'

export default class AllProducts extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()  
  }  
  state={
        projects:[],
        firstItem:0,
        lastItem: 4
      }
      tagChanger=(tag)=>{
        if(tag !== ''){
          API.get(`/products?tag=${tag}`).then(res=>{
            this.setState({projects:res.data.results})
          })
        }else{
          API.get(`/products`).then(res=>{
            this.setState({projects:res.data.results})
          })
        }
        
      }
      paginationNext = (e) => {
        this.setState({firstItem: this.state.firstItem+5, lastItem: this.state.lastItem+5})
        e.preventDefault() 
      }
      paginationBefore = (e) => {
        this.setState({firstItem: this.state.firstItem-5, lastItem: this.state.lastItem-5})
        e.preventDefault() 
      }
      scrollToMyRef = () => window.window.scrollTo(0, this.myRef.current.offsetTop)
      componentDidMount(){
        API.get('/products').then(res=>{
          this.setState({projects:res.data.results})
        })
        this.scrollToMyRef()
      }
      componentDidUpdate(){
        this.scrollToMyRef()
      }
    render() { 
        return (
        <div className="projectsContainer">
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
          <h1>Projects:</h1>
          <div className="sideMenu">
            <aside>
              <h3>Tags:</h3>
              <button onClick={(e)=>this.tagChanger('')}>All</button>
              <button onClick={(e)=>this.tagChanger('caixa')}>Site</button>
              <button onClick={(e)=>this.tagChanger('foto')}>Personal Pages</button>
              <button>Twitter bots</button>
          </aside>
          </div>
          <div className="cards">
            {this.state.projects.slice(this.state.firstItem, this.state.lastItem).map(project=>{
              return(
                <div className="productCard" key={project.productid}>
                  <img src={project.productimage} alt="project image"/>
                  <div className="cardContainer">
                    <a href={`/projects?id=${project.productid}`}><h4>{project.productname}</h4></a>
                    <p>{project.productinfo}</p>
                    <b>${project.productprice}</b><br/>
                    <small>{project.productid}</small>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="buttons">
              <button value="Before" onClick={this.paginationBefore}>&lt;&lt;</button>
              <button value="Next" onClick={this.paginationNext}>&gt;&gt;</button>
          </div>
          </main>
          <footer>
              <p>Created by Augusto Sigolo | 2019-2020</p>
          </footer>
         </div>
        );
    }
}