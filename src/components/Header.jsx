import React from 'react'
import './Header.css'
import { IconButton } from '@mui/material';
import { FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";

function Header() {
	return (
		<div className='header'>
			<div className="telas__logo">
				<a href='#/' target="#" className='link__logo'>
					<img className='header__logo'
						src='images/telas_LOGO.jpg'
						alt='logo' />
				<p>TELAS GROUP</p>	
				</a>
			</div>

			<div className="search-wrapper">
				<input type="search" id="search" />
			</div>
			{/* <div className="user-cards">
				<div className="cards">
					<div className="card-header">Name</div>
					<div className="card-body">email</div>
				</div>
			</div> */}

			<div className='logos__container'>
				<IconContext.Provider value={{ color: 'black' }}>
					<IconButton>
						<FaInstagram />
					</IconButton>
					<IconButton>
						<FaFacebookF />
					</IconButton>
					<IconButton>
						<FaTiktok />
					</IconButton>
				</IconContext.Provider >
			</div>
		</div >
	)
}

export default Header