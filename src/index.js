import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Javascript from './components/Javascript';
import Python from './components/Python';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import registerServiceWorker from './registerServiceWorker';



const Root = () =>
<Router>
    <div>
        
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">News App</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
              <NavItem>
	            <NavLink to="/" exact activeClassName="active">Home</NavLink>
	          </NavItem>
	          <NavItem>
	            <NavLink to="/Javascript" activeClassName="active">Javascript</NavLink>
	          </NavItem>
	          <NavItem>
	            <NavLink to="/Python" activeClassName="active">Python</NavLink>
	          </NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={ App } />
        <Route exact path="/javascript" component={ Javascript } />
        <Route exact path="/python" component={ Python } />
    </div>
</Router>

const About = () =>
<div>
    <h1>This is about page...</h1>
</div>

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
