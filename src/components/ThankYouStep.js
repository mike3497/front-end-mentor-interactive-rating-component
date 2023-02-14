import React from 'react';
import './ThankYouStep.css';

const ThankYouStep = ({ selectedRating }) => {
	return (
		<div className="thank-you-step">
			<img
				className="thank-you-step__image"
				src="svgs/illustration-thank-you.svg"
				alt="Thank You Illustration"
			/>
			<div className="thank-you-step__rating">
				You selected {selectedRating} out of 5
			</div>
			<h6 className="thank-you-step__heading">Thank you!</h6>
			<p className="thank-you-step__paragraph">
				We appreciate you taking the time to give a rating. If you ever need
				more support, don't hesitate to get in touch!
			</p>
		</div>
	);
};

export default ThankYouStep;
