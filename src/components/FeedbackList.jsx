import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList({ feedback, handleDelete }) {
	{
		if (!feedback || feedback.lenght === 0) return <p>No Feedback yet</p>
	}
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem
							key={item.id}
							item={item}
							handleDelete={(id) => handleDelete(id)}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

export default FeedbackList

FeedbackList.propTypes = {
	feedback: PropTypes.array.isRequired,
}

FeedbackList.defaultProps = {
	feedback: [],
}
