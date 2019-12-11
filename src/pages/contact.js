import React, {useRef} from 'react';
import style from '../style/style.css'
import queryString from 'query-string'
import homeIcon from '../images/home.svg'
import emailIcon from '../images/email.svg'
import productsIcon from '../images/laptop.svg'
import logo from '../images/logoBW.svg'
import coloredLogo from '../images/logo.svg'
import API from '../services/api'
const Recaptcha = require('react-recaptcha');


export default class Contact extends React.Component {
    constructor(props) {
        super();
        this.state = {
                from:"",
                subject:"order",
                order:"No",
                projectId: "No order",
                message:"",
                autenticated:false,
                captchaInstanse:undefined
        };
        this.myRef = React.createRef()
        this.submitEmail = (e) => {
            if(this.state.autenticated === true){
                API.post('/sendMail', this.state).then((res)=>{
                    if(res.data.error){
                        alert("I'm sorry, an error has occured while trying to send this email. Come back later or send a diret amail to contato.augustosigolo@gmail.com")
                        this.captchaInstanse.reset();
                    }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.state.from) === false){
                        alert('Input a valid email so I can return you')
                    }else{
                        this.setState({
                            from:"",
                            subject:"",
                            message:"",
                            autenticated:false,
                        })
                        this.captchaInstanse.reset();
                        alert('Thanks, I will be returning you email soon!')
                    }
                    
                })
            }else{
                alert('Verify if you´re a human')
            }
            e.preventDefault();
        };
        this.onChange = (e) => {
            const cState = Object.assign({}, this.state)
            const field = e.target.id
            cState[field] = e.target.value
            this.setState(cState) 
        }
        this.urlHandle = (e) =>{
            const url = this.props.location.search;
            const params = queryString.parse(url);
            if(params.order && params.id){
                this.setState({order:params.order,
                projectId: params.id})
            }
        }
        this.callback = function () {
            console.log('Done!!!!');
          };
        this.verifyCallback =(res) =>{
            if(res){
                this.setState({autenticated: true})
            }
        }
        this.scrollToMyRef = () => window.window.scrollTo(0, this.myRef.current.offsetTop)
      }
      componentDidMount(){
          this.urlHandle()
          this.scrollToMyRef()
      }
      componentDidUpdate(){
        this.scrollToMyRef()
      }
    render() {
        return (
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
              <div id="main" ref={this.myRef}></div>
          </header><br/>
            <main>
               <div className="emailFormContainer">
                    <div className="emailForm">
                        <form onSubmit={this.submitEmail}>
                            <input id="from" type="email" placeholder="Your Best Email" required value={this.state.from} onChange={this.onChange}/>
                            <select id="subject" required value={this.state.subject} onChange={this.onChange}>
                                <option value="order">I want to order a project!</option>
                                <option value="problem">There is a problem with a project I bought from you!</option>
                                <option value="chat">I just want to chat!</option>
                            </select>
                            <textarea id="message" placeholder="What you want to tell me about it?" required value={this.state.message} onChange={this.onChange}></textarea><br/>
                            <div className="captcha">
                                <Recaptcha
                                    ref={e => this.captchaInstanse = e}
                                    sitekey="6LeN3cYUAAAAAKeaOUYjaOCcoLgrJAT6YnKqLUQm"
                                    render="explicit"
                                    onloadCallback={this.callback}
                                    verifyCallback={this.verifyCallback}
                                />
                            </div>
                            <input type="submit" onClick={this.submitEmail} value="Submit"/>
                        </form>
                    </div>
               </div>
            </main>
            <footer>
                <p>Created by Augusto Sigolo | 2019-2020</p>
            </footer>
        </div>
        );
    }
}