import PropTypes from 'prop-types'

function Card({ children, reverse }) {
	return (
		<div
			className='card'
			style={{
				backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : 'white',
				color: reverse ? 'white' : 'black',
			}}
		>
			{children}
		</div>
	)
}
export default Card

Card.defaultProps = {
	reverse: false,
}

Card.prototype = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
}
