import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Header.css'
import { IconButton } from '@mui/material';
import { FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";

function Header() {
	// let [info, setInfo] = useState([])
	let [name, setName] = useState([])
	let [email, setEmail] = useState([])

	let names = []

	function fetchData() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(data => {
				// setInfo(data)
				// console.log(info);
				data.map(nm => {
					setName(nm.name)
					setEmail(nm.email)
					return console.log({ name, email });
				})
			})
			.catch(e => console.error(e))
	}

	useEffect(() => {
		fetchData()
	}, [])



	// const userCardTemplate = document.querySelector('[data-user-template]')
	// const userCardContainer = document.querySelector('[data-user-cards-container]')
	// const searchInput = document.querySelector('[data-search]')

	// let users = []

	// searchInput.addEventListener("input", (e) => {
	// 	const value = e.target.value
	// 	users.forEach(user => {
	// 		console.log(user);
	// 		const isVisible = user.name.includes(value) || user.email.includes(value)
	// 		user.element.classList.toggle("hide", !isVisible)
	// 	});
	// })

	// fetch("https://jsonplaceholder.typicode.com/users")
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		users = data.map(user => {
	// 			const card = userCardTemplate.content.cloneNode(true).children[0]
	// 			const header = card.querySelector("[data-header]")
	// 			const body = card.querySelector('[data-body]')
	// 			header.textContent = user.name
	// 			body.textContent = user.email
	// 			userCardContainer.append(card)
	// 			return { name: user.name, email: user.email, element: card }
	// 		})
	// 	});

	return (
		<div className="header-and-midle">
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
					<input type="search" id="search" data-search />
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

			<div className="section-goods" >
				<div className="user-cards" data-user-cards-container>
					{name + " " + email}
				</div>
			</div>

			<template data-user-template>
				<div className="card">
					<div className="card-header" data-header></div>
					<div className="card-body" data-body ></div >
				</div >
			</template >

		</div >
	)
}

export default Header