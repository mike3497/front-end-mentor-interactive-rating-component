import React from 'react';
import './SelectRatingStep.css';

const SelectRatingStep = ({ setSelectedRating, selectedRating, setStep }) => {
	const handleClickSubmitButton = (e) => {
		e.preventDefault();

		if (selectedRating) {
			setStep(2);
		}
	};

	return (
		<div className="select-rating">
			<div className="select-rating__star">
				<img src="svgs/icon-star.svg" alt="Star Icon" />
			</div>
			<h6 className="select-rating__heading">How did we do?</h6>
			<p className="select-rating__paragraph">
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</p>
			<form
				className="select-rating__form"
				onSubmit={(e) => handleClickSubmitButton(e)}
			>
				<div className="select-rating__radio-container">
					<div className="select-rating__radio">
						<input
							id="radio-1"
							type="radio"
							name="rating"
							value="1"
							onChange={(e) => setSelectedRating(e.target.value)}
						/>
						<label htmlFor="radio-1">1</label>
					</div>
					<div className="select-rating__radio">
						<input
							id="radio-2"
							type="radio"
							name="rating"
							value="2"
							onChange={(e) => setSelectedRating(e.target.value)}
						/>
						<label htmlFor="radio-2">2</label>
					</div>
					<div className="select-rating__radio">
						<input
							id="radio-3"
							type="radio"
							name="rating"
							value="3"
							onChange={(e) => setSelectedRating(e.target.value)}
						/>
						<label htmlFor="radio-3">3</label>
					</div>
					<div className="select-rating__radio">
						<input
							id="radio-4"
							type="radio"
							name="rating"
							value="4"
							onChange={(e) => setSelectedRating(e.target.value)}
						/>
						<label htmlFor="radio-4">4</label>
					</div>
					<div className="select-rating__radio">
						<input
							id="radio-5"
							type="radio"
							name="rating"
							value="5"
							onChange={(e) => setSelectedRating(e.target.value)}
						/>
						<label htmlFor="radio-5">5</label>
					</div>
				</div>
				<button className="select-rating__submit-button">Submit</button>
			</form>
		</div>
	);
};

export default SelectRatingStep;
