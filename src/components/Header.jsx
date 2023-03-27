import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header({ text, bgColor, color }) {
	const headerStyle = {
		backgroundColor: bgColor,
		color: color,
	}
	return (
		<header style={headerStyle}>
			<div className='container'>
				<Link to='/' className='logo-link'>
					<h2>{text}</h2>
				</Link>
			</div>
		</header>
	)
}

Header.defaultProps = {
	text: 'Feedback App',
	bgColor: 'rgba(0, 0, 0, 0.5)',
	color: '#ff6a95',
}

Header.propTypes = {
	text: PropTypes.string.isRequired,
	bgColor: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
}

export default Header
