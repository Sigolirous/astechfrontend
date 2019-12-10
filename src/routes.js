import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Login from './pages/dashboard/dshLogin'
export default function Routes(){
    return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path = "/dashboard" component={Login}/>
                </div>
            </BrowserRouter>
    )
}