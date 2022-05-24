import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsGithub, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

import { Link } from "react-router-dom";

import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';



function App() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div style={{
			display: 'block',
			// padding: 30,
		}}>

			<Navbar color="light" light expand="md" className='shadow'>
				<NavbarBrand className='text-bolder logoname' href="#"><Link to="/">Enrik Hoxha</Link> </NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem className='nav-padding'>
							<NavLink className='text-bold navhome' href="#">
								<Link to='/'> Home
								</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='mx-3 text-bold navhome' >
								<Link to='/about'>About
								</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='text-bold navhome' href="#">
								<Link to='/services'>Services
								</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='text-bold navhome' href="#">
								<Link to='/projects'>Projects
								</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='mx-3 text-bold navhome' href="#">
								<Link to='/contact'>Contact
								</Link>
							</NavLink>
						</NavItem>
					</Nav>
					<Nav>
						<NavItem>
							<NavLink href="https://github.com/enrikhoxha/"><BsGithub /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://m.facebook.com/enrik.hoxha.54966"><BsFacebook /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.instagram.com/enrik.hoxha/"><BsInstagram /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.linkedin.com/in/enrikhoxha"><BsLinkedin /></NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div >
	);
}

export default App;
