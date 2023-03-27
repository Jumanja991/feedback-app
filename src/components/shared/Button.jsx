import PropTypes from 'prop-types'

const Button = ({ children, version, type, isDisable }) => {
	return (
		<button type={type} disabled={isDisable} className={`btn btn-${version}`}>
			{children}
		</button>
	)
}

Button.defaultProps = {
	version: 'primary',
	type: 'button',
	isDisable: false,
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	version: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'danger',
		'warning',
		'info',
		'light',
		'dark',
	]),
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	isDisable: PropTypes.bool,
}

export default Button
