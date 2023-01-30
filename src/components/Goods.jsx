import React from "react";
import './Goods.css'

function Goods() {
	const userCardTemplate = document.querySelector('[data-user-template]')
	const userCardContainer = document.querySelector('[data-user-cards-container]')
	// const searchInput = document.querySelector('[data-search]')

	

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
		<div className="section-goods">
			<div className="user-cards" data-user-cards-container></div>

			{/* <template data-user-template>
				<div className="card">
					<div className="card-header" data-header></div>
					<div className="card-body" data-body></div>
				</div>
			</template> */}
			
		</div>
	)
}

export default Goods