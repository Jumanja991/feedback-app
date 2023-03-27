import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {

    const ratingsSum = feedback.reduce((sum, feedbackItem) => sum + feedbackItem.rating, 0);
    const averageRating = ratingsSum / feedback.length;

  return (
    <div className="feedback-stats">
    <h4>{feedback.length} Reviews</h4>
    <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating.toFixed(1).replace(/[.,]0$/,"") }</h4>
    </div>
  )
}

export default FeedbackStats

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

FeedbackStats.defaultProps = {
    feedback: [],
}
