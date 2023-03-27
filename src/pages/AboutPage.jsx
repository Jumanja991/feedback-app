import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
	return (
		<div>
			<Card>
				<div className='about'>
					<h1>About page</h1>
					<p>This is App to leave a review</p>
					<p>
						Version: <strong>1.0.0</strong>
					</p>
					<p>
						<Link to='/'>Go back</Link>
					</p>
				</div>
			</Card>
		</div>
	)
}

export default AboutPage
