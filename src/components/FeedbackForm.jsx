import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm({handleAdd}) {
	const [text, setText] = useState('')
	const [rating, setRating] = useState(10)
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true)
			setMessage(null)
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true)
			setMessage('Please write at least 10 characters')
		} else {
			setBtnDisabled(false)
			setMessage(null)
		}
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (text !== '' && text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			}
			handleAdd(newFeedback)
			setBtnDisabled(true)
			setMessage('Thank you for your feedback!')
		}
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate our service?</h2>
				<RatingSelect select={setRating} selected={rating} />
				<div className='input-group'>
					<input
						type='text'
						onChange={handleTextChange}
						placeholder='Write your Review'
						value={text}
					/>
					<Button type='submit' isDisable={btnDisabled} version='secondary'>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm
