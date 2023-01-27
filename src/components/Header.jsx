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
						src='https://scontent.faep14-3.fna.fbcdn.net/v/t39.30808-6/280801944_558309148983574_2186507381685286523_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hphpXi1DX_8AX9_RGI2&_nc_oc=AQlqYEn4bJ2PiTG2mipaRnFxc1gTRPRfNGIfjrZTdOOS15Xxhi7q5m3rbRa5GlXUW64&_nc_ht=scontent.faep14-3.fna&oh=00_AfBLZWypUzKQma7zVBZzcJhYDzyl8QxtvIV14gezgHR_Og&oe=63D4FD4C'
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