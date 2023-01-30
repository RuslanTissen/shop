import React from 'react'
import './Header.css'
import { IconButton } from '@mui/material';
import { FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";

function Header() {
	const userCardTemplate = document.querySelector('[data-user-template]')
	const userCardContainer = document.querySelector('[data-user-cards-container]')
	const searchInput = document.querySelector('[data-search]')

	fetch("https://jsonplaceholder.typicode.com/users")
		.then(res => res.json())
		.then(data => {
			data.forEach(user => {
				const card = userCardTemplate.content.cloneNode(true).children[0]
				const header = card.querySelector('[data-header]')
				const body = card.querySelector('[data-body]')
				header.textContent = user.name
				body.textContent = user.email
				userCardContainer.append(card )
			})
		});

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
				<input type="search" id="search " data-search/>
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