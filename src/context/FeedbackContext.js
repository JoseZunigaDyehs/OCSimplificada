import React, { useContext, useState } from 'react'

const FeedbackContext = React.createContext()

function FeedbackProvider({ children }) {
	const [feedback, setFeedback] = useState({ message: '', open: false })
	const handleSetFeedback = ({ open, message = '', type = 'error' }) => {
		setFeedback({ message, open, type })
	}
	return (
		<FeedbackContext.Provider
			value={{ setFeedback: handleSetFeedback, ...feedback }}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

function useFeedback() {
	const context = useContext(FeedbackContext)
	if (!context) {
		throw new Error(`useFeedback must be used within a FeedbackProvider`)
	}
	return context
}

export { FeedbackProvider, useFeedback }
