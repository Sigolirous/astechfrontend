import React, {useRef} from 'react';
import style from '../style/style.css'
import queryString from 'query-string'
import homeIcon from '../images/home.svg'
import emailIcon from '../images/email.svg'
import productsIcon from '../images/laptop.svg'
import logo from '../images/logoBW.svg'
import coloredLogo from '../images/logo.svg'
import API from '../services/api'
import Recaptcha from 'react-recaptcha'

export default class Contact extends React.Component {
    constructor(props) {
        super();
        this.state = {
                from:"",
                subject:"order",
                order:"No",
                projectId: "No order",
                message:"",
        };
        this.submitEmail = (e) => {
            API.post('/sendMail', this.state).then((res)=>{
                if(res.data.error){
                    alert("I'm sorry, an error has occured while trying to send this email. Come back later or send a diret amail to contato.augustosigolo@gmail.com")
                }else{
                    this.setState({
                        from:"",
                        subject:"",
                        message:""
                    })
                    alert('Thanks, I will be returning you email soon!')
                }
            })
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
        this.callbackRecaptcha = () => {
            console.log('Recaptcha loaded')
        }
      }
      componentDidMount(){
          this.urlHandle()
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
              <div ref={this.myRef}></div>
          </header><br/>
            <main>
               <div className="emailFormContainer">
                    <div className="emailForm">
                        <form onSubmit={this.submitEmail}>
                            <input id="from" type="email" placeholder="Your Best Email" value={this.state.from} onChange={this.onChange}/>
                            <select id="subject" value={this.state.subject} onChange={this.onChange}>
                                <option value="order">I want to order a project!</option>
                                <option value="problem">There is a problem with a project I bought from you!</option>
                                <option value="chat">I just want to chat!</option>
                            </select>
                            <textarea id="message" placeholder="What you want to tell me about it?" value={this.state.message} onChange={this.onChange}></textarea><br/>
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