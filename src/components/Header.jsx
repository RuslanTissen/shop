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
				</a>
				<h2>TELAS GROUP</h2>

			</div>


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