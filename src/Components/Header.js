import React, {Component} from 'react'
import {Navbar, Nav, FormControl , Form, Container, Button} from 'react-bootstrap'
import logo from './logo512.png'
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

class Header extends Component{
      render(){
          return(
               // collapseOnselect - дает адаптивность навбару чтоб он мог разворачиваться  сворачиваться
              //  expand={md-medium, lg-large ,xl,sm} -, брекпоинт для адаптивности для сворачиванию меню
              <>
              <Navbar  collapseOnSelect expand='md' bg='dark' variant='dark'>
                  <Container>
                      <Navbar.Brand href='/'>
                          <img
                              src={logo}
                              height='25'
                              width='30'
                              className='d-inline-block align-top'
                              alt='Logo'
                              />
                             <sub className='text-info'>ReBest</sub>
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                      <Navbar.Collapse id='responsive-navbar-nav '>
                          <Nav className='mr-auto h4 '>
                            <Nav.Link  href='/'>Home</Nav.Link>
                            <Nav.Link  href='/about'>About</Nav.Link>
                            <Nav.Link  href='/contact'>Contact</Nav.Link>
                            <Nav.Link  href='/blog'>Blog</Nav.Link>
                          </Nav>
                      </Navbar.Collapse>
                      <Form inline>
                      <FormControl
                          type='text'
                          placeholder='Search'
                          className='mr-ms-2'
                      />
                      <Button variant='outline-info'>Search</Button>
                  </Form>
                  </Container>
              </Navbar>
                  <Router>
                      <Switch>
                          <Route exact path='/' component={Home}/>
                          <Route exact path='/about' component={About}/>
                          <Route exact path='/contact' component={Contacts}/>
                          <Route exact path='/blog' component={Blog}/>
                      </Switch>
                  </Router>
                  </>
          )
      }
}
export default  Header;